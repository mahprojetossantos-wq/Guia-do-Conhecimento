/**
 * Sobe o acervo local (acervo/) para o Cloud Firestore.
 * Uso: node scripts/upload-acervo-firestore.js
 */
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const ROOT = path.join(__dirname, "..");
const ACERVO = path.join(ROOT, "acervo");
const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  ? path.resolve(ROOT, process.env.GOOGLE_APPLICATION_CREDENTIALS)
  : path.join(ROOT, "secrets", "firebase-service-account.json");

if (!fs.existsSync(credPath)) {
  console.error("Service account não encontrada:", credPath);
  process.exit(1);
}

admin.initializeApp({
  credential: admin.cert(require(credPath)),
  projectId: process.env.FIREBASE_PROJECT_ID || "guia-do-conhecimento-mah",
});

const db = getFirestore();

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function listContentFiles(subjectDir) {
  const conteudos = path.join(subjectDir, "conteudos");
  if (!fs.existsSync(conteudos)) return [];
  const out = [];
  for (const level of fs.readdirSync(conteudos)) {
    const levelDir = path.join(conteudos, level);
    if (!fs.statSync(levelDir).isDirectory()) continue;
    for (const name of fs.readdirSync(levelDir)) {
      if (!name.endsWith(".json")) continue;
      out.push(path.join(levelDir, name));
    }
  }
  return out;
}

async function commitInChunks(ops, size = 400) {
  for (let i = 0; i < ops.length; i += size) {
    const batch = db.batch();
    const slice = ops.slice(i, i + size);
    for (const op of slice) op(batch);
    await batch.commit();
    console.log(`  batch ${Math.floor(i / size) + 1}: ${slice.length} ops`);
  }
}

async function main() {
  const indexPath = path.join(ACERVO, "indice-materias.json");
  const index = fs.existsSync(indexPath)
    ? readJson(indexPath)
    : { subjects: [] };

  // fallback: pastas em acervo/
  let subjects = index.subjects || [];
  if (!subjects.length) {
    subjects = fs
      .readdirSync(ACERVO, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d, i) => ({ id: d.name, slug: d.name, name: d.name, order: i + 1 }));
  }

  let subjectCount = 0;
  let topicCount = 0;
  let contentCount = 0;

  for (const s of subjects) {
    const dir = path.join(ACERVO, s.slug || s.id);
    if (!fs.existsSync(dir)) {
      console.warn("Pasta ausente:", dir);
      continue;
    }

    const materiaPath = path.join(dir, "materia.json");
    const topicosPath = path.join(dir, "topicos.json");
    const materia = fs.existsSync(materiaPath)
      ? readJson(materiaPath)
      : { id: s.id, name: s.name, slug: s.slug, order: s.order };

    const subjectId = materia.id || s.id;
    console.log(`\n→ ${materia.name || subjectId}`);

    const ops = [];
    ops.push((batch) => {
      batch.set(
        db.collection("subjects").doc(subjectId),
        {
          ...materia,
          id: subjectId,
          uploadedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    });
    subjectCount++;

    if (fs.existsSync(topicosPath)) {
      const topicos = readJson(topicosPath);
      for (const t of topicos.topics || []) {
        const topicId = t.id;
        ops.push((batch) => {
          batch.set(
            db.collection("topics").doc(topicId),
            {
              ...t,
              subjectId,
              uploadedAt: FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
        });
        topicCount++;
      }
    }

    for (const file of listContentFiles(dir)) {
      const c = readJson(file);
      const contentId = c.id || path.basename(file, ".json");
      ops.push((batch) => {
        batch.set(
          db.collection("contents").doc(contentId),
          {
            ...c,
            id: contentId,
            subjectId: c.subjectId || subjectId,
            uploadedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      });
      contentCount++;
    }

    await commitInChunks(ops);
  }

  // meta
  await db.collection("_meta").doc("acervo").set(
    {
      subjects: subjectCount,
      topics: topicCount,
      contents: contentCount,
      updatedAt: FieldValue.serverTimestamp(),
      source: "acervo/ local upload",
    },
    { merge: true }
  );

  console.log("\nUpload concluído:");
  console.log({ subjectCount, topicCount, contentCount });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
