/**
 * Gera topicos.json + arquivos de conteúdo de História.
 * Rodar: node scripts/gerar-acervo-historia.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "acervo", "historia");
const OUT = {
  topics: path.join(ROOT, "topicos.json"),
  c8: path.join(ROOT, "conteudos", "8ano"),
  c9: path.join(ROOT, "conteudos", "9ano"),
  c1: path.join(ROOT, "conteudos", "1medio"),
  shared: path.join(ROOT, "conteudos", "compartilhado"),
};

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

function writeContent(dir, item) {
  ensureDir(dir);
  const file = path.join(dir, `${item.slug}.json`);
  fs.writeFileSync(file, JSON.stringify(item, null, 2), "utf8");
}

const SRC_BNCC = {
  source: "BNCC / MEC (estrutura curricular)",
  sourceUrl: "https://basenacionalcomum.mec.gov.br/",
  license: "Documento oficial — estrutura; texto pedagógico adaptado para o app",
};

const SRC_WIKI = (title, url) => ({
  source: `Wikipedia (pt) — ${title} (adaptado)`,
  sourceUrl: url,
  license: "CC BY-SA 4.0 — texto adaptado para uso escolar; atribuição mantida",
});

/** @type {Array<object>} */
const topics = [];
/** helper */
function addTopic(t) {
  topics.push({
    id: t.id,
    subjectId: "historia",
    title: t.title,
    slug: t.slug,
    unit: t.unit,
    order: t.order,
    levels: t.levels,
    bnccCodes: t.bnccCodes || [],
  });
}

// ========== 8º ANO ==========
const u8 = [
  {
    unit: "O mundo contemporâneo: o Antigo Regime em crise",
    items: [
      {
        id: "h8-iluminismo",
        slug: "iluminismo-e-liberalismo",
        title: "Iluminismo e liberalismo",
        bncc: ["EF08HI01"],
        summary: "Ideias de razão, liberdade e direitos que abalaram o Antigo Regime.",
        body: `## O que foi o Iluminismo?

O Iluminismo foi um movimento intelectual dos séculos XVII e XVIII, forte na Europa (especialmente França, Inglaterra e Escócia). Seus pensadores defendiam o uso da **razão**, a crítica ao absolutismo e à intolerância religiosa, e a valorização da ciência e da educação.

## Ideias centrais

- **Razão** como guia para entender o mundo e organizar a sociedade
- Crítica ao poder absoluto dos reis e aos privilégios da nobreza e do clero
- Defesa de **liberdades** (opinião, religião, propriedade) e de leis iguais para todos
- Confiança no progresso pelo conhecimento

Autores importantes: John Locke, Montesquieu (separação dos poderes), Voltaire, Rousseau, Adam Smith (economia liberal).

## Liberalismo

O liberalismo político nasceu ligado a essas ideias: limitar o poder do Estado, garantir direitos individuais e, em muitos casos, defender a participação política (ainda que, no século XVIII, restrita). O liberalismo econômico defendia menos intervenção do Estado no mercado.

## Por que importa?

Essas ideias influenciaram a Independência dos EUA, a Revolução Francesa e os movimentos de independência nas Américas — inclusive o Brasil.`,
        wiki: ["Iluminismo", "https://pt.wikipedia.org/wiki/Iluminismo"],
      },
      {
        id: "h8-revolucoes-inglesas",
        slug: "revolucoes-inglesas-e-liberalismo",
        title: "Revoluções inglesas e liberalismo",
        bncc: ["EF08HI02"],
        summary: "Como a Inglaterra limitou o poder do rei e fortaleceu o Parlamento.",
        body: `## Contexto

No século XVII, a Inglaterra viveu conflitos entre a monarquia e o Parlamento. A disputa envolvia impostos, religião e quem mandava de verdade no reino.

## Marcos

- **Revolução Puritana / Guerra Civil** (1640s): confronto entre partidários do rei e do Parlamento; execução de Carlos I; período de República sob Cromwell.
- **Restauração** da monarquia e novas tensões.
- **Revolução Gloriosa** (1688–1689): deposição de Jaime II; chegada de Guilherme de Orange e Maria; **Bill of Rights** (Declaração de Direitos), que reforçou o poder do Parlamento e limitou o rei.

## Resultado

A Inglaterra caminhou para uma monarquia **constitucional**, com direitos e limites ao soberano. Isso virou referência para o liberalismo político moderno.`,
        wiki: ["Revolução Gloriosa", "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Gloriosa"],
      },
      {
        id: "h8-revolucao-industrial",
        slug: "revolucao-industrial",
        title: "Revolução Industrial",
        bncc: ["EF08HI03"],
        summary: "Máquinas, fábricas, cidades e uma nova forma de produzir.",
        body: `## O que foi?

A Revolução Industrial começou na **Inglaterra** no século XVIII e mudou a forma de produzir: do artesanato e manufatura para a **fábrica** com máquinas e energia (carvão, vapor).

## Mudanças principais

- Produção em larga escala e aumento da produtividade
- Crescimento das cidades industriais
- Nova classe: **operários** (proletariado) e fortalecimento da burguesia industrial
- Expansão do comércio mundial e busca por matérias-primas e mercados (ligado depois ao imperialismo)

## Impactos sociais

Jornadas longas, trabalho infantil, salários baixos e moradia precária geraram críticas e movimentos operários. Ao mesmo tempo, houve avanço técnico e barateamento de produtos.

## Ligação com o Brasil

O Brasil do século XIX exportava matérias-primas (como café) e importava manufaturados — inserido na divisão internacional do trabalho da era industrial.`,
        wiki: ["Revolução Industrial", "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Industrial"],
      },
      {
        id: "h8-revolucao-francesa",
        slug: "revolucao-francesa",
        title: "Revolução Francesa e desdobramentos",
        bncc: ["EF08HI04"],
        summary: "1789: crise do Antigo Regime e lema liberdade, igualdade, fraternidade.",
        body: `## Por que estourou?

A França do século XVIII tinha sociedade estamental (clero, nobreza, povo), crise financeira do Estado, fome, impostos injustos e influência das ideias iluministas.

## Fases (visão escolar)

1. **1789**: Convenção dos Estados Gerais → Assembleia Nacional; Queda da Bastilha; Declaração dos Direitos do Homem e do Cidadão
2. Monarquia constitucional e radicalização
3. **República**, Terror, depois Diretório
4. Ascensão de **Napoleão Bonaparte**

## Legado

- Ideias de cidadania, soberania popular e direitos
- Fim simbólico do Antigo Regime na França
- Guerras napoleônicas espalharam e também contestaram essas transformações pela Europa
- Ecoou nas independências americanas e em revoltas no Brasil colonial/imperial`,
        wiki: ["Revolução Francesa", "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Francesa"],
      },
      {
        id: "h8-conjuracoes",
        slug: "conjuracoes-mineira-e-baiana",
        title: "Conjurações mineira e baiana",
        bncc: ["EF08HI05"],
        summary: "Revoltas na América portuguesa influenciadas por ideias liberais.",
        body: `## Conjuração Mineira (1789)

Em Minas Gerais, elites locais reagiram à cobrança da **derrama** e a tensões com a Coroa. Ideias de autonomia e influência iluminista circularam entre inconfidentes. A repressão foi dura; Tiradentes tornou-se símbolo posterior da luta pela independência.

## Conjuração Baiana (1798)

Também chamada Revolta dos Alfaiates: participação mais popular (artesãos, soldados, pessoas escravizadas e libertas). Exigências de igualdade, fim de privilégios e críticas à escravidão. Foi reprimida com severidade.

## Importância

Mostram que, antes de 1822, já havia contestação à ordem colonial, com perfis sociais diferentes em cada movimento.`,
        wiki: ["Inconfidência Mineira", "https://pt.wikipedia.org/wiki/Inconfid%C3%AAncia_Mineira"],
      },
    ],
  },
  {
    unit: "Independências nas Américas",
    items: [
      {
        id: "h8-eua-conceitos",
        slug: "independencia-eua-e-conceitos-de-estado",
        title: "Independência dos EUA e conceitos de Estado",
        bncc: ["EF08HI06"],
        summary: "Estado, nação, território, governo e país no exemplo norte-americano.",
        body: `## Independência dos Estados Unidos (1776)

As Treze Colônias romperam com a Inglaterra após conflitos sobre impostos e representação política (“sem representação não há tributação”). A Declaração de Independência e, depois, a Constituição organizaram uma república federativa.

## Conceitos úteis

- **Estado**: organização política com soberania, leis e instituições
- **Nação**: comunidade que se reconhece por laços culturais, históricos ou políticos
- **Território**: espaço sob jurisdição do Estado
- **Governo**: quem exerce o poder no dia a dia
- **País**: uso corrente para o conjunto Estado + território + população

Esses conceitos ajudam a comparar independências e conflitos nas Américas.`,
        wiki: ["Independência dos Estados Unidos", "https://pt.wikipedia.org/wiki/Independ%C3%AAncia_dos_Estados_Unidos"],
      },
      {
        id: "h8-ind-hispano",
        slug: "independencias-america-espanhola",
        title: "Independências na América espanhola",
        bncc: ["EF08HI07", "EF08HI08"],
        summary: "Fragmentação do império espanhol e novos países na América.",
        body: `## Contexto

A crise da monarquia espanhola (invasão napoleônica) abriu espaço para juntas e guerras de independência na América hispânica (início do século XIX).

## Características

- Lideranças como Bolívar e San Martín
- Guerras longas e fragmentação em várias repúblicas
- Permanência de desigualdades sociais e poder das elites criollas
- Diferentes formas de governo após a independência

## Comparar com o Brasil

No Brasil, a independência (1822) manteve monarquia e unidade territorial relativa, caminho distinto do hispânico.`,
        wiki: ["Independência da América Espanhola", "https://pt.wikipedia.org/wiki/Independ%C3%AAncia_hispano-americana"],
      },
      {
        id: "h8-haiti",
        slug: "revolucao-do-haiti",
        title: "Revolução do Haiti",
        bncc: ["EF08HI10"],
        summary: "Única revolução de escravizados que fundou um Estado independente.",
        body: `## O que foi?

Em São Domingos (colônia francesa), pessoas escravizadas se rebelaram (a partir de 1791), em meio ao impacto da Revolução Francesa. O processo levou à independência do **Haiti** (1804).

## Por que é singular?

Foi a grande revolução liderada por escravizados que destruiu o sistema escravista local e criou um Estado negro independente. Assustou elites escravistas nas Américas, inclusive no Brasil.

## Legado

Símbolo de liberdade e também alvo de isolamento e punições econômicas por potências escravistas.`,
        wiki: ["Revolução Haitiana", "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Haitiana"],
      },
      {
        id: "h8-brasil-1808-1822",
        slug: "brasil-da-corte-a-independencia",
        title: "Brasil: da Corte (1808) à Independência (1822)",
        bncc: ["EF08HI12", "EF08HI13"],
        summary: "Vinda da família real, Reino Unido e ruptura com Lisboa.",
        body: `## 1808 — A Corte no Rio

Com a invasão francesa a Portugal, a família real veio para o Brasil. O Rio virou sede do império português. Abriram-se portos, criaram-se instituições e cresceu o peso político do Brasil.

## Do Reino Unido à Independência

Em 1815 o Brasil foi elevado a Reino Unido a Portugal. Após a Revolução do Porto (1820), pressões para recolonizar geraram conflito. Em **7 de setembro de 1822**, D. Pedro proclamou a Independência.

## Quem participou?

Elites políticas e econômicas tiveram papel central. Também houve participação de diferentes grupos sociais nas lutas — a independência não foi um evento único e homogêneo em todo o território.`,
        wiki: ["Independência do Brasil", "https://pt.wikipedia.org/wiki/Independ%C3%AAncia_do_Brasil"],
      },
      {
        id: "h8-tutela-escravidao",
        slug: "indigenas-negros-e-tutela",
        title: "Indígenas, negros e tutela no fim do período colonial",
        bncc: ["EF08HI14"],
        summary: "Exclusão, tutela e legados de preconceito após a ordem colonial.",
        body: `## Tutela e exclusão

No fim do período colonial e no Império, indígenas frequentemente foram tratados sob lógica de **tutela** (como “incapazes” de plena autonomia perante o Estado). Pessoas negras escravizadas eram propriedade legal; libertos enfrentavam barreiras.

## Permanências

Estereótipos, racismo e violências não acabaram com a independência. Entender a tutela e a escravidão ajuda a explicar desigualdades que atravessam o século XIX e chegam ao Brasil atual.`,
        wiki: ["Escravidão no Brasil", "https://pt.wikipedia.org/wiki/Escravid%C3%A3o_no_Brasil"],
      },
    ],
  },
  {
    unit: "O Brasil no século XIX",
    items: [
      {
        id: "h8-primeiro-reinado",
        slug: "primeiro-reinado",
        title: "Primeiro Reinado",
        bncc: ["EF08HI15"],
        summary: "D. Pedro I: Constituição de 1824, Confederação do Equador e abdicação.",
        body: `## Visão geral

Após 1822, D. Pedro I governou o Império do Brasil. A **Constituição de 1824** criou o Poder Moderador, reforçando a autoridade do imperador.

## Tensões

- Conflitos com elites provinciais
- Guerra da Cisplatina
- Confederação do Equador (1824)
- Desgaste político e abdicação em 1831

O Primeiro Reinado consolidou a monarquia, mas com muita contestação.`,
        wiki: ["Primeiro Reinado", "https://pt.wikipedia.org/wiki/Primeiro_Reinado"],
      },
      {
        id: "h8-regencia",
        slug: "periodo-regencial-e-rebelioes",
        title: "Período Regencial e rebeliões",
        bncc: ["EF08HI16"],
        summary: "1831–1840: instabilidade e revoltas provinciais.",
        body: `## O que foi a Regência?

Com a abdicação de Pedro I, o Brasil foi governado por regentes até a maioridade de Pedro II (1840). Foi um período instável.

## Revoltas

Cabanagem, Farroupilha, Sabinada, Balaiada, entre outras — cada uma com causas locais (autonomia, condições sociais, conflitos políticos). Mostram a fragilidade do poder central e a diversidade regional do Império.`,
        wiki: ["Período Regencial", "https://pt.wikipedia.org/wiki/Per%C3%ADodo_regencial"],
      },
      {
        id: "h8-segundo-reinado",
        slug: "segundo-reinado",
        title: "Segundo Reinado: política e economia",
        bncc: ["EF08HI15", "EF08HI17"],
        summary: "Café, política do Império e transformações do século XIX.",
        body: `## Política

O Segundo Reinado (1840–1889) buscou estabilidade após a Regência. Houve rodízio de partidos (Conservador e Liberal), centralização e, ao longo do tempo, desgaste da monarquia.

## Economia

O **café** tornou-se o grande produto de exportação. A mão de obra escravizada foi central por décadas; depois cresceu a imigração (especialmente no Sudeste).

## Sociedade

Desigualdade, escravidão, urbanização gradual e debates sobre modernização marcaram o período — até a Proclamação da República (1889).`,
        wiki: ["Segundo Reinado", "https://pt.wikipedia.org/wiki/Segundo_Reinado"],
      },
      {
        id: "h8-paraguai",
        slug: "guerra-do-paraguai",
        title: "Guerra do Paraguai",
        bncc: ["EF08HI18"],
        summary: "Conflito na Bacia do Prata e seus legados.",
        body: `## O conflito

A Guerra do Paraguai (1864–1870) envolveu a Tríplice Aliança (Brasil, Argentina e Uruguai) contra o Paraguai. Foi longa e devastadora, sobretudo para a população paraguaia.

## No Brasil

Fortaleceu o Exército como ator político e gerou debates sobre custos humanos e políticos. Há diferentes interpretações sobre causas e responsabilidades — importante comparar versões e fontes.`,
        wiki: ["Guerra do Paraguai", "https://pt.wikipedia.org/wiki/Guerra_do_Paraguai"],
      },
      {
        id: "h8-escravidao-abolicao",
        slug: "escravidao-abolicionismo-imigracao",
        title: "Escravidão, abolicionismo e imigração",
        bncc: ["EF08HI19", "EF08HI20"],
        summary: "Do tráfico à Lei Áurea e os legados da escravidão.",
        body: `## Escravidão no século XIX

Mesmo após a independência, o Brasil manteve a escravidão. O fim do tráfico (Lei Eusébio de Queirós, 1850) e leis graduais (Ventre Livre, Sexagenários) antecederam a **Lei Áurea** (1888).

## Abolicionismo

Imprensa, associações, fugas, revoltas e atuação de lideranças negras e aliados pressionaram o sistema. A abolição não veio com reforma agrária nem inclusão plena.

## Imigração

Políticas migratórias trouxeram europeus (e outros grupos) para o trabalho, especialmente no café — em um projeto que também revelava racismo e exclusão da população negra libertada.

## Legado

Desigualdades, racismo estrutural e debates sobre ações afirmativas têm raízes nesse passado.`,
        wiki: ["Abolicionismo no Brasil", "https://pt.wikipedia.org/wiki/Abolicionismo_no_Brasil"],
      },
      {
        id: "h8-indigenas-imperio",
        slug: "politicas-indigenistas-no-imperio",
        title: "Políticas indigenistas no Império",
        bncc: ["EF08HI21"],
        summary: "Tutela, catequese e violência contra povos indígenas.",
        body: `## Política oficial

No Império, a relação do Estado com povos indígenas misturou catequese, aldeamentos, tutela e, em muitos casos, violência e esbulho de terras.

## Para estudar

Buscar fontes que mostrem a perspectiva indígena e questionar o discurso “civilizatório” que justificava dominação.`,
        wiki: ["Indígenas no Brasil", "https://pt.wikipedia.org/wiki/Povos_ind%C3%ADgenas_no_Brasil"],
      },
      {
        id: "h8-cultura-xix",
        slug: "cultura-e-identidade-seculo-xix",
        title: "Cultura e identidade no século XIX",
        bncc: ["EF08HI22"],
        summary: "Romantismo, cultura popular e invenção de identidades.",
        body: `## Cultura no Império

Letras, artes e cultura popular ajudaram a construir imagens do “brasileiro”. O Romantismo, por exemplo, valorizou temas nacionais, indígenas idealizados e o passado — muitas vezes de forma seletiva.

## Ponto-chave

Identidades nacionais são históricas: são produzidas, contestadas e transformadas — não são naturais nem únicas.`,
        wiki: ["Romantismo no Brasil", "https://pt.wikipedia.org/wiki/Romantismo_no_Brasil"],
      },
    ],
  },
  {
    unit: "Configurações do mundo no século XIX",
    items: [
      {
        id: "h8-nacionalismo",
        slug: "nacionalismo-e-novas-nacoes",
        title: "Nacionalismo e novas nações europeias",
        bncc: ["EF08HI23"],
        summary: "Unificações e ideologias no século XIX.",
        body: `## Nacionalismo

No século XIX, o nacionalismo ganhou força na Europa: ideia de que povo e Estado deveriam coincidir. Processos como a unificação italiana e alemã redesenharam o mapa.

## Lado sombrio

Ideologias raciais e o determinismo foram usados para justificar hierarquias entre povos — base ideológica do imperialismo.`,
        wiki: ["Nacionalismo", "https://pt.wikipedia.org/wiki/Nacionalismo"],
      },
      {
        id: "h8-imperialismo",
        slug: "imperialismo-partilha-africa-asia",
        title: "Imperialismo e partilha da África e da Ásia",
        bncc: ["EF08HI24", "EF08HI26"],
        summary: "Dominação europeia e resistências locais.",
        body: `## O que foi o imperialismo?

Potências industriais europeias (e também EUA e Japão em contextos distintos) expandiram domínio político e econômico sobre África e Ásia no fim do século XIX.

## Partilha da África

Conferências e acordos europeus dividiram territórios africanos sem respeito às sociedades locais. Exploração de recursos e trabalho, violência e racismo marcaram o processo.

## Resistências

Povos africanos e asiáticos resistiram de muitas formas — guerras, diplomacia, preservação cultural. Não foram sujeitos passivos.`,
        wiki: ["Partilha da África", "https://pt.wikipedia.org/wiki/Partilha_de_%C3%81frica"],
      },
      {
        id: "h8-eua-al",
        slug: "eua-e-america-latina-seculo-xix",
        title: "EUA e América Latina no século XIX",
        bncc: ["EF08HI25"],
        summary: "Doutrina Monroe, expansão e influência norte-americana.",
        body: `## Relações hemisféricas

No século XIX, os EUA expandiram território e influência. A Doutrina Monroe e intervenções posteriores sinalizaram pretensão de liderança nas Américas, com impactos duradouros na América Latina.`,
        wiki: ["Doutrina Monroe", "https://pt.wikipedia.org/wiki/Doutrina_Monroe"],
      },
    ],
  },
];

// ========== 9º ANO ==========
const u9 = [
  {
    unit: "Nascimento da República e Brasil até meados do século XX",
    items: [
      {
        id: "h9-proclamacao",
        slug: "proclamacao-da-republica",
        title: "Proclamação da República e primeiros anos",
        bncc: ["EF09HI01", "EF09HI02"],
        summary: "1889: fim da monarquia e início da República no Brasil.",
        body: `## 15 de novembro de 1889

Um golpe militar depôs D. Pedro II e proclamou a República. Marechal Deodoro da Fonseca tornou-se o primeiro presidente.

## Por que a monarquia caiu?

Desgaste com elites (fazendeiros após a abolição), fortalecimento do Exército, propaganda republicana e isolamento do imperador ajudam a explicar o fim do Império.

## Primeiros anos

Constituição de 1891, federalismo, tensões políticas e o início da chamada **República Oligárquica** (política do café com leite, coronelismo). A República não nasceu democrática para a maioria da população.`,
        wiki: ["Proclamação da República do Brasil", "https://pt.wikipedia.org/wiki/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_do_Brasil"],
      },
      {
        id: "h9-pos-abolicao",
        slug: "pos-abolicao-e-populacao-negra",
        title: "Pós-abolição e população negra",
        bncc: ["EF09HI03", "EF09HI04"],
        summary: "Liberdade jurídica sem igualdade real.",
        body: `## Depois de 1888

A abolição não veio acompanhada de terra, educação universal nem reparação. A população negra enfrentou exclusão no mercado de trabalho, racismo e violência.

## Resistência e cultura

Imprensa negra, associações, religiões afro-brasileiras e práticas culturais foram formas de resistência e de construção de dignidade. A participação negra é central na formação econômica, política e social do Brasil — apesar das tentativas de apagamento.`,
        wiki: ["Pós-abolição no Brasil", "https://pt.wikipedia.org/wiki/P%C3%B3s-aboli%C3%A7%C3%A3o_no_Brasil"],
      },
      {
        id: "h9-urbanizacao",
        slug: "urbanizacao-e-modernizacao-1900-1930",
        title: "Urbanização e modernização (1900–1930)",
        bncc: ["EF09HI05"],
        summary: "Cidades, reformas e contradições da modernização.",
        body: `## Crescimento urbano

Nas primeiras décadas da República, cidades como Rio e São Paulo cresceram. Houve reformas urbanas, saneamento e projetos “modernizadores” — muitas vezes expulsando pobres das áreas centrais.

## Contradições

Modernização convivendo com miséria, epidemias, repressão a revoltas (ex.: Revolta da Vacina) e desigualdade regional. Cultura urbana (teatro, imprensa, música) também se transformou.`,
        wiki: ["República Velha", "https://pt.wikipedia.org/wiki/Rep%C3%BAblica_Velha"],
      },
      {
        id: "h9-vargas",
        slug: "trabalhismo-e-era-vargas",
        title: "Trabalhismo e Era Vargas",
        bncc: ["EF09HI06"],
        summary: "1930–1945: Estado, trabalho e contradições do varguismo.",
        body: `## Chegada de Vargas

A Revolução de 1930 interrompeu a República Oligárquica. Getúlio Vargas governou em diferentes fases: Governo Provisório, Constitucional e **Estado Novo** (1937–1945), ditatorial.

## Trabalhismo

CLT, justiça do trabalho e discurso de proteção ao trabalhador marcaram a era. O trabalhismo virou força política e cultural — mas em um Estado que também censurou e reprimiu oposições.

## Contradições

Direitos sociais avançaram para setores urbanos ao mesmo tempo em que a democracia política foi restringida no Estado Novo.`,
        wiki: ["Era Vargas", "https://pt.wikipedia.org/wiki/Era_Vargas"],
      },
      {
        id: "h9-indigenas-republica",
        slug: "questao-indigena-na-republica",
        title: "Questão indígena na República (até 1964)",
        bncc: ["EF09HI07"],
        summary: "Tutela, SPI e lutas indígenas no século XX.",
        body: `## República e povos indígenas

A República manteve lógicas de tutela e integração forçada. O SPI (Serviço de Proteção aos Índios) misturou proteção e violência. Povos indígenas seguiram lutando por terra, cultura e reconhecimento — em meio a inclusão seletiva e exclusão estrutural.`,
        wiki: ["Serviço de Proteção aos Índios", "https://pt.wikipedia.org/wiki/Servi%C3%A7o_de_Prote%C3%A7%C3%A3o_aos_%C3%8Dndios"],
      },
      {
        id: "h9-movimentos-sociais",
        slug: "movimentos-sociais-e-diversidade",
        title: "Movimentos sociais, anarquismo e protagonismo feminino",
        bncc: ["EF09HI08", "EF09HI09"],
        summary: "Lutas por direitos no Brasil republicano.",
        body: `## Movimentos

No início do século XX, operários (muitos imigrantes) organizaram greves; ideias anarquistas e socialistas circularam. Mulheres lutaram por voto e direitos civis. A diversidade de pautas mostra que cidadania se conquista coletivamente.`,
        wiki: ["Feminismo no Brasil", "https://pt.wikipedia.org/wiki/Feminismo_no_Brasil"],
      },
    ],
  },
  {
    unit: "Totalitarismos e conflitos mundiais",
    items: [
      {
        id: "h9-primeira-guerra",
        slug: "primeira-guerra-mundial",
        title: "Primeira Guerra Mundial",
        bncc: ["EF09HI10"],
        summary: "1914–1918: guerra total e novo mapa mundial.",
        body: `## Causas

Rivalidades imperialistas, nacionalismos, sistema de alianças e o estopim de Sarajevo (1914).

## Características

Guerra de trincheiras, armas novas, milhões de mortos. O Brasil entrou tardiamente (1917) ao lado da Tríplice Entente.

## Consequências

Tratado de Versalhes, fim de impérios, criação da Liga das Nações e terreno para crises dos anos 1920–1930.`,
        wiki: ["Primeira Guerra Mundial", "https://pt.wikipedia.org/wiki/Primeira_Guerra_Mundial"],
      },
      {
        id: "h9-revolucao-russa",
        slug: "revolucao-russa",
        title: "Revolução Russa",
        bncc: ["EF09HI11"],
        summary: "1917: fim do czarismo e nascimento da URSS.",
        body: `## 1917

A Rússia viveu revoluções que derrubaram o czar e levaram os bolcheviques ao poder sob Lenin. Saiu da 1ª Guerra e iniciou um projeto socialista estatal.

## Significado

Dividiu o século XX entre capitalismo e socialismo, influenciando movimentos no mundo todo — inclusive debates no Brasil.`,
        wiki: ["Revolução Russa", "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Russa"],
      },
      {
        id: "h9-crise-1929",
        slug: "crise-de-1929",
        title: "Crise capitalista de 1929",
        bncc: ["EF09HI12"],
        summary: "Quebra da Bolsa e Grande Depressão.",
        body: `## O crash

Em 1929, a Bolsa de Nova York quebrou. Seguiu-se a Grande Depressão: desemprego, falências e contração do comércio mundial.

## Impactos

No Brasil, a crise do café e o contexto político ajudaram a enfraquecer a República Oligárquica e abriram caminho para 1930. No mundo, alimentou radicalizações políticas.`,
        wiki: ["Grande Depressão", "https://pt.wikipedia.org/wiki/Grande_Depress%C3%A3o"],
      },
      {
        id: "h9-fascismo-nazismo",
        slug: "fascismo-nazismo-e-holocausto",
        title: "Fascismo, nazismo e Holocausto",
        bncc: ["EF09HI13"],
        summary: "Totalitarismos na Europa e o genocídio nazista.",
        body: `## Fascismo e nazismo

Após a 1ª Guerra e a crise, regimes autoritários subiram na Itália (Mussolini) e na Alemanha (Hitler). Caracterizaram-se por culto ao líder, nacionalismo extremo, repressão e militarismo. O nazismo acrescentou racismo de Estado e antissemitismo genocida.

## Holocausto

O genocídio de judeus e a perseguição a outras vítimas (ciganos, pessoas com deficiência, opositores, LGBTQIA+, entre outros) é um dos crimes mais graves da história. Estudar é também um dever de memória.`,
        wiki: ["Holocausto", "https://pt.wikipedia.org/wiki/Holocausto"],
      },
      {
        id: "h9-segunda-guerra",
        slug: "segunda-guerra-mundial",
        title: "Segunda Guerra Mundial",
        bncc: ["EF09HI10", "EF09HI14"],
        summary: "1939–1945: conflito global e novo ordem mundial.",
        body: `## O conflito

A 2ª Guerra envolveu Aliados e Eixo, com frentes na Europa, África, Ásia e Pacífico. Foi a guerra mais destrutiva da história.

## Brasil

O Brasil entrou em 1942 ao lado dos Aliados; a FEB combateu na Itália. A guerra pressionou o Estado Novo e ajudou no caminho para o fim de Vargas em 1945.

## Depois

ONU, Direitos Humanos, início da Guerra Fria e processos de descolonização.`,
        wiki: ["Segunda Guerra Mundial", "https://pt.wikipedia.org/wiki/Segunda_Guerra_Mundial"],
      },
      {
        id: "h9-onu-dh",
        slug: "onu-e-direitos-humanos",
        title: "ONU e Direitos Humanos",
        bncc: ["EF09HI15", "EF09HI16"],
        summary: "Pós-guerra: organização internacional e a Declaração de 1948.",
        body: `## ONU

Criada em 1945 para tentar evitar nova guerra mundial e promover cooperação. Tem limitações políticas, mas é marco institucional do século XX.

## Direitos Humanos

A Declaração Universal (1948) afirma dignidade e direitos fundamentais. Serve de referência para denunciar violações — inclusive em ditaduras e desigualdades contemporâneas.`,
        wiki: ["Organização das Nações Unidas", "https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_das_Na%C3%A7%C3%B5es_Unidas"],
      },
    ],
  },
  {
    unit: "Brasil após 1946: modernização, ditadura e redemocratização",
    items: [
      {
        id: "h9-1946-1964",
        slug: "brasil-1946-1964-e-era-jk",
        title: "Brasil 1946–1964 e era JK",
        bncc: ["EF09HI17", "EF09HI18"],
        summary: "Democracia liberal, desenvolvimentismo e tensões.",
        body: `## República de 1946

Após o Estado Novo, nova Constituição e experiência democrática instável. Populismo, partidos e crises políticas marcaram o período.

## JK

Juscelino Kubitschek (“50 anos em 5”), Brasília, industrialização e otimismo desenvolvimentista — com endividamento e desigualdades. O período termina com a crise que leva ao golpe de 1964.`,
        wiki: ["República Populista", "https://pt.wikipedia.org/wiki/Rep%C3%BAblica_Populista"],
      },
      {
        id: "h9-ditadura",
        slug: "ditadura-civil-militar",
        title: "Ditadura civil-militar",
        bncc: ["EF09HI19"],
        summary: "1964–1985: golpe, AI-5, repressão e memória.",
        body: `## O golpe de 1964

Militares e setores civis depuseram Jango. Seguiu-se uma ditadura com Atos Institucionais, censura, prisões, tortura e exílio.

## AI-5 (1968)

Marco de endurecimento: fechamento de direitos, repressão intensa.

## Memória e justiça

Estudamos o período também para discutir violação de direitos humanos, memória e responsabilidade — temas vivos na democracia.`,
        wiki: ["Ditadura militar brasileira", "https://pt.wikipedia.org/wiki/Ditadura_militar_brasileira"],
      },
      {
        id: "h9-resistencia",
        slug: "resistencias-a-ditadura",
        title: "Resistências à ditadura",
        bncc: ["EF09HI20"],
        summary: "Movimentos, cultura e oposição ao regime.",
        body: `## Formas de resistência

Greves, movimentos estudantis, imprensa alternativa, música, teatro, partidos na clandestinidade, luta armada (em setores) e organização de familiares de perseguidos. A resistência foi plural — não um bloco único.`,
        wiki: ["Resistência à ditadura militar no Brasil", "https://pt.wikipedia.org/wiki/Resist%C3%AAncia_%C3%A0_ditadura_militar_no_Brasil"],
      },
      {
        id: "h9-redemocratizacao",
        slug: "redemocratizacao-e-constituicao-1988",
        title: "Redemocratização e Constituição de 1988",
        bncc: ["EF09HI22", "EF09HI23"],
        summary: "Diretas Já, Nova República e cidadania ampliada.",
        body: `## Caminho democrático

No fim da ditadura, mobilizações como as Diretas Já pressionaram a abertura. Após a transição, a **Constituição de 1988** (“Constituição Cidadã”) ampliou direitos civis, políticos e sociais.

## Cidadania

A Carta é referência contra preconceitos e para a defesa de direitos — mesmo quando a realidade ainda não cumpre tudo o que está escrito.`,
        wiki: ["Constituição brasileira de 1988", "https://pt.wikipedia.org/wiki/Constitui%C3%A7%C3%A3o_brasileira_de_1988"],
      },
      {
        id: "h9-brasil-recente",
        slug: "brasil-1989-aos-dias-atuais",
        title: "Brasil de 1989 aos dias atuais",
        bncc: ["EF09HI24", "EF09HI25", "EF09HI27"],
        summary: "Democracia, economia e protagonismos sociais.",
        body: `## História recente

Eleições diretas, planos econômicos, estabilização (Plano Real), inclusão social, crises políticas e papel do Brasil no mundo globalizado. A sociedade civil — movimentos negros, indígenas, feministas, LGBTQIA+, sindicais — continua protagonista.

## Para estudar bem

Separar fato, opinião e propaganda; usar fontes confiáveis; ligar eventos locais ao nacional e ao global.`,
        wiki: ["História do Brasil desde 1985", "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_Brasil_desde_1985"],
      },
    ],
  },
  {
    unit: "História recente (mundo)",
    items: [
      {
        id: "h9-guerra-fria",
        slug: "guerra-fria",
        title: "Guerra Fria",
        bncc: ["EF09HI28"],
        summary: "EUA x URSS: bipolaridade e conflitos indiretos.",
        body: `## O que foi?

Após 1945, EUA e URSS lideraram blocos capitalista e socialista. Não houve guerra direta total entre eles, mas corrida armamentista, espionagem, propaganda e guerras “proxy” (Coreia, Vietnã, etc.).

## No Brasil

A Guerra Fria influenciou o golpe de 1964 e a política externa. Entender o contexto internacional é essencial para a história brasileira do século XX.`,
        wiki: ["Guerra Fria", "https://pt.wikipedia.org/wiki/Guerra_Fria"],
      },
      {
        id: "h9-ditaduras-al",
        slug: "ditaduras-na-america-latina",
        title: "Ditaduras na América Latina",
        bncc: ["EF09HI29", "EF09HI30"],
        summary: "Regimes autoritários e conexões regionais.",
        body: `## Padrões

Vários países latino-americanos viveram ditaduras no século XX, com censura, repressão e, em muitos casos, alinhamento a interesses da Guerra Fria. Comparar Brasil, Chile, Argentina e outros ajuda a ver semelhanças e diferenças.`,
        wiki: ["Operação Condor", "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Condor"],
      },
      {
        id: "h9-descolonizacao",
        slug: "descolonizacao-africa-asia",
        title: "Descolonização na África e na Ásia",
        bncc: ["EF09HI31"],
        summary: "Fim dos impérios coloniais no século XX.",
        body: `## Processo

Após a 2ª Guerra, colônias na Ásia e na África conquistaram independência — por negociação ou guerra. Novos Estados enfrentaram desafios econômicos e políticos legados do colonialismo.

## Importância

Mostra o protagonismo dos povos colonizados e redesenha o mapa mundial contemporâneo.`,
        wiki: ["Descolonização", "https://pt.wikipedia.org/wiki/Descoloniza%C3%A7%C3%A3o"],
      },
      {
        id: "h9-globalizacao",
        slug: "globalizacao",
        title: "Fim da Guerra Fria e globalização",
        bncc: ["EF09HI32", "EF09HI33"],
        summary: "Mundo multipolar, mercados e tecnologias.",
        body: `## Depois de 1989–1991

Queda do Muro de Berlim e fim da URSS mudaram a ordem mundial. A globalização acelerou fluxos de capital, informação e pessoas — com vencedores e excluídos.

## Tecnologia

Internet e mídias digitais transformaram política, cultura e economia. Vale analisar oportunidades e riscos (desinformação, vigilância, desigualdade de acesso).`,
        wiki: ["Globalização", "https://pt.wikipedia.org/wiki/Globaliza%C3%A7%C3%A3o"],
      },
    ],
  },
];

// ========== 1º MÉDIO (recorte + compartilhados) ==========
const u1 = [
  {
    unit: "1º colegial — aprofundamento",
    items: [
      {
        id: "h1-ponte-imperio-republica",
        slug: "ponte-imperio-a-republica",
        title: "Ponte: do Império à República (síntese)",
        bncc: [],
        summary: "Revisão rápida para o 1º ano do ensino médio.",
        body: `## Síntese para o médio

Revise: Independência (1822), Império (centralização, café, escravidão, abolição) e Proclamação da República (1889). No ensino médio, o foco aumenta em **fontes**, **interpretações** e ligações entre Brasil e mundo.

Use os tópicos do 8º e 9º como base e aprofunde com mapas, documentos e comparações.`,
        wiki: ["História do Brasil", "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_Brasil"],
        levels: ["1medio"],
      },
      {
        id: "h1-mundo-contemporaneo",
        slug: "mundo-contemporaneo-industrializacao-guerras",
        title: "Mundo contemporâneo: industrialização às guerras",
        bncc: [],
        summary: "Linha do tempo do século XIX ao XX para o 1º médio.",
        body: `## Roteiro de estudo

1. Revolução Industrial e imperialismo  
2. 1ª Guerra e Revolução Russa  
3. Crise de 1929 e totalitarismos  
4. 2ª Guerra e ONU  

Em cada etapa, pergunte: **quem ganha? quem perde? quais fontes provam isso?**`,
        wiki: ["Idade Contemporânea", "https://pt.wikipedia.org/wiki/Idade_Contempor%C3%A2nea"],
        levels: ["1medio"],
      },
      {
        id: "h1-brasil-seculo-xx",
        slug: "brasil-no-seculo-xx-roteiro",
        title: "Brasil no século XX — roteiro do 1º médio",
        bncc: [],
        summary: "Vargas, democracia de 46, ditadura, Constituição de 1988.",
        body: `## Roteiro

- Era Vargas e trabalhismo  
- 1946–1964  
- Ditadura civil-militar  
- Redemocratização e Constituição de 1988  

Relacione sempre com Guerra Fria e América Latina. Os textos detalhados estão também nos tópicos do 9º ano (conteúdos compartilháveis).`,
        wiki: ["História do Brasil", "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_Brasil"],
        levels: ["1medio"],
      },
      {
        id: "h1-cidadania-fontes",
        slug: "cidadania-direitos-e-fontes-historicas",
        title: "Cidadania, direitos e fontes históricas",
        bncc: [],
        summary: "Como estudar História no ensino médio.",
        body: `## Competências do médio

Na BNCC do Ensino Médio (Ciências Humanas), o foco inclui analisar fontes, contextualizar narrativas, discutir poder, trabalho, direitos e cidadania.

## Método rápido

1. Identifique a fonte (quem produziu? quando? para quê?)  
2. Separe fato e interpretação  
3. Compare duas versões do mesmo evento  
4. Relacione passado e presente sem anacronismo simplista`,
        wiki: ["Fonte histórica", "https://pt.wikipedia.org/wiki/Fonte_hist%C3%B3rica"],
        levels: ["1medio"],
      },
    ],
  },
];

function buildFromUnits(units, level, startOrder) {
  let order = startOrder;
  const contents = [];
  for (const block of units) {
    for (const item of block.items) {
      const levels = item.levels || [level];
      addTopic({
        id: item.id,
        title: item.title,
        slug: item.slug,
        unit: block.unit,
        order: order++,
        levels,
        bnccCodes: item.bncc || [],
      });

      const meta = item.wiki ? SRC_WIKI(item.wiki[0], item.wiki[1]) : SRC_BNCC;
      contents.push({
        id: `content-${item.id}`,
        topicId: item.id,
        subjectId: "historia",
        slug: item.slug,
        title: item.title,
        summary: item.summary,
        body: item.body.trim(),
        levels,
        bnccCodes: item.bncc || [],
        unit: block.unit,
        exercises: [
          {
            q: `Em uma frase, diga por que "${item.title}" importa para entender o Brasil ou o mundo atual.`,
            type: "aberta",
          },
          {
            q: "Cite dois conceitos ou acontecimentos centrais deste tópico.",
            type: "aberta",
          },
        ],
        ...meta,
        updatedAt: "2026-07-10",
      });
    }
  }
  return contents;
}

ensureDir(OUT.c8);
ensureDir(OUT.c9);
ensureDir(OUT.c1);
ensureDir(OUT.shared);

const c8 = buildFromUnits(u8, "8ano", 100);
const c9 = buildFromUnits(u9, "9ano", 200);
const c1 = buildFromUnits(u1, "1medio", 300);

// Conteúdos do 9º também marcados como úteis ao 1º médio (cópia de índice compartilhado)
const sharedIndex = [];
for (const c of c9) {
  if (
    [
      "proclamacao-da-republica",
      "trabalhismo-e-era-vargas",
      "ditadura-civil-militar",
      "redemocratizacao-e-constituicao-1988",
      "guerra-fria",
      "primeira-guerra-mundial",
      "segunda-guerra-mundial",
    ].includes(c.slug)
  ) {
    const shared = {
      ...c,
      id: `content-shared-${c.slug}`,
      levels: ["9ano", "1medio"],
      note: "Versão compartilhada 9º + 1º médio (mesmo texto-base).",
    };
    writeContent(OUT.shared, shared);
    sharedIndex.push(shared.slug);
  }
}

for (const c of c8) writeContent(OUT.c8, c);
for (const c of c9) writeContent(OUT.c9, c);
for (const c of c1) writeContent(OUT.c1, c);

fs.writeFileSync(
  OUT.topics,
  JSON.stringify(
    {
      subjectId: "historia",
      generatedAt: "2026-07-10",
      totalTopics: topics.length,
      topics,
      sharedContentSlugs: sharedIndex,
    },
    null,
    2
  ),
  "utf8"
);

const manifest = {
  subjectId: "historia",
  generatedAt: "2026-07-10",
  counts: {
    topics: topics.length,
    contents8: c8.length,
    contents9: c9.length,
    contents1: c1.length,
    shared: sharedIndex.length,
  },
  folders: {
    "conteudos/8ano": c8.map((x) => x.slug + ".json"),
    "conteudos/9ano": c9.map((x) => x.slug + ".json"),
    "conteudos/1medio": c1.map((x) => x.slug + ".json"),
    "conteudos/compartilhado": sharedIndex.map((s) => s + ".json"),
  },
};

fs.writeFileSync(path.join(ROOT, "manifesto.json"), JSON.stringify(manifest, null, 2), "utf8");

console.log("OK", manifest.counts);
