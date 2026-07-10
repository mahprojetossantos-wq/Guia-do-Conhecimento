# Guia do Conhecimento

App de estudo (React Native / Expo) com acervo escolar no Firebase.

**Comece por aqui:** [GUIA-DO-PROJETO.md](./GUIA-DO-PROJETO.md)

## Recorte inicial

- Anos: 8º, 9º e 1º colegial
- Acervo no Firestore: coleções `subjects`, `topics`, `contents`
- Cópia local: pasta `acervo/` (14 matérias, lote 1)

## Docs

| Arquivo | Conteúdo |
|---------|----------|
| `GUIA-DO-PROJETO.md` | Guia para clonar e criar o app |
| `ESBOCO-DO-PROJETO.md` | Decisões do projeto |
| `LISTA-MATERIAS.md` | Lista de matérias |
| `MAPEAMENTO-HISTORIA.md` | Grade de História |

## Segredos

Não versionar `.env` nem a pasta `secrets/`. Use `.env.example` como modelo.  
No PC do app, só precisa das variáveis `EXPO_PUBLIC_FIREBASE_*`.

## Repo

https://github.com/mahprojetossantos-wq/Guia-do-Conhecimento
