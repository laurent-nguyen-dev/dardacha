import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const nouvelles: Module = {
  id: 'nouvelles',
  icone: '💬',
  titre: 'Prendre des nouvelles',
  description: "Demander comment va quelqu'un et répondre",
  reluParNatif: false,
  seances: [
    {
      id: 'nouvelles-ca-va',
      titre: 'Demander comment ça va',
      objectif: "Demander à quelqu'un comment il va et ce qu'il y a de neuf.",
      contexte:
        "Au Maroc, « labas ? » sert à la fois de question et de réponse ; en Tunisie on dit « labes ? ». En MSA, « kayfa 7alouk » s'accorde avec la personne à qui l'on parle.",
      expressions: [
        {
          sens: 'Ça va ?',
          formes: {
            msa: 'kayfa 7alouk ? (à un homme) / kayfa 7alouki ? (à une femme)',
            darija: 'labas ?',
            tounsi: 'labes ?',
          },
        },
        {
          sens: 'Ça va, Dieu merci',
          formes: {
            msa: 'bi5ayr, al-7amdou lillah',
            darija: 'labas, l-7amdoullah',
            tounsi: 'labes, el-7amdoullah',
          },
        },
        {
          sens: 'Comment vas-tu ?',
          formes: {
            msa: 'kayfa al-7al ?',
            darija: 'kidayr ? (à un homme) / kidayra ? (à une femme)',
            tounsi: 'chniya a7walek ?',
          },
        },
        {
          sens: 'Quoi de neuf ?',
          formes: { msa: 'ma al-jadid ?', darija: 'ach 5barek ?', tounsi: 'chniya l-a5bar ?' },
        },
      ],
      supplementaires: [
        {
          sens: 'Tout va bien',
          formes: { msa: 'koullou chay2 bi5ayr', darija: 'kolchi mzyan', tounsi: 'kol chay behi' },
        },
        {
          sens: 'Et toi, ça va ?',
          formes: {
            msa: 'wa anta, kayfa 7alouk ? (à un homme) / wa anti, kayfa 7alouki ? (à une femme)',
            darija: 'w nta, labas ? (à un homme) / w nti, labas ? (à une femme)',
            tounsi: 'w enti, labes ?',
          },
        },
        {
          sens: 'Ça fait longtemps !',
          formes: {
            msa: 'lam arak mounthou zaman ! (à un homme) / lam araki mounthou zaman ! (à une femme)',
            darija: 'hadi modda ma chefnak !',
            tounsi: 'malla ghiba !',
          },
        },
      ],
      defiOral:
        "Tu croises un ami que tu n'as pas vu depuis longtemps : salue-le, demande-lui comment il va et ce qu'il y a de neuf.",
      aRetenir:
        '« Labas ? » (darija) et « labes ? » (tounsi) : la même phrase sert de question et de réponse. On ajoute volontiers « l-7amdoullah » (Dieu merci).',
      aToiDeJouer:
        "Écris un court échange où tu demandes à quelqu'un comment il va et ce qu'il y a de neuf.",
    },
    {
      id: 'nouvelles-repondre',
      titre: 'Répondre et nuancer',
      objectif: 'Dire que ça va très bien, moyennement ou pas très bien.',
      contexte:
        "Pour « bien », le Maroc dit « mzyan » et la Tunisie « behi ». « Fatigué » ou « malade » s'accordent avec la personne qui parle, dans les trois variantes.",
      expressions: [
        {
          sens: 'Très bien',
          formes: { msa: 'jayyid jiddan', darija: 'mzyan bzaf', tounsi: 'behi barcha' },
        },
        {
          sens: 'Pas mal',
          formes: { msa: 'la ba2s', darija: 'machi 5ayb', tounsi: 'mouch 5ayeb' },
        },
        {
          sens: 'Je suis fatigué(e)',
          formes: {
            msa: 'ana mout3ab (homme) / ana mout3aba (femme)',
            darija: 'ana 3iyyan (homme) / ana 3iyyana (femme)',
            tounsi: 'ena ta3ban (homme) / ena ta3bana (femme)',
          },
        },
        {
          sens: 'Pas très bien',
          formes: { msa: 'lastou bi5ayr', darija: 'machi mzyan bzaf', tounsi: 'mouch behi barcha' },
        },
      ],
      supplementaires: [
        {
          sens: 'Je suis malade',
          formes: {
            msa: 'ana marid (homme) / ana marida (femme)',
            darija: 'ana mrid (homme) / ana mrida (femme)',
            tounsi: 'ena mrid (homme) / ena mrida (femme)',
          },
        },
        {
          sens: "J'ai beaucoup de travail",
          formes: {
            msa: '3indi 3amal kathir',
            darija: '3ndi bzaf dial l-5edma',
            tounsi: '3andi barcha 5edma',
          },
        },
        {
          sens: 'Ça va aller, si Dieu le veut',
          formes: {
            msa: 'sa-yakounou koullou chay2 bi5ayr, in cha2a allah',
            darija: 'ghadi ykoun kolchi mzyan, inchallah',
            tounsi: 'bech ykoun kol chay behi, inchallah',
          },
        },
      ],
      defiOral:
        'Réponds de trois façons à « labas ? » : ça va très bien, pas mal, puis tu es fatigué(e).',
      aRetenir:
        'Bien : « mzyan » (darija), « behi » (tounsi). Beaucoup : « bzaf » (darija), « barcha » (tounsi).',
      aToiDeJouer: "Écris comment tu vas aujourd'hui, en donnant une raison (fatigue, travail…).",
    },
    {
      id: 'nouvelles-proches',
      titre: 'Prendre des nouvelles des proches',
      objectif: 'Demander comment va la famille et transmettre ses salutations.',
      contexte:
        'Demander des nouvelles de la famille est une marque de politesse importante au Maghreb, souvent juste après les salutations. « La famille » se dit « l-3a2ila » en darija et « el-3ayla » en tounsi.',
      expressions: [
        {
          sens: 'Comment va la famille ?',
          formes: {
            msa: 'kayfa al-3a2ila ?',
            darija: 'kidayra l-3a2ila ?',
            tounsi: 'chniya a7wel el-3ayla ?',
          },
        },
        {
          sens: 'Tout le monde va bien',
          formes: { msa: 'al-jami3 bi5ayr', darija: 'kolchi bi5ir', tounsi: 'lkol labes' },
        },
        {
          sens: 'Comment vont tes parents ?',
          formes: {
            msa: 'kayfa walidayk ? (à un homme) / kayfa walidayki ? (à une femme)',
            darija: 'kidayrin l-walidin ?',
            tounsi: 'chniya a7wel el-waldin ?',
          },
        },
        {
          sens: 'Passe-leur le bonjour',
          formes: {
            msa: 'balligh-houm salami (à un homme) / ballighi-houm salami (à une femme)',
            darija: 'sellem 3lihoum (à un homme) / sellmi 3lihoum (à une femme)',
            tounsi: 'sallemli 3lihom',
          },
        },
      ],
      supplementaires: [
        {
          sens: 'Comment vont les enfants ?',
          formes: {
            msa: 'kayfa al-a6fal ?',
            darija: 'kidayrin d-drari ?',
            tounsi: 'chniya a7wel es-sghar ?',
          },
        },
        {
          sens: 'Ils te passent le bonjour',
          formes: {
            msa: 'yousallimouna 3alayk',
            darija: 'kaysellmou 3lik',
            tounsi: 'ysallmou 3lik',
          },
        },
        {
          sens: 'Que Dieu te garde',
          formes: { msa: 'allah ya7fadhouk', darija: 'lla y7fdek', tounsi: 'rabbi y5allik' },
        },
      ],
      defiOral:
        'Demande à un ami des nouvelles de sa famille et de ses parents, puis demande-lui de leur passer le bonjour.',
      aRetenir:
        "« Sellem 3lihoum » (darija) et « sallemli 3lihom » (tounsi) : passe-leur le bonjour. On l'entend à la fin de presque chaque conversation.",
      aToiDeJouer: 'Écris un message à un ami pour prendre des nouvelles de sa famille.',
    },
  ],
};
