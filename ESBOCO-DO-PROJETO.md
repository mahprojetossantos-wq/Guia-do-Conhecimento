# Guia do Conhecimento — Esboço do projeto

App de estudo com **acervo de conteúdos pronto** (matérias → tópicos → textos/exercícios), organizado no estilo do Toda Matéria.  
Quem decide o produto final: Maria Natalia.

---

## 1. Objetivo

Ter um banco de dados de matérias escolares **já populado** com conteúdo de **fontes abertas** (MEC, BNCC, REA e similares), para ela abrir o app e estudar — sem precisar montar o acervo na mão.

O app (React Native) consome esse Firebase. A construção das telas fica com ela; a base de conteúdo e a infra ficam preparadas antes.

---

## 2. Ideia do acervo (definido)

| Ponto | Decisão |
|-------|---------|
| De onde vem o conteúdo | Fontes abertas (MEC, BNCC, material REA, etc.) |
| Como fica organizado | Por matéria → tópicos → conteúdo (inspiração: [Toda Matéria](https://www.todamateria.com.br/)) |
| O que NÃO é | Organizador de links pessoais dela |
| Trabalho nosso | Buscar, baixar, estruturar e subir no Firebase |
| Trabalho dela | App: telas, navegação, visual, fluxo de estudo |

**Expectativa realista:** fontes abertas não vêm como “site pronto”. Vêm como grade, PDFs, páginas. Nós montamos o acervo no formato do app.

---

## 3. Stack (proposta inicial)

| Camada | Tecnologia | Status |
|--------|------------|--------|
| App | React Native (Expo) | A definir |
| Backend / dados | Firebase (Firestore) | Projeto já criado |
| Login | Firebase Auth | A definir |
| Código | GitHub (conta nova) | Conta já criada |
| Pasta local | `C:\Stoll-Pr\Guia do Conhecimento` | Em uso |
| Segredos | `secrets/` + `.env` (ignorados pelo Git) | Service account Firebase guardada |

---

## 4. O que o app faz (MVP)

Acervo + leitura primeiro; extras depois.

- [x] Direção: conteúdo **dentro** do app (texto estruturado), não só link
- [ ] Lista de matérias (Português, Matemática, História, Biologia, etc.)
- [ ] Filtro / organização por ano: 8º, 9º e 1º colegial
- [ ] Dentro de cada matéria: tópicos / assuntos
- [ ] Em cada tópico: resumo/explicação (+ exercícios quando a fonte tiver)
- [ ] Busca por matéria/tópico
- [ ] Favoritos (opcional no MVP)
- [ ] Marcar como “já estudei” / progresso (opcional no MVP)

---

## 5. Modelo de dados (rascunho Firebase)

### `subjects` (matérias)
- `id`
- `name` (ex.: Matemática)
- `slug`
- `icon` ou `color` (opcional)
- `order`
- `levels` (lista: `8ano` | `9ano` | `1medio`)

### `topics` (tópicos)
- `id`
- `subjectId`
- `title`
- `slug`
- `order`
- `levels` (em quais anos esse tópico entra)
- `bnccCodes` (opcional — vínculo com BNCC)

### `contents` (conteúdos)
- `id`
- `topicId`
- `subjectId`
- `title`
- `body` (texto principal para estudar no app)
- `exercises` (opcional — lista de questões)
- `source` (nome da fonte aberta)
- `sourceUrl` (link da origem, quando houver)
- `license` (ex.: CC-BY, domínio público)
- `updatedAt`

### `users` / progresso (por usuário — fase 2 se quiser)
- `favorites`
- `studied` (tópico/conteúdo + data)

---

## 6. Fontes abertas (lista de trabalho)

**Mapeamento de História:** ver `MAPEAMENTO-HISTORIA.md` (grade BNCC 8º/9º + recorte 1º colegial + fontes).

- [x] BNCC / MEC — grade (História 8º/9º + recorte 1º médio)
- [x] Fontes REA listadas (eduCAPES, Domínio Público, Wikipedia CC BY-SA, etc.)
- [x] Primeiro lote de textos na pasta `acervo/historia/` (resumos escolares + atribuição)
- [ ] Subir no Firebase (`source`, `sourceUrl`, `license` já vão nos JSON)

Inspiração de UX/organização (não é fonte de texto): https://www.todamateria.com.br/

---

## 7. Papéis

| Quem | Faz o quê |
|------|-----------|
| Pai + setup | GitHub, Firebase, scripts de importação, estrutura, popular acervo |
| Filha | Telas, navegação, visual, fluxo de estudo no app |

---

## 8. Etapas de trabalho

1. [x] Definir rumo do acervo (fontes abertas + por matéria)
2. [ ] Fechar MVP do app (seção 4) e decisões restantes (seção 9)
3. [x] Mapear fontes abertas de História → `MAPEAMENTO-HISTORIA.md`
4. [x] Montar grade: História → unidades/tópicos (BNCC)
5. [ ] Criar repositório no GitHub
6. [ ] Criar app Expo na pasta
7. [ ] Ligar Firebase (Auth + Firestore) + regras de segurança
8. [ ] Script/processo: importar conteúdo aberto → Firestore
9. [x] Popular lote 1 na pasta: **todas as 14 matérias** (`acervo/`)
10. [x] Subir acervo no Firebase (Firestore: subjects / topics / contents)
11. [ ] Criar base do app (Expo) + regras de segurança mais fechadas

---

## 9. Decisões

### Fechadas

- **Nível escolar do acervo (agora):** 8º ano, 9º ano e 1º colegial (1º ano do ensino médio).  
  Motivo: ela está no 9º; cobre o ano atual, o anterior e o próximo.
- **Primeira matéria a popular:** História.
- **Lista das matérias:** ver `LISTA-MATERIAS.md` — **lote 1 de todas as 14 matérias já está em `acervo/`**.

### Ainda abertas

1. App só Android ou também iOS?  
   → _______________

2. Precisa de login na primeira versão?  
   → _______________

3. Nome do app?  
   → Guia do Conhecimento / outro: _______________
---

## 10. Próximo passo imediato

1. [x] Mapear fontes e grade de História → `MAPEAMENTO-HISTORIA.md`  
2. [x] Organizar textos na pasta → `acervo/` (**14 matérias**, lote 1)  
3. [x] Repo GitHub + Firebase + upload Firestore  
4. [x] Guia para Maria → `GUIA-DO-PROJETO.md`  
5. Maria: clonar o repo e criar o app Expo (telas)
