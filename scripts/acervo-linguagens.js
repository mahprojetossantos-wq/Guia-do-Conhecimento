const { generateSubject } = require("./acervo-lib");

function t(id, slug, title, levels, summary, body, bncc, wiki) {
  return { id, slug, title, levels, summary, body, bncc: bncc || [], wiki };
}

function ingles() {
  return generateSubject({
    id: "ingles",
    name: "Inglês",
    slug: "ingles",
    order: 9,
    levels: ["8ano", "9ano", "1medio"],
    color: "#4F46E5",
    description: "Vocabulário, gramática e leitura em inglês — 8º, 9º e 1º médio.",
    units: [
      {
        unit: "8º ano",
        items: [
          t("i8-present", "simple-present", "Simple Present", ["8ano"],
            "Hábitos e verdades gerais.",
            `## Use\n\nRotinas e fatos. Forma: V / V-s (he/she/it). Negativa com don't/doesn't. Perguntas com Do/Does.\n\n## Keywords\n\nalways, usually, often, sometimes, never.`,
            [], ["Presente simples", "https://pt.wikipedia.org/wiki/Presente_simples"]),
          t("i8-past", "simple-past", "Simple Past", ["8ano"],
            "Ações concluídas no passado.",
            `## Regular × irregular\n\nVerbos regulares: -ed. Irregulares: lista (go→went). Negativa: didn't + base form.`,
            [], ["Passado simples", "https://pt.wikipedia.org/wiki/Passado_simples"]),
          t("i8-prepositions", "prepositions-in-on-at", "Prepositions: in, on, at", ["8ano"],
            "Tempo e lugar.",
            `## Guia rápido\n\nat (hora/pontos), in (meses/anos/cidades amplas), on (dias/superfícies). Há exceções — pratique em frases.`,
            [], ["Preposição", "https://pt.wikipedia.org/wiki/Preposi%C3%A7%C3%A3o"]),
          t("i8-vocab", "vocabulario-escola-e-cotidiano", "Vocabulário: escola e cotidiano", ["8ano"],
            "Palavras do dia a dia.",
            `## Prática\n\nMonte listas temáticas (school, food, family, places) e use em frases curtas. Repetição espaçada ajuda a memorizar.`,
            [], ["Vocabulário", "https://pt.wikipedia.org/wiki/Vocabul%C3%A1rio"]),
        ],
      },
      {
        unit: "9º ano",
        items: [
          t("i9-continuous", "present-continuous", "Present Continuous", ["9ano"],
            "Ações em progresso.",
            `## Forma\n\nam/is/are + V-ing. Agora / no momento. Diferença com Simple Present (hábito × agora).`,
            [], ["Presente contínuo", "https://pt.wikipedia.org/wiki/Presente_cont%C3%ADnuo"]),
          t("i9-future", "will-e-going-to", "Will e going to", ["9ano"],
            "Futuro: decisões e planos.",
            `## Will\n\nDecisões na hora, promessas, previsões.\n\n## Going to\n\nPlanos e intenções já pensadas; evidências no presente.`,
            [], ["Futuro (gramática)", "https://pt.wikipedia.org/wiki/Futuro_(gram%C3%A1tica)"]),
          t("i9-comparatives", "comparatives-and-superlatives", "Comparatives and superlatives", ["9ano"],
            "Comparar pessoas e coisas.",
            `## Regras\n\nadjective + -er / more… ; the + -est / the most… Irregulares: good→better→best.`,
            [], ["Grau dos adjetivos", "https://pt.wikipedia.org/wiki/Adjetivo"]),
          t("i9-reading", "reading-strategies", "Reading strategies", ["9ano", "1medio"],
            "Como ler textos em inglês.",
            `## Estratégias\n\nSkimming (ideia geral), scanning (buscar info), cognatos, contexto. Não traduza palavra por palavra.`,
            [], ["Leitura", "https://pt.wikipedia.org/wiki/Leitura"]),
        ],
      },
      {
        unit: "1º médio",
        items: [
          t("i1-present-perfect", "present-perfect-intro", "Present Perfect (intro)", ["1medio"],
            "Experiências e passado ligado ao presente.",
            `## Forma\n\nhave/has + past participle. Marcadores: already, yet, ever, never, just. Diferente do Simple Past (tempo definido).`,
            [], ["Presente perfeito", "https://pt.wikipedia.org/wiki/Presente_perfeito"]),
          t("i1-connectors", "connectors", "Connectors", ["1medio"],
            "however, therefore, although…",
            `## Coesão\n\nConectores organizam argumentos em redações e leituras. Liste 10 e pratique em frases.`,
            [], ["Conjunção", "https://pt.wikipedia.org/wiki/Conjun%C3%A7%C3%A3o"]),
          t("i1-false-friends", "false-friends", "False friends", ["1medio"],
            "Palavras que enganam.",
            `## Exemplos\n\nlibrary ≠ livraria; parents ≠ parentes; pretend ≠ pretender. Monte seu caderno de false friends.`,
            [], ["Falso cognato", "https://pt.wikipedia.org/wiki/Falso_cognato"]),
        ],
      },
    ],
  });
}

function literatura() {
  return generateSubject({
    id: "literatura",
    name: "Literatura",
    slug: "literatura",
    order: 10,
    levels: ["1medio", "9ano"],
    color: "#BE123C",
    description: "Escolas literárias e leitura literária — foco no 1º médio (com ponte no 9º).",
    units: [
      {
        unit: "Fundamentos",
        items: [
          t("l9-generos-lit", "generos-literarios", "Gêneros literários", ["9ano", "1medio"],
            "Épico, lírico e dramático (visão escolar).",
            `## Três grandes eixos\n\nNarrativa/épico, lírico (subjetividade) e drama (teatro). Hoje os gêneros se misturam — use como mapa, não prisão.`,
            [], ["Gênero literário", "https://pt.wikipedia.org/wiki/G%C3%AAnero_liter%C3%A1rio"]),
          t("l1-trovadorismo", "das-origens-ao-classicismo", "Das origens ao Classicismo", ["1medio"],
            "Trovadorismo, Humanismo, Classicismo (visão BR/PT).",
            `## Linha do tempo (Portugal)\n\nTrovadorismo → Humanismo → Classicismo (Camões). No Brasil colonial, literatura de informação e barroco depois.`,
            [], ["Literatura portuguesa", "https://pt.wikipedia.org/wiki/Literatura_portuguesa"]),
          t("l1-barroco", "barroco", "Barroco", ["1medio"],
            "Conflito, contraste e religiosidade.",
            `## Marcas\n\nAntítese, hipérbole, culto da forma (Gongorismo) e conceito (Conceptismo). No Brasil: Gregório de Matos, Anchieta (contexto).`,
            [], ["Barroco no Brasil", "https://pt.wikipedia.org/wiki/Barroco_no_Brasil"]),
          t("l1-arcadismo", "arcadismo", "Arcadismo", ["1medio"],
            "Simplicidade e natureza idealizada.",
            `## Ideias\n\nFugere urbem, aurea mediocritas, pastores. No Brasil: Cláudio Manuel da Costa, Tomás Antônio Gonzaga.`,
            [], ["Arcadismo", "https://pt.wikipedia.org/wiki/Arcadismo"]),
          t("l1-romantismo", "romantismo-brasileiro", "Romantismo brasileiro", ["1medio"],
            "Nacionalismo, indianismo e subjetividade.",
            `## Gerações\n\nIndianismo, ultrarromantismo, condoreirismo. Autores: Gonçalves Dias, Álvares de Azevedo, Castro Alves. Prosa: Alencar.`,
            [], ["Romantismo no Brasil", "https://pt.wikipedia.org/wiki/Romantismo_no_Brasil"]),
          t("l1-realismo", "realismo-e-naturalismo", "Realismo e Naturalismo", ["1medio"],
            "Crítica social e determinismo.",
            `## Realismo\n\nObjetividade, crítica burguesa — Machado de Assis.\n\n## Naturalismo\n\nDeterminismo biológico/social — Aluísio Azevedo.`,
            [], ["Realismo no Brasil", "https://pt.wikipedia.org/wiki/Realismo_no_Brasil"]),
        ],
      },
    ],
  });
}

function filosofia() {
  return generateSubject({
    id: "filosofia",
    name: "Filosofia",
    slug: "filosofia",
    order: 11,
    levels: ["1medio"],
    color: "#6D28D9",
    description: "Introdução à Filosofia no 1º colegial.",
    units: [
      {
        unit: "1º médio",
        items: [
          t("fil1-o-que-e", "o-que-e-filosofia", "O que é Filosofia?", ["1medio"],
            "Perguntar, argumentar e conceituar.",
            `## Filosofia\n\nNão é só opinião: é investigação crítica com argumentos. Diferente de mito e de senso comum, busca justificar crenças.`,
            [], ["Filosofia", "https://pt.wikipedia.org/wiki/Filosofia"]),
          t("fil1-mitos", "mito-e-razao", "Mito e razão", ["1medio"],
            "Do mito à filosofia na Grécia.",
            `## Passagem\n\nExplicações míticas × logos. Pré-socráticos buscam princípios (arché) da natureza.`,
            [], ["Pré-socráticos", "https://pt.wikipedia.org/wiki/Pr%C3%A9-socr%C3%A1ticos"]),
          t("fil1-socrates", "socrates-platao-aristoteles", "Sócrates, Platão e Aristóteles", ["1medio"],
            "Três pilares da filosofia antiga.",
            `## Três nomes\n\nSócrates: diálogo e exame. Platão: ideias/mundo sensível. Aristóteles: lógica, ética e política mais “terrestres”.`,
            [], ["Filosofia antiga", "https://pt.wikipedia.org/wiki/Filosofia_antiga"]),
          t("fil1-etica", "etica-e-moral", "Ética e moral", ["1medio"],
            "Diferença e debates sobre o bem viver.",
            `## Ética × moral\n\nMoral: costumes/normas. Ética: reflexão sobre essas normas. Autonomia, virtude, dever, consequências — diferentes abordagens.`,
            [], ["Ética", "https://pt.wikipedia.org/wiki/%C3%89tica"]),
          t("fil1-politica", "filosofia-politica-intro", "Filosofia política (intro)", ["1medio"],
            "Poder, justiça e cidadania.",
            `## Perguntas\n\nO que é justiça? Por que obedecer leis? Democracia, direitos e desigualdade — ligue a temas atuais com cuidado conceitual.`,
            [], ["Filosofia política", "https://pt.wikipedia.org/wiki/Filosofia_pol%C3%ADtica"]),
          t("fil1-conhecimento", "teoria-do-conhecimento", "Teoria do conhecimento", ["1medio"],
            "O que podemos saber?",
            `## Epistemologia\n\nCrença, verdade e justificação. Empirismo × racionalismo (visão escolar). Desinformação exige pensamento crítico.`,
            [], ["Epistemologia", "https://pt.wikipedia.org/wiki/Epistemologia"]),
        ],
      },
    ],
  });
}

function sociologia() {
  return generateSubject({
    id: "sociologia",
    name: "Sociologia",
    slug: "sociologia",
    order: 12,
    levels: ["1medio"],
    color: "#0F766E",
    description: "Introdução à Sociologia no 1º colegial.",
    units: [
      {
        unit: "1º médio",
        items: [
          t("s1-o-que-e", "o-que-e-sociologia", "O que é Sociologia?", ["1medio"],
            "Estudo científico da sociedade.",
            `## Sociologia\n\nAnalisa relações sociais, instituições e desigualdades com método — além do senso comum.`,
            [], ["Sociologia", "https://pt.wikipedia.org/wiki/Sociologia"]),
          t("s1-classicos", "marx-weber-durkheim", "Marx, Weber e Durkheim", ["1medio"],
            "Três clássicos.",
            `## Clássicos\n\nMarx: classes e conflito. Durkheim: fatos sociais e solidariedade. Weber: ação social e tipologias de dominação.`,
            [], ["Sociologia clássica", "https://pt.wikipedia.org/wiki/Sociologia"]),
          t("s1-cultura", "cultura-e-identidade", "Cultura e identidade", ["1medio"],
            "Valores, símbolos e diversidade.",
            `## Cultura\n\nNão é só “arte erudita”: é modo de vida. Identidades são históricas e plurais. Combata etnocentrismo.`,
            [], ["Cultura", "https://pt.wikipedia.org/wiki/Cultura"]),
          t("s1-trabalho", "trabalho-e-desigualdade", "Trabalho e desigualdade", ["1medio"],
            "Mercado de trabalho e estratificação.",
            `## Temas\n\nDivisão do trabalho, precariedade, gênero, raça e classe. Dados e conceitos > achismo.`,
            [], ["Desigualdade social", "https://pt.wikipedia.org/wiki/Desigualdade_social"]),
          t("s1-poder", "poder-estado-e-cidadania", "Poder, Estado e cidadania", ["1medio"],
            "Instituições e participação.",
            `## Política na vida social\n\nEstado, direitos, movimentos sociais e cidadania. Relacione com a Constituição de 1988.`,
            [], ["Cidadania", "https://pt.wikipedia.org/wiki/Cidadania"]),
          t("s1-midia", "midia-e-industria-cultural", "Mídia e indústria cultural", ["1medio"],
            "Consumo, redes e opinião pública.",
            `## Comunicação\n\nIndústria cultural, redes sociais, bolhas e desinformação. Leitura crítica de mídia é competência cidadã.`,
            [], ["Indústria cultural", "https://pt.wikipedia.org/wiki/Ind%C3%BAstria_cultural"]),
        ],
      },
    ],
  });
}

function arte() {
  return generateSubject({
    id: "arte",
    name: "Arte",
    slug: "arte",
    order: 13,
    levels: ["8ano", "9ano", "1medio"],
    color: "#DB2777",
    description: "Linguagens artísticas, história da arte e leitura de obras.",
    units: [
      {
        unit: "Fundamentos",
        items: [
          t("a8-elementos", "elementos-da-linguagem-visual", "Elementos da linguagem visual", ["8ano"],
            "Ponto, linha, cor, textura, composição.",
            `## Visual\n\nElementos básicos da imagem. Observe obras e descreva composição antes de “gostei/não gostei”.`,
            [], ["Elementos da arte", "https://pt.wikipedia.org/wiki/Elementos_da_arte"]),
          t("a8-musica", "musica-ritmo-e-melodia", "Música: ritmo e melodia", ["8ano"],
            "Parâmetros do som.",
            `## Som\n\nAltura, intensidade, timbre, duração. Ritmo e melodia. Escute com atenção ativa.`,
            [], ["Música", "https://pt.wikipedia.org/wiki/M%C3%BAsica"]),
          t("a9-teatro", "teatro-e-performance", "Teatro e performance", ["9ano"],
            "Corpo, espaço e narrativa cênica.",
            `## Cena\n\nAtor, público, espaço. Improviso e leitura dramática. Arte também é experiência coletiva.`,
            [], ["Teatro", "https://pt.wikipedia.org/wiki/Teatro"]),
          t("a9-movimentos", "movimentos-artisticos-intro", "Movimentos artísticos (intro)", ["9ano", "1medio"],
            "Renascimento, modernismo, arte contemporânea (visão rápida).",
            `## Linha do tempo\n\nNão memorize só nomes: ligue estilo × contexto histórico. No Brasil, modernismo (1922) é marco escolar clássico.`,
            [], ["História da arte", "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_da_arte"]),
          t("a1-leitura", "leitura-de-obra", "Leitura de obra de arte", ["1medio"],
            "Descrever, analisar e interpretar.",
            `## Roteiro\n\n1) Descrição 2) Análise formal 3) Contexto 4) Interpretação. Separe o que se vê do que se conclui.`,
            [], ["Crítica de arte", "https://pt.wikipedia.org/wiki/Cr%C3%ADtica_de_arte"]),
        ],
      },
    ],
  });
}

function educacaoFisica() {
  return generateSubject({
    id: "educacao-fisica",
    name: "Educação Física",
    slug: "educacao-fisica",
    order: 14,
    levels: ["8ano", "9ano", "1medio"],
    color: "#EA580C",
    description: "Esporte, saúde, jogos e cultura corporal.",
    units: [
      {
        unit: "Cultura corporal e saúde",
        items: [
          t("ef8-jogos", "jogos-e-brincadeiras", "Jogos e brincadeiras", ["8ano"],
            "Cultura lúdica e regras.",
            `## Jogo\n\nRegras, cooperação e conflito. Jogos tradicionais e adaptação inclusiva.`,
            [], ["Jogo", "https://pt.wikipedia.org/wiki/Jogo"]),
          t("ef8-esportes", "esportes-coletivos", "Esportes coletivos", ["8ano", "9ano"],
            "Futebol, vôlei, basquete — princípios táticos.",
            `## Princípios\n\nAtaque, defesa, transição, posse. Mais importante que só “fundamento”: entender o jogo.`,
            [], ["Esporte", "https://pt.wikipedia.org/wiki/Esporte"]),
          t("ef9-saude", "atividade-fisica-e-saude", "Atividade física e saúde", ["9ano", "1medio"],
            "Hábitos, sono e bem-estar.",
            `## Saúde\n\nAtividade regular, alimentação e descanso. Evite milagres e compare fontes confiáveis.`,
            [], ["Exercício físico", "https://pt.wikipedia.org/wiki/Exerc%C3%ADcio_f%C3%ADsico"]),
          t("ef9-corpo", "corpo-midia-e-padroes", "Corpo, mídia e padrões", ["9ano", "1medio"],
            "Imagem corporal e pressão estética.",
            `## Reflexão\n\nPadrões de corpo mudam na história e na mídia. Saúde ≠ estética imposta. Respeito à diversidade corporal.`,
            [], ["Imagem corporal", "https://pt.wikipedia.org/wiki/Imagem_corporal"]),
          t("ef1-luta", "lutas-e-praticas-corporais", "Lutas e práticas corporais", ["1medio"],
            "Capoeira, artes marciais e respeito.",
            `## Práticas\n\nLutas como cultura e esporte. Ética, segurança e combate à violência.`,
            [], ["Capoeira", "https://pt.wikipedia.org/wiki/Capoeira"]),
        ],
      },
    ],
  });
}

module.exports = {
  ingles,
  literatura,
  filosofia,
  sociologia,
  arte,
  educacaoFisica,
};
