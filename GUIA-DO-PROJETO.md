# Guia do projeto — Guia do Conhecimento

Este guia é para **Maria** (e quem for ajudar no PC dela) criar o **aplicativo** com Expo, usando o banco que já está no Firebase.

Repo: https://github.com/mahprojetossantos-wq/Guia-do-Conhecimento

---

## 1. O que já está pronto (não precisa refazer)

| Parte | Status |
|--------|--------|
| Conta GitHub + repositório | Pronto |
| Projeto Firebase `guia-do-conhecimento-mah` | Pronto |
| Firestore com o acervo | Pronto |
| Conteúdos locais em `acervo/` | Pronto (cópia / backup) |
| App (telas, navegação, visual) | **Sua parte** |

Você vai construir o **app Android** (projeto Expo). O conteúdo de estudo já está na nuvem.

---

## 2. Clonar o projeto no PC

No terminal (PowerShell ou Git Bash):

```bash
git clone https://github.com/mahprojetossantos-wq/Guia-do-Conhecimento.git
cd Guia-do-Conhecimento
```

### O que NÃO vem no Git (segredo)

- `.env`
- pasta `secrets/`

Peça ao pai o arquivo `.env` só com as variáveis `EXPO_PUBLIC_FIREBASE_*` (config web do app).  
**Não precisa** da service account (`firebase-service-account.json`) no PC do app — isso é só para upload/admin.

Modelo: copie `.env.example` → `.env` e preencha as chaves públicas do Firebase.

---

## 3. O que é o Expo (em uma frase)

Expo = jeito de criar o **aplicativo** em React Native (Android).  
O projeto Expo **é** o app; o Firebase é só o banco.

---

## 4. Como começar o app (sugestão)

Na pasta do repo (ou numa subpasta, se preferir):

```bash
npx create-expo-app@latest app
cd app
npx expo start
```

Depois instale o Firebase no app:

```bash
npx expo install firebase
```

Use as variáveis `EXPO_PUBLIC_FIREBASE_*` do `.env` para inicializar o Firebase.

> Dica: dá para criar o app Expo **dentro** deste repositório (ex.: pasta `app/`) para tudo ficar no mesmo Git.

---

## 5. Banco de dados (Firestore) — o que ler no app

Coleções principais:

### `subjects` (matérias)
Exemplos de campos: `id`, `name`, `slug`, `order`, `levels`, `color`

IDs: `historia`, `matematica`, `lingua-portuguesa`, `geografia`, …

### `topics` (tópicos)
Campos: `id`, `subjectId`, `title`, `slug`, `unit`, `order`, `levels`, `bnccCodes`

### `contents` (textos para estudar)
Campos importantes:
- `title`, `summary`, `body` (texto em Markdown)
- `subjectId`, `topicId`
- `levels` → `8ano` | `9ano` | `1medio`
- `exercises` (perguntas abertas)
- `source`, `sourceUrl`, `license`

### Ideia de telas (MVP)

1. Lista de matérias (`subjects`)
2. Ao tocar: lista de tópicos da matéria (`topics` onde `subjectId == ...`)
3. Ao tocar o tópico: conteúdo (`contents` onde `topicId == ...`)
4. (Opcional) filtro por ano: 8º / 9º / 1º médio

### Exemplos de leitura (conceito)

```text
subjects ordenados por order
topics onde subjectId == "historia" ordenados por order
contents onde topicId == "h9-proclamacao"
```

No Console Firebase: **Firestore Database** → veja as coleções para se familiarizar.

---

## 6. Anos escolares do acervo

- `8ano` — 8º ano  
- `9ano` — 9º ano  
- `1medio` — 1º colegial  

Um mesmo conteúdo pode ter mais de um nível em `levels`.

---

## 7. Matérias já no banco

História, Matemática, Língua Portuguesa, Geografia, Ciências, Biologia, Física, Química, Inglês, Literatura, Filosofia, Sociologia, Arte, Educação Física.

Lista completa: `LISTA-MATERIAS.md`  
Índice: `acervo/indice-materias.json`

---

## 8. Documentos úteis neste repo

| Arquivo | Para quê |
|---------|----------|
| `GUIA-DO-PROJETO.md` | Este guia (comece por aqui) |
| `ESBOCO-DO-PROJETO.md` | Decisões do projeto |
| `LISTA-MATERIAS.md` | Matérias do acervo |
| `MAPEAMENTO-HISTORIA.md` | Grade de História / BNCC |
| `acervo/` | Cópia local dos conteúdos |
| `.env.example` | Modelo das variáveis |

---

## 9. Checklist para Maria

- [ ] Clonar o repo
- [ ] Receber/criar o `.env` com `EXPO_PUBLIC_FIREBASE_*`
- [ ] Criar o projeto Expo
- [ ] Ligar o Firebase no código
- [ ] Tela: lista de matérias
- [ ] Tela: tópicos da matéria
- [ ] Tela: ler o conteúdo (`body`)
- [ ] (Depois) favoritos, progresso, busca, visual premium

---

## 10. Regras importantes

1. **Não commitar** `.env` nem `secrets/`.
2. Não apagar dados do Firestore sem combinar.
3. O acervo em `acervo/` é backup; a fonte do app em produção é o **Firestore**.
4. Em dúvida de produto/visual: você decide — o pai/agente ajudam na base técnica.

---

## 11. Contatos técnicos rápidos

- Firebase project ID: `guia-do-conhecimento-mah`
- GitHub: `mahprojetossantos-wq/Guia-do-Conhecimento`
