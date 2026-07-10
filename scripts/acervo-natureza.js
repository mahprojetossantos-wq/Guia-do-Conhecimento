const { generateSubject } = require("./acervo-lib");

function t(id, slug, title, levels, summary, body, bncc, wiki) {
  return { id, slug, title, levels, summary, body, bncc: bncc || [], wiki };
}

function biologia() {
  return generateSubject({
    id: "biologia",
    name: "Biologia",
    slug: "biologia",
    order: 6,
    levels: ["1medio"],
    color: "#16A34A",
    description: "Biologia do 1º colegial — célula, bioquímica, biodiversidade e ecologia.",
    units: [
      {
        unit: "1º médio — Bases da Biologia",
        items: [
          t("b1-metodo", "metodo-cientifico-biologia", "Método científico em Biologia", ["1medio"],
            "Pergunta, hipótese, experimento e teoria.",
            `## Método\n\nObservação → pergunta → hipótese → teste → conclusão. Teoria científica ≠ “achismo”. Ciência é revisável.`,
            [], ["Método científico", "https://pt.wikipedia.org/wiki/M%C3%A9todo_cient%C3%ADfico"]),
          t("b1-bioquimica", "bioquimica-basica", "Bioquímica básica", ["1medio"],
            "Água, carboidratos, lipídios, proteínas e ácidos nucleicos.",
            `## Moléculas da vida\n\nCarboidratos (energia), lipídios (membranas/energia), proteínas (funções diversas), ácidos nucleicos (informação). Água como solvente.`,
            [], ["Biomolécula", "https://pt.wikipedia.org/wiki/Biomol%C3%A9cula"]),
          t("b1-citologia", "citologia", "Citologia", ["1medio"],
            "Organelas e fisiologia celular.",
            `## Célula\n\nMembrana, citoplasma, núcleo. Mitocôndria (respiração), ribossomos (proteínas), retículo, Golgi, lisossomos. Célula vegetal: parede e cloroplastos.`,
            [], ["Citologia", "https://pt.wikipedia.org/wiki/Citologia"]),
          t("b1-membrana", "membrana-e-transporte", "Membrana e transporte", ["1medio"],
            "Difusão, osmose e transporte ativo.",
            `## Transporte\n\nPassivo (difusão, osmose) e ativo (contra o gradiente, gasta ATP). Essencial para homeostase.`,
            [], ["Membrana plasmática", "https://pt.wikipedia.org/wiki/Membrana_plasm%C3%A1tica"]),
          t("b1-metabolismo", "metabolismo-energetico", "Metabolismo energético", ["1medio"],
            "Fotossíntese e respiração celular.",
            `## Energia\n\nFotossíntese: luz → glicose. Respiração celular: glicose → ATP. Relacione produtores e consumidores na ecologia.`,
            [], ["Respiração celular", "https://pt.wikipedia.org/wiki/Respira%C3%A7%C3%A3o_celular"]),
          t("b1-divisao", "mitose-e-meiose", "Mitose e meiose", ["1medio"],
            "Divisão celular e formação de gametas.",
            `## Mitose\n\nCrescimento e reposição celular.\n\n## Meiose\n\nGametas com metade dos cromossomos; variação genética.`,
            [], ["Meiose", "https://pt.wikipedia.org/wiki/Meiose"]),
          t("b1-virus", "virus-bacterias-imunidade", "Vírus, bactérias e imunidade", ["1medio"],
            "Micro-organismos e defesa do corpo.",
            `## Saúde\n\nVírus × bactérias. Vacinas e sistema imune. Antibióticos não tratam vírus.`,
            [], ["Sistema imunitário", "https://pt.wikipedia.org/wiki/Sistema_imunit%C3%A1rio"]),
          t("b1-ecologia", "ecologia-1medio", "Ecologia", ["1medio"],
            "Populações, comunidades e ciclos biogeoquímicos.",
            `## Ecologia\n\nHabitat, nicho, relações ecológicas, pirâmides ecológicas, ciclos do carbono e do nitrogênio. Impactos humanos.`,
            [], ["Ecologia", "https://pt.wikipedia.org/wiki/Ecologia"]),
        ],
      },
    ],
  });
}

function fisica() {
  return generateSubject({
    id: "fisica",
    name: "Física",
    slug: "fisica",
    order: 7,
    levels: ["1medio"],
    color: "#0284C7",
    description: "Física do 1º colegial — cinemática, dinâmica, energia e introdução a ondas.",
    units: [
      {
        unit: "1º médio — Mecânica",
        items: [
          t("f1-grandezas", "grandezas-e-unidades", "Grandezas e unidades", ["1medio"],
            "SI, conversões e notação.",
            `## SI\n\nMetro, quilograma, segundo… Converta unidades e use notação científica. Dimensione se a resposta faz sentido.`,
            [], ["Sistema Internacional de Unidades", "https://pt.wikipedia.org/wiki/Sistema_Internacional_de_Unidades"]),
          t("f1-cinematica", "cinematica", "Cinemática", ["1medio"],
            "MRU, MRUV e gráficos.",
            `## Movimento\n\nVelocidade média, aceleração. MRU: s = s0 + vt. MRUV: equações de Torricelli e posição. Leia gráficos s×t e v×t.`,
            [], ["Cinemática", "https://pt.wikipedia.org/wiki/Cinem%C3%A1tica"]),
          t("f1-vetores", "vetores", "Vetores", ["1medio"],
            "Grandezas vetoriais e decomposição.",
            `## Vetor\n\nMódulo, direção e sentido. Soma e decomposição em eixos. Força e velocidade são vetoriais.`,
            [], ["Vetor", "https://pt.wikipedia.org/wiki/Vetor"]),
          t("f1-newton", "leis-de-newton", "Leis de Newton", ["1medio"],
            "Inércia, F = ma e ação-reação.",
            `## Três leis\n\n1) Inércia 2) F = m·a 3) Ação e reação. Diagrama de forças é o coração dos problemas.`,
            [], ["Leis de Newton", "https://pt.wikipedia.org/wiki/Leis_de_Newton"]),
          t("f1-trabalho", "trabalho-e-energia", "Trabalho e energia", ["1medio"],
            "Trabalho, potência, energia cinética e potencial.",
            `## Energia mecânica\n\nEc = mv²/2; Ep gravitacional = mgh. Trabalho de uma força. Conservação quando só forças conservativas atuam.`,
            [], ["Energia mecânica", "https://pt.wikipedia.org/wiki/Energia_mec%C3%A2nica"]),
          t("f1-impulsão", "impulso-e-quantidade-de-movimento", "Impulso e quantidade de movimento", ["1medio"],
            "Colisões e conservação.",
            `## Quantidade de movimento\n\np = m·v. Impulso = variação de p. Em colisões, analise se a energia cinética se conserva (elástica × inelástica).`,
            [], ["Quantidade de movimento", "https://pt.wikipedia.org/wiki/Quantidade_de_movimento"]),
          t("f1-ondas", "ondas-intro", "Ondas (introdução)", ["1medio"],
            "Frequência, período, comprimento de onda.",
            `## Ondas\n\nv = λ·f. Mecânicas × eletromagnéticas. Som e luz (visão introdutória).`,
            [], ["Onda", "https://pt.wikipedia.org/wiki/Onda"]),
        ],
      },
    ],
  });
}

function quimica() {
  return generateSubject({
    id: "quimica",
    name: "Química",
    slug: "quimica",
    order: 8,
    levels: ["1medio"],
    color: "#CA8A04",
    description: "Química do 1º colegial — átomo, tabela, ligações e reações.",
    units: [
      {
        unit: "1º médio — Fundamentos",
        items: [
          t("q1-atomo", "modelos-atomicos", "Modelos atômicos", ["1medio"],
            "Dalton, Thomson, Rutherford, Bohr (visão escolar).",
            `## Evolução dos modelos\n\nCada modelo responde a experimentos da época. Hoje usamos modelo em nuvem eletrônica, mas Bohr ainda ajuda no ensino médio.`,
            [], ["Modelo atômico", "https://pt.wikipedia.org/wiki/Modelo_at%C3%B4mico"]),
          t("q1-tabela", "tabela-periodica", "Tabela periódica", ["1medio"],
            "Grupos, períodos e propriedades periódicas.",
            `## Organização\n\nNúmero atômico crescente. Famílias (alcalinos, halogênios, gases nobres…). Raio, eletronegatividade e reatividade variam na tabela.`,
            [], ["Tabela periódica", "https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica"]),
          t("q1-ligacoes", "ligacoes-quimicas", "Ligações químicas", ["1medio"],
            "Iônica, covalente e metálica.",
            `## Ligações\n\nIônica (metal + ametal), covalente (ametais), metálica. Polaridade e geometria influenciam propriedades das substâncias.`,
            [], ["Ligação química", "https://pt.wikipedia.org/wiki/Liga%C3%A7%C3%A3o_qu%C3%ADmica"]),
          t("q1-funcoes", "funcoes-inorganicas", "Funções inorgânicas", ["1medio"],
            "Ácidos, bases, sais e óxidos.",
            `## Funções\n\nÁcidos (H⁺), bases (OH⁻), sais e óxidos. Indicadores e pH. Exemplos do cotidiano (vinagre, sabão, ferrugem).`,
            [], ["Função inorgânica", "https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_inorg%C3%A2nica"]),
          t("q1-reacoes", "tipos-de-reacoes", "Tipos de reações e balanceamento", ["1medio"],
            "Síntese, análise, simples/dupla troca.",
            `## Balanceamento\n\nConservação de átomos. Classifique reações e balanceie por tentativa (nível inicial).`,
            [], ["Reação química", "https://pt.wikipedia.org/wiki/Rea%C3%A7%C3%A3o_qu%C3%ADmica"]),
          t("q1-mol", "mol-e-massa-molar", "Mol e massa molar", ["1medio"],
            "Quantidade de matéria.",
            `## Mol\n\n1 mol = 6,02×10²³ entidades. Massa molar (g/mol). Base de todo cálculo estequiométrico.`,
            [], ["Mol", "https://pt.wikipedia.org/wiki/Mol"]),
          t("q1-estequio", "estequiometria-intro", "Estequiometria (intro)", ["1medio"],
            "Cálculos a partir de equações balanceadas.",
            `## Roteiro\n\nEquação balanceada → mol → massa/volume. Atenção a reagente limitante (introdução).`,
            [], ["Estequiometria", "https://pt.wikipedia.org/wiki/Estequiometria"]),
        ],
      },
    ],
  });
}

module.exports = { biologia, fisica, quimica };
