import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const familier: Module = {
  id: 'familier',
  icone: '😄',
  titre: 'Expressions familières',
  description: 'Réagir, plaisanter, exprimer ses émotions',
  reluParNatif: false,
  seances: [
    {
      id: 'familier-reagir',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: "J'ai raté mon train !",
            formes: {
              msa: 'fatani al-9i6ar !',
              darija: 'ma l7a9tch t-tran !',
              tounsi: 'fatni et-tran !',
            },
            arabe: { msa: 'فاتني القطار!', darija: 'ما لحقتش التران!', tounsi: 'فاتني التران!' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Quel dommage ! Sérieux ?',
            formes: {
              msa: 'ya lil-asaf ! 7a99an ?',
              darija: '5sara ! wach bse7 ?',
              tounsi: 'ya 5sara ! 7a9 rabbi ?',
            },
            arabe: {
              msa: 'يا للأسف! حقا؟',
              darija: 'خسارة! واش بصح؟',
              tounsi: 'يا خسارة! حق ربي؟',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: "Oui, mais quelqu'un m'a emmené en voiture !",
            formes: {
              msa: 'na3am, lakin a7aduhum awsalani bi-sayyaratihi !',
              darija: 'iyyeh, walakin chi wa7ed wsselni f tomobilo !',
              tounsi: 'ey, ama wa7ed wsselni fi karhabtou !',
            },
            arabe: {
              msa: 'نعم، لكن أحدهم أوصلني بسيارته!',
              darija: 'إيه، ولكن شي واحد وصلني ف طوموبيلو!',
              tounsi: 'إي، أما واحد وصلني في كرهبتو!',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Tant mieux !',
            formes: { msa: 'a7san !', darija: '7sen !', tounsi: 'a7sen !' },
            arabe: { msa: 'أحسن!', darija: 'حسن!', tounsi: 'أحسن!' },
          },
        },
      ],
      titre: 'Réagir à une nouvelle',
      objectif: "Exprimer la surprise, l'admiration ou la déception.",
      contexte:
        "Ces réactions sont très courtes et s'emploient entre proches. Beaucoup mentionnent Dieu sans être religieuses : « ya rabbi ! », « machallah ».",
      expressions: [
        {
          sens: "Ce n'est pas possible !",
          formes: {
            msa: 'hatha moustahil !',
            darija: 'ma ymkench !',
            tounsi: 'mouch mmkon !',
          },
          arabe: { msa: 'هذا مستحيل!', darija: 'ما يمكنش!', tounsi: 'موش ممكن!' },
        },
        {
          sens: 'Magnifique (que Dieu le préserve) !',
          formes: {
            msa: 'ma cha2a allah !',
            darija: 'machallah !',
            tounsi: 'machallah !',
          },
          arabe: { msa: 'ما شاء الله!', darija: 'ما شاء الله!', tounsi: 'ما شاء الله!' },
        },
        {
          sens: 'Quel dommage !',
          formes: {
            msa: 'ya lil-asaf !',
            darija: '5sara !',
            tounsi: 'ya 5sara !',
          },
          arabe: { msa: 'يا للأسف!', darija: 'خسارة!', tounsi: 'يا خسارة!' },
        },
        {
          sens: 'Oh là là !',
          formes: {
            msa: 'ya ilahi !',
            darija: 'ya rabbi !',
            tounsi: 'ya rabbi !',
          },
          arabe: { msa: 'يا إلهي!', darija: 'يا ربي!', tounsi: 'يا ربي!' },
        },
      ],
      supplementaires: [
        {
          sens: 'Sérieux ?',
          formes: {
            msa: '7a99an ?',
            darija: 'wach bse7 ?',
            tounsi: '7a9 rabbi ?',
          },
          arabe: { msa: 'حقا؟', darija: 'واش بصح؟', tounsi: 'حق ربي؟' },
        },
        {
          sens: 'Tant mieux !',
          formes: {
            msa: 'a7san !',
            darija: '7sen !',
            tounsi: 'a7sen !',
          },
          arabe: { msa: 'أحسن!', darija: 'حسن!', tounsi: 'أحسن!' },
        },
        {
          sens: "Je n'en reviens pas !",
          formes: {
            msa: 'la ousaddi9 !',
            darija: 'ma kansadde9ch !',
            tounsi: 'mouch msadde9 !',
          },
          arabe: { msa: 'لا أصدق!', darija: 'ما كنصدقش!', tounsi: 'موش مصدق!' },
        },
      ],
      defiOral:
        "Un ami t'annonce trois nouvelles — une bonne, une triste, une incroyable : réagis à chacune.",
      aRetenir:
        '« Machallah » (admiration) est commun aux trois variantes. Quel dommage : « 5sara » (darija), « ya 5sara » (tounsi).',
      aToiDeJouer: 'Écris trois réactions courtes à trois nouvelles différentes.',
    },
    {
      id: 'familier-emotions',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu es triste ?',
            formes: {
              msa: 'hal anti 7azina ?',
              darija: 'wach nti 7zina ?',
              tounsi: 'enti 7zina ?',
            },
            arabe: { msa: 'هل أنت حزينة؟', darija: 'واش نتي حزينة؟', tounsi: 'انتي حزينة؟' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "Non, je suis stressée. J'en ai marre !",
            formes: {
              msa: 'la, ana moutawattira. la9ad sa2imtou !',
              darija: 'la, ana mstressia. 3yit !',
              tounsi: 'le, ena mstressia. mallit !',
            },
            arabe: {
              msa: 'لا، أنا متوترة. لقد سئمت!',
              darija: 'لا، أنا مسطريسية. عييت!',
              tounsi: 'لا، أنا مسطريسية. مليت!',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: "Ne t'inquiète pas, ça va passer.",
            formes: {
              msa: 'la ta9la9i, sata7assanou al-oumour.',
              darija: 'ma t9le9ch, ghadi ydouz kolchi.',
              tounsi: 'ma t9alla9ch, taw t3addi.',
            },
            arabe: {
              msa: 'لا تقلقي، ستتحسن الأمور.',
              darija: 'ما تقلقش، غادي يدوز كلشي.',
              tounsi: 'ما تقلقش، توا تعدي.',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Merci, ça me fait plaisir.',
            formes: {
              msa: 'choukran, hatha yous3idouni.',
              darija: 'choukran, ferre7tni.',
              tounsi: 'ya3tik sa77a, far7tni.',
            },
            arabe: {
              msa: 'شكرا، هذا يسعدني.',
              darija: 'شكرا، فرحتني.',
              tounsi: 'يعطيك الصحة، فرحتني.',
            },
          },
        },
      ],
      titre: "Dire ce qu'on ressent",
      objectif: "Dire qu'on est content, triste, énervé ou stressé.",
      contexte:
        "Les adjectifs s'accordent avec la personne qui parle : « fer7an / fer7ana » (content / contente) en darija. Pour le stress, la darija et le tounsi empruntent au français.",
      expressions: [
        {
          sens: 'Je suis content(e)',
          formes: {
            msa: 'ana sa3id (homme) / ana sa3ida (femme)',
            darija: 'ana fer7an (homme) / ana fer7ana (femme)',
            tounsi: 'ena far7an (homme) / ena far7ana (femme)',
          },
          arabe: {
            msa: 'أنا سعيد / أنا سعيدة',
            darija: 'أنا فرحان / أنا فرحانة',
            tounsi: 'أنا فرحان / أنا فرحانة',
          },
        },
        {
          sens: 'Je suis triste',
          formes: {
            msa: 'ana 7azin (homme) / ana 7azina (femme)',
            darija: 'ana 7zin (homme) / ana 7zina (femme)',
            tounsi: 'ena 7zin (homme) / ena 7zina (femme)',
          },
          arabe: {
            msa: 'أنا حزين / أنا حزينة',
            darija: 'أنا حزين / أنا حزينة',
            tounsi: 'أنا حزين / أنا حزينة',
          },
        },
        {
          sens: 'Je suis énervé(e)',
          formes: {
            msa: 'ana ghadib (homme) / ana ghadiba (femme)',
            darija: 'ana m9elle9 (homme) / ana m9ell9a (femme)',
            tounsi: 'ena metghachech (homme) / ena metghachcha (femme)',
          },
          arabe: {
            msa: 'أنا غاضب / أنا غاضبة',
            darija: 'أنا مقلق / أنا مقلقة',
            tounsi: 'أنا متغشش / أنا متغششة',
          },
        },
        {
          sens: 'Je suis stressé(e)',
          formes: {
            msa: 'ana moutawattir (homme) / ana moutawattira (femme)',
            darija: 'ana mstressé (homme) / ana mstressia (femme)',
            tounsi: 'ena mstressi (homme) / ena mstressia (femme)',
          },
          arabe: {
            msa: 'أنا متوتر / أنا متوترة',
            darija: 'أنا مسطريسي / أنا مسطريسية',
            tounsi: 'أنا مسطريسي / أنا مسطريسية',
          },
        },
      ],
      supplementaires: [
        {
          sens: 'Ça me fait plaisir',
          formes: {
            msa: 'hatha yous3idouni',
            darija: 'ferre7tini',
            tounsi: 'far7tni',
          },
          arabe: { msa: 'هذا يسعدني', darija: 'فرحتيني', tounsi: 'فرحتني' },
        },
        {
          sens: "J'en ai marre",
          formes: {
            msa: 'la9ad sa2imtou',
            darija: '3yit',
            tounsi: 'mallit',
          },
          arabe: { msa: 'لقد سئمت', darija: 'عييت', tounsi: 'مليت' },
        },
        {
          sens: "Ne t'inquiète pas",
          formes: {
            msa: 'la ta9la9 ! (à un homme) / la ta9la9i ! (à une femme)',
            darija: 'ma t9le9ch',
            tounsi: 'ma t9alla9ch',
          },
          arabe: { msa: 'لا تقلق! / لا تقلقي!', darija: 'ما تقلقش', tounsi: 'ما تقلقش' },
        },
      ],
      defiOral: "Dis comment tu te sens aujourd'hui, puis demande à un ami comment il se sent.",
      aRetenir:
        "Content : « fer7an » (darija), « far7an » (tounsi). J'en ai marre : « 3yit » (darija), « mallit » (tounsi).",
      aToiDeJouer: "Écris comment tu te sens aujourd'hui et pourquoi.",
    },
    {
      id: 'familier-plaisanter',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu es drôle !',
            formes: { msa: 'anti moud7ika !', darija: 'nti mdo77ka !', tounsi: 'enti tda77ek !' },
            arabe: { msa: 'أنت مضحكة!', darija: 'نتي مضحكة!', tounsi: 'انتي تضحك!' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Je plaisante ! On rigole bien.',
            formes: {
              msa: 'ana amza7 ! nad7akou kathiran.',
              darija: 'kand7ek ! kand7kou bzaf.',
              tounsi: 'nod7ek ! nod7kou barcha.',
            },
            arabe: {
              msa: 'أنا أمزح! نضحك كثيرا.',
              darija: 'كنضحك! كنضحكو بزاف.',
              tounsi: 'نضحك! نضحكو برشا.',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: "C'est trop drôle !",
            formes: {
              msa: 'hatha moud7ik jiddan !',
              darija: 'kayd77ek bzaf !',
              tounsi: 'yod7ek barcha !',
            },
            arabe: { msa: 'هذا مضحك جدا!', darija: 'كيضحك بزاف!', tounsi: 'يضحك برشا!' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Arrête, tu me fais rire !',
            formes: {
              msa: 'tawa99af, tod7ikouni !',
              darija: 'baraka, katd7ekni !',
              tounsi: 'yezzi, tad7akni !',
            },
            arabe: { msa: 'توقف، تضحكني!', darija: 'باراكا، كتضحكني!', tounsi: 'يزي، تضحكني!' },
          },
        },
      ],
      titre: 'Plaisanter et taquiner',
      objectif: "Rire, taquiner gentiment, détendre l'atmosphère.",
      contexte:
        "L'humour passe beaucoup par le ton. Préciser « je plaisante » évite les malentendus, surtout quand on débute.",
      expressions: [
        {
          sens: 'Je plaisante !',
          formes: {
            msa: 'ana amza7 !',
            darija: 'kand7ek !',
            tounsi: 'nod7ek !',
          },
          arabe: { msa: 'أنا أمزح!', darija: 'كنضحك!', tounsi: 'نضحك!' },
        },
        {
          sens: 'Tu es drôle',
          formes: {
            msa: 'anta moud7ik (à un homme) / anti moud7ika (à une femme)',
            darija: 'nta mdo77ek (à un homme) / nti mdo77ka (à une femme)',
            tounsi: 'enti tda77ek',
          },
          arabe: {
            msa: 'أنت مضحك / أنت مضحكة',
            darija: 'نتا مضحك / نتي مضحكة',
            tounsi: 'انتي تضحك',
          },
        },
        {
          sens: 'Arrête !',
          formes: {
            msa: 'tawa99af ! (à un homme) / tawa99afi ! (à une femme)',
            darija: 'baraka !',
            tounsi: 'yezzi !',
          },
          arabe: { msa: 'توقف! / توقفي!', darija: 'باراكا!', tounsi: 'يزي!' },
        },
        {
          sens: "C'est trop drôle",
          formes: {
            msa: 'hatha moud7ik jiddan',
            darija: 'kayd77ek bzaf',
            tounsi: 'yod7ek barcha',
          },
          arabe: { msa: 'هذا مضحك جدا', darija: 'كيضحك بزاف', tounsi: 'يضحك برشا' },
        },
      ],
      supplementaires: [
        {
          sens: 'On rigole bien',
          formes: {
            msa: 'nad7akou kathiran',
            darija: 'kand7kou bzaf',
            tounsi: 'nod7kou barcha',
          },
          arabe: { msa: 'نضحك كثيرا', darija: 'كنضحكو بزاف', tounsi: 'نضحكو برشا' },
        },
        {
          sens: 'Tu me fais rire',
          formes: {
            msa: 'tod7ikouni',
            darija: 'katd7ekni',
            tounsi: 'tad7akni',
          },
          arabe: { msa: 'تضحكني', darija: 'كتضحكني', tounsi: 'تضحكني' },
        },
        {
          sens: "N'importe quoi !",
          formes: {
            msa: null,
            darija: 'kalam 5awi !',
            tounsi: 'klem fergh !',
          },
          arabe: { darija: 'كلام خاوي!', tounsi: 'كلام فارغ!' },
        },
      ],
      defiOral: "Raconte une petite histoire drôle, puis dis à ton ami qu'il te fait rire.",
      aRetenir:
        'Arrête ! : « baraka » (darija), « yezzi » (tounsi). Je plaisante : « kand7ek » (darija), « nod7ek » (tounsi).',
      aToiDeJouer:
        'Écris un message pour taquiner gentiment un ami, puis précise que tu plaisantes.',
    },
  ],
};
