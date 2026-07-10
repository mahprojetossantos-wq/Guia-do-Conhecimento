/**
 * Gera o acervo de todas as matérias (exceto História, já gerada).
 * node scripts/gerar-acervo-todas.js
 */
const { matematica, portugues } = require("./acervo-mat-port");
const { geografia, ciencias } = require("./acervo-geo-cie");
const { biologia, fisica, quimica } = require("./acervo-natureza");
const {
  ingles,
  literatura,
  filosofia,
  sociologia,
  arte,
  educacaoFisica,
} = require("./acervo-linguagens");
const fs = require("fs");
const path = require("path");
const { ACERVO } = require("./acervo-lib");

const jobs = [
  ["Matemática", matematica],
  ["Língua Portuguesa", portugues],
  ["Geografia", geografia],
  ["Ciências", ciencias],
  ["Biologia", biologia],
  ["Física", fisica],
  ["Química", quimica],
  ["Inglês", ingles],
  ["Literatura", literatura],
  ["Filosofia", filosofia],
  ["Sociologia", sociologia],
  ["Arte", arte],
  ["Educação Física", educacaoFisica],
];

const summary = [];

for (const [name, fn] of jobs) {
  const counts = fn();
  summary.push({ name, ...counts });
  console.log("OK", name, counts);
}

// índice geral do acervo
const index = {
  generatedAt: "2026-07-10",
  note: "História já existia em acervo/historia. Demais matérias geradas por este script.",
  subjects: [
    { id: "historia", slug: "historia", name: "História", order: 1 },
    { id: "matematica", slug: "matematica", name: "Matemática", order: 2 },
    { id: "lingua-portuguesa", slug: "lingua-portuguesa", name: "Língua Portuguesa", order: 3 },
    { id: "geografia", slug: "geografia", name: "Geografia", order: 4 },
    { id: "ciencias", slug: "ciencias", name: "Ciências", order: 5 },
    { id: "biologia", slug: "biologia", name: "Biologia", order: 6 },
    { id: "fisica", slug: "fisica", name: "Física", order: 7 },
    { id: "quimica", slug: "quimica", name: "Química", order: 8 },
    { id: "ingles", slug: "ingles", name: "Inglês", order: 9 },
    { id: "literatura", slug: "literatura", name: "Literatura", order: 10 },
    { id: "filosofia", slug: "filosofia", name: "Filosofia", order: 11 },
    { id: "sociologia", slug: "sociologia", name: "Sociologia", order: 12 },
    { id: "arte", slug: "arte", name: "Arte", order: 13 },
    { id: "educacao-fisica", slug: "educacao-fisica", name: "Educação Física", order: 14 },
  ],
  generationSummary: summary,
};

fs.writeFileSync(
  path.join(ACERVO, "indice-materias.json"),
  JSON.stringify(index, null, 2),
  "utf8"
);

console.log("\nÍndice escrito em acervo/indice-materias.json");
console.log("TOTAL matérias geradas agora:", summary.length);
