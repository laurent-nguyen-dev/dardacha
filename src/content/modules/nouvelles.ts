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
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Salut, ça va ?',
            formes: {
              msa: 'marhaban, kayfa 7alouki ?',
              darija: 'salam, labas ?',
              tounsi: '3aslema, labes ?',
            },
            arabe: { msa: 'مرحبا، كيف حالك؟', darija: 'سلام، لاباس؟', tounsi: 'عسلامة، لاباس؟' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Ça va, Dieu merci. Et toi, ça va ?',
            formes: {
              msa: 'bi5ayr, al-7amdou lillah. wa anta, kayfa 7alouk ?',
              darija: 'labas, l-7amdoullah. w nta, labas ?',
              tounsi: 'labes, el-7amdoullah. w enti, labes ?',
            },
            arabe: {
              msa: 'بخير، الحمد لله. وأنت، كيف حالك؟',
              darija: 'لاباس، الحمد لله. ونتا، لاباس؟',
              tounsi: 'لاباس، الحمد لله. وانتي، لاباس؟',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Tout va bien. Quoi de neuf ?',
            formes: {
              msa: 'koullou chay2 bi5ayr. ma al-jadid ?',
              darija: 'kolchi mzyan. ach 5barek ?',
              tounsi: 'kol chay behi. chniya l-a5bar ?',
            },
            arabe: {
              msa: 'كل شيء بخير. ما الجديد؟',
              darija: 'كلشي مزيان. أش خبارك؟',
              tounsi: 'كل شي بهي. شنية الأخبار؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Rien de spécial. Ça fait longtemps !',
            formes: {
              msa: 'la jadid. lam arak mounthou zaman !',
              darija: 'walou. hadi modda ma chefnak !',
              tounsi: 'ma famma chay. malla ghiba !',
            },
            arabe: {
              msa: 'لا جديد. لم أرك منذ زمان!',
              darija: 'والو. هادي مدة ما شفناك!',
              tounsi: 'ما فما شي. ملا غيبة!',
            },
          },
        },
      ],
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
          arabe: { msa: 'كيف حالك؟ / كيف حالك؟', darija: 'لاباس؟', tounsi: 'لاباس؟' },
        },
        {
          sens: 'Ça va, Dieu merci',
          formes: {
            msa: 'bi5ayr, al-7amdou lillah',
            darija: 'labas, l-7amdoullah',
            tounsi: 'labes, el-7amdoullah',
          },
          arabe: { msa: 'بخير، الحمد لله', darija: 'لاباس، الحمد لله', tounsi: 'لاباس، الحمد لله' },
        },
        {
          sens: 'Comment vas-tu ?',
          formes: {
            msa: 'kayfa al-7al ?',
            darija: 'kidayr ? (à un homme) / kidayra ? (à une femme)',
            tounsi: 'chniya a7walek ?',
          },
          arabe: { msa: 'كيف الحال؟', darija: 'كيداير؟ / كيدايرة؟', tounsi: 'شنية أحوالك؟' },
        },
        {
          sens: 'Quoi de neuf ?',
          formes: { msa: 'ma al-jadid ?', darija: 'ach 5barek ?', tounsi: 'chniya l-a5bar ?' },
          arabe: { msa: 'ما الجديد؟', darija: 'أش خبارك؟', tounsi: 'شنية الأخبار؟' },
        },
      ],
      supplementaires: [
        {
          sens: 'Tout va bien',
          formes: { msa: 'koullou chay2 bi5ayr', darija: 'kolchi mzyan', tounsi: 'kol chay behi' },
          arabe: { msa: 'كل شيء بخير', darija: 'كلشي مزيان', tounsi: 'كل شي بهي' },
        },
        {
          sens: 'Et toi, ça va ?',
          formes: {
            msa: 'wa anta, kayfa 7alouk ? (à un homme) / wa anti, kayfa 7alouki ? (à une femme)',
            darija: 'w nta, labas ? (à un homme) / w nti, labas ? (à une femme)',
            tounsi: 'w enti, labes ?',
          },
          arabe: {
            msa: 'وأنت، كيف حالك؟ / وأنت، كيف حالك؟',
            darija: 'ونتا، لاباس؟ / ونتي، لاباس؟',
            tounsi: 'وانتي، لاباس؟',
          },
        },
        {
          sens: 'Ça fait longtemps !',
          formes: {
            msa: 'lam arak mounthou zaman ! (à un homme) / lam araki mounthou zaman ! (à une femme)',
            darija: 'hadi modda ma chefnak !',
            tounsi: 'malla ghiba !',
          },
          arabe: {
            msa: 'لم أرك منذ زمان! / لم أرك منذ زمان!',
            darija: 'هادي مدة ما شفناك!',
            tounsi: 'ملا غيبة!',
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
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Comment vas-tu ?',
            formes: { msa: 'kayfa al-7al ?', darija: 'kidayra ?', tounsi: 'chniya a7walek ?' },
            arabe: { msa: 'كيف الحال؟', darija: 'كيدايرة؟', tounsi: 'شنية أحوالك؟' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Pas très bien, je suis fatiguée.',
            formes: {
              msa: 'lastou bi5ayr, ana mout3aba.',
              darija: 'machi mzyan bzaf, ana 3iyyana.',
              tounsi: 'mouch behi barcha, ena ta3bana.',
            },
            arabe: {
              msa: 'لست بخير، أنا متعبة.',
              darija: 'ماشي مزيان بزاف، أنا عيانة.',
              tounsi: 'موش بهي برشا، أنا تعبانة.',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu as beaucoup de travail ?',
            formes: {
              msa: 'hal 3indaki 3amal kathir ?',
              darija: '3ndek bzaf dial l-5edma ?',
              tounsi: '3andek barcha 5edma ?',
            },
            arabe: {
              msa: 'هل عندك عمل كثير؟',
              darija: 'عندك بزاف ديال الخدمة؟',
              tounsi: 'عندك برشا خدمة؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Oui. Ça va aller, si Dieu le veut.',
            formes: {
              msa: 'na3am. sa-yakounou koullou chay2 bi5ayr, in cha2a allah.',
              darija: 'iyyeh. ghadi ykoun kolchi mzyan, inchallah.',
              tounsi: 'ey. bech ykoun kol chay behi, inchallah.',
            },
            arabe: {
              msa: 'نعم. سيكون كل شيء بخير، إن شاء الله.',
              darija: 'إيه. غادي يكون كلشي مزيان، إن شاء الله.',
              tounsi: 'إي. باش يكون كل شي بهي، إن شاء الله.',
            },
          },
        },
      ],
      titre: 'Répondre et nuancer',
      objectif: 'Dire que ça va très bien, moyennement ou pas très bien.',
      contexte:
        "Pour « bien », le Maroc dit « mzyan » et la Tunisie « behi ». « Fatigué » ou « malade » s'accordent avec la personne qui parle, dans les trois variantes.",
      expressions: [
        {
          sens: 'Très bien',
          formes: { msa: 'jayyid jiddan', darija: 'mzyan bzaf', tounsi: 'behi barcha' },
          arabe: { msa: 'جيد جدا', darija: 'مزيان بزاف', tounsi: 'بهي برشا' },
        },
        {
          sens: 'Pas mal',
          formes: { msa: 'la ba2s', darija: 'machi 5ayb', tounsi: 'mouch 5ayeb' },
          arabe: { msa: 'لا بأس', darija: 'ماشي خايب', tounsi: 'موش خايب' },
        },
        {
          sens: 'Je suis fatigué(e)',
          formes: {
            msa: 'ana mout3ab (homme) / ana mout3aba (femme)',
            darija: 'ana 3iyyan (homme) / ana 3iyyana (femme)',
            tounsi: 'ena ta3ban (homme) / ena ta3bana (femme)',
          },
          arabe: {
            msa: 'أنا متعب / أنا متعبة',
            darija: 'أنا عيان / أنا عيانة',
            tounsi: 'أنا تعبان / أنا تعبانة',
          },
        },
        {
          sens: 'Pas très bien',
          formes: { msa: 'lastou bi5ayr', darija: 'machi mzyan bzaf', tounsi: 'mouch behi barcha' },
          arabe: { msa: 'لست بخير', darija: 'ماشي مزيان بزاف', tounsi: 'موش بهي برشا' },
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
          arabe: {
            msa: 'أنا مريض / أنا مريضة',
            darija: 'أنا مريض / أنا مريضة',
            tounsi: 'أنا مريض / أنا مريضة',
          },
        },
        {
          sens: "J'ai beaucoup de travail",
          formes: {
            msa: '3indi 3amal kathir',
            darija: '3ndi bzaf dial l-5edma',
            tounsi: '3andi barcha 5edma',
          },
          arabe: {
            msa: 'عندي عمل كثير',
            darija: 'عندي بزاف ديال الخدمة',
            tounsi: 'عندي برشا خدمة',
          },
        },
        {
          sens: 'Ça va aller, si Dieu le veut',
          formes: {
            msa: 'sa-yakounou koullou chay2 bi5ayr, in cha2a allah',
            darija: 'ghadi ykoun kolchi mzyan, inchallah',
            tounsi: 'bech ykoun kol chay behi, inchallah',
          },
          arabe: {
            msa: 'سيكون كل شيء بخير، إن شاء الله',
            darija: 'غادي يكون كلشي مزيان، إن شاء الله',
            tounsi: 'باش يكون كل شي بهي، إن شاء الله',
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
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Comment va la famille ?',
            formes: {
              msa: 'kayfa al-3a2ila ?',
              darija: 'kidayra l-3a2ila ?',
              tounsi: 'chniya a7wel el-3ayla ?',
            },
            arabe: {
              msa: 'كيف العائلة؟',
              darija: 'كيدايرة العائلة؟',
              tounsi: 'شنية أحوال العايلة؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Tout le monde va bien, Dieu merci. Et tes parents ?',
            formes: {
              msa: 'al-jami3 bi5ayr, al-7amdou lillah. wa walidak ?',
              darija: 'kolchi bi5ir, l-7amdoullah. w l-walidin dialek ?',
              tounsi: 'lkol labes, el-7amdoullah. w el-waldin ?',
            },
            arabe: {
              msa: 'الجميع بخير، الحمد لله. ووالداك؟',
              darija: 'كلشي بخير، الحمد لله. والواليدين ديالك؟',
              tounsi: 'الكل لاباس، الحمد لله. والوالدين؟',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Ils vont bien. Ils te passent le bonjour.',
            formes: {
              msa: 'houm bi5ayr. yousallimouna 3alayki.',
              darija: 'bi5ir. kaysellmou 3lik.',
              tounsi: 'labes. ysallmou 3lik.',
            },
            arabe: {
              msa: 'هم بخير. يسلمون عليك.',
              darija: 'بخير. كيسلمو عليك.',
              tounsi: 'لاباس. يسلمو عليك.',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Passe-leur le bonjour. Que Dieu te garde !',
            formes: {
              msa: 'balligh-houm salami. allah ya7fadhouk !',
              darija: 'sellem 3lihoum. lla y7fdek !',
              tounsi: 'sallemli 3lihom. rabbi y5allik !',
            },
            arabe: {
              msa: 'بلغهم سلامي. الله يحفظك!',
              darija: 'سلم عليهم. الله يحفظك!',
              tounsi: 'سلملي عليهم. ربي يخليك!',
            },
          },
        },
      ],
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
          arabe: { msa: 'كيف العائلة؟', darija: 'كيدايرة العائلة؟', tounsi: 'شنية أحوال العايلة؟' },
        },
        {
          sens: 'Tout le monde va bien',
          formes: { msa: 'al-jami3 bi5ayr', darija: 'kolchi bi5ir', tounsi: 'lkol labes' },
          arabe: { msa: 'الجميع بخير', darija: 'كلشي بخير', tounsi: 'الكل لاباس' },
        },
        {
          sens: 'Comment vont tes parents ?',
          formes: {
            msa: 'kayfa walidayk ? (à un homme) / kayfa walidayki ? (à une femme)',
            darija: 'kidayrin l-walidin ?',
            tounsi: 'chniya a7wel el-waldin ?',
          },
          arabe: {
            msa: 'كيف والداك؟ / كيف والداك؟',
            darija: 'كيدايرين الواليدين؟',
            tounsi: 'شنية أحوال الوالدين؟',
          },
        },
        {
          sens: 'Passe-leur le bonjour',
          formes: {
            msa: 'balligh-houm salami (à un homme) / ballighi-houm salami (à une femme)',
            darija: 'sellem 3lihoum (à un homme) / sellmi 3lihoum (à une femme)',
            tounsi: 'sallemli 3lihom',
          },
          arabe: {
            msa: 'بلغهم سلامي / بلغيهم سلامي',
            darija: 'سلم عليهم / سلمي عليهم',
            tounsi: 'سلملي عليهم',
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
          arabe: { msa: 'كيف الأطفال؟', darija: 'كيدايرين الدراري؟', tounsi: 'شنية أحوال الصغار؟' },
        },
        {
          sens: 'Ils te passent le bonjour',
          formes: {
            msa: 'yousallimouna 3alayk',
            darija: 'kaysellmou 3lik',
            tounsi: 'ysallmou 3lik',
          },
          arabe: { msa: 'يسلمون عليك', darija: 'كيسلمو عليك', tounsi: 'يسلمو عليك' },
        },
        {
          sens: 'Que Dieu te garde',
          formes: { msa: 'allah ya7fadhouk', darija: 'lla y7fdek', tounsi: 'rabbi y5allik' },
          arabe: { msa: 'الله يحفظك', darija: 'الله يحفظك', tounsi: 'ربي يخليك' },
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
