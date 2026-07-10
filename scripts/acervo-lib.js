/**
 * Biblioteca compartilhada para gerar acervo escolar (JSON).
 */
const fs = require("fs");
const path = require("path");

const ACERVO = path.join(__dirname, "..", "acervo");

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

function wiki(title, url) {
  return {
    source: `Wikipedia (pt) — ${title} (adaptado)`,
    sourceUrl: url,
    license: "CC BY-SA 4.0 — texto adaptado para uso escolar; atribuição mantida",
  };
}

function bnccOnly() {
  return {
    source: "BNCC / MEC (estrutura curricular)",
    sourceUrl: "https://basenacionalcomum.mec.gov.br/",
    license: "Documento oficial — estrutura; texto pedagógico adaptado para o app",
  };
}

/**
 * @param {object} opts
 * @param {string} opts.id
 * @param {string} opts.name
 * @param {string} opts.slug
 * @param {number} opts.order
 * @param {string[]} opts.levels
 * @param {string} opts.color
 * @param {string} opts.description
 * @param {Array<{unit:string, items:Array}>} opts.units
 */
function generateSubject(opts) {
  const root = path.join(ACERVO, opts.slug);
  const dirs = {
    root,
    c8: path.join(root, "conteudos", "8ano"),
    c9: path.join(root, "conteudos", "9ano"),
    c1: path.join(root, "conteudos", "1medio"),
  };
  Object.values(dirs).forEach(ensureDir);

  const topics = [];
  const byLevel = { "8ano": [], "9ano": [], "1medio": [] };
  let order = 1;

  for (const block of opts.units) {
    for (const item of block.items) {
      const levels = item.levels;
      const topicId = item.id;
      topics.push({
        id: topicId,
        subjectId: opts.id,
        title: item.title,
        slug: item.slug,
        unit: block.unit,
        order: order++,
        levels,
        bnccCodes: item.bncc || [],
      });

      const meta = item.wiki ? wiki(item.wiki[0], item.wiki[1]) : bnccOnly();
      const content = {
        id: `content-${topicId}`,
        topicId,
        subjectId: opts.id,
        slug: item.slug,
        title: item.title,
        summary: item.summary,
        body: String(item.body).trim(),
        levels,
        bnccCodes: item.bncc || [],
        unit: block.unit,
        exercises: [
          {
            q: `Resuma em 2–3 frases o tópico "${item.title}".`,
            type: "aberta",
          },
          {
            q: "Cite dois pontos principais deste conteúdo.",
            type: "aberta",
          },
        ],
        ...meta,
        updatedAt: "2026-07-10",
      };

      for (const lv of levels) {
        if (byLevel[lv]) byLevel[lv].push(content);
      }
    }
  }

  // Grava um arquivo por conteúdo no primeiro level (evita duplicar disco).
  // Se tiver vários levels, grava na pasta do level "principal" (primeiro da lista)
  // e também lista no manifesto todos os levels.
  const written = { "8ano": [], "9ano": [], "1medio": [] };
  const seen = new Set();

  for (const block of opts.units) {
    for (const item of block.items) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);
      const levels = item.levels;
      const primary = levels.includes("9ano")
        ? "9ano"
        : levels.includes("8ano")
          ? "8ano"
          : "1medio";
      const meta = item.wiki ? wiki(item.wiki[0], item.wiki[1]) : bnccOnly();
      const content = {
        id: `content-${item.id}`,
        topicId: item.id,
        subjectId: opts.id,
        slug: item.slug,
        title: item.title,
        summary: item.summary,
        body: String(item.body).trim(),
        levels,
        bnccCodes: item.bncc || [],
        unit: block.unit,
        exercises: [
          {
            q: `Resuma em 2–3 frases o tópico "${item.title}".`,
            type: "aberta",
          },
          {
            q: "Cite dois pontos principais deste conteúdo.",
            type: "aberta",
          },
        ],
        ...meta,
        updatedAt: "2026-07-10",
      };
      const dir =
        primary === "8ano" ? dirs.c8 : primary === "9ano" ? dirs.c9 : dirs.c1;
      fs.writeFileSync(
        path.join(dir, `${item.slug}.json`),
        JSON.stringify(content, null, 2),
        "utf8"
      );
      written[primary].push(item.slug + ".json");
    }
  }

  fs.writeFileSync(
    path.join(root, "materia.json"),
    JSON.stringify(
      {
        id: opts.id,
        name: opts.name,
        slug: opts.slug,
        order: opts.order,
        levels: opts.levels,
        color: opts.color,
        description: opts.description,
        updatedAt: "2026-07-10",
      },
      null,
      2
    ),
    "utf8"
  );

  fs.writeFileSync(
    path.join(root, "topicos.json"),
    JSON.stringify(
      {
        subjectId: opts.id,
        generatedAt: "2026-07-10",
        totalTopics: topics.length,
        topics,
      },
      null,
      2
    ),
    "utf8"
  );

  const manifest = {
    subjectId: opts.id,
    generatedAt: "2026-07-10",
    counts: {
      topics: topics.length,
      files8: written["8ano"].length,
      files9: written["9ano"].length,
      files1: written["1medio"].length,
    },
    folders: {
      "conteudos/8ano": written["8ano"],
      "conteudos/9ano": written["9ano"],
      "conteudos/1medio": written["1medio"],
    },
  };
  fs.writeFileSync(
    path.join(root, "manifesto.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );

  return manifest.counts;
}

module.exports = { generateSubject, ACERVO, ensureDir };
