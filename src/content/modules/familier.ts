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
        },
        {
          sens: 'Magnifique (que Dieu le préserve) !',
          formes: {
            msa: 'ma cha2a allah !',
            darija: 'machallah !',
            tounsi: 'machallah !',
          },
        },
        {
          sens: 'Quel dommage !',
          formes: {
            msa: 'ya lil-asaf !',
            darija: '5sara !',
            tounsi: 'ya 5sara !',
          },
        },
        {
          sens: 'Oh là là !',
          formes: {
            msa: 'ya ilahi !',
            darija: 'ya rabbi !',
            tounsi: 'ya rabbi !',
          },
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
        },
        {
          sens: 'Tant mieux !',
          formes: {
            msa: 'a7san !',
            darija: '7sen !',
            tounsi: 'a7sen !',
          },
        },
        {
          sens: "Je n'en reviens pas !",
          formes: {
            msa: 'la ousaddi9 !',
            darija: 'ma kansadde9ch !',
            tounsi: 'mouch msadde9 !',
          },
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
        },
        {
          sens: 'Je suis triste',
          formes: {
            msa: 'ana 7azin (homme) / ana 7azina (femme)',
            darija: 'ana 7zin (homme) / ana 7zina (femme)',
            tounsi: 'ena 7zin (homme) / ena 7zina (femme)',
          },
        },
        {
          sens: 'Je suis énervé(e)',
          formes: {
            msa: 'ana ghadib (homme) / ana ghadiba (femme)',
            darija: 'ana m9elle9 (homme) / ana m9ell9a (femme)',
            tounsi: 'ena metghachech (homme) / ena metghachcha (femme)',
          },
        },
        {
          sens: 'Je suis stressé(e)',
          formes: {
            msa: 'ana moutawattir (homme) / ana moutawattira (femme)',
            darija: 'ana mstressé (homme) / ana mstressia (femme)',
            tounsi: 'ena mstressi (homme) / ena mstressia (femme)',
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
        },
        {
          sens: "J'en ai marre",
          formes: {
            msa: 'la9ad sa2imtou',
            darija: '3yit',
            tounsi: 'mallit',
          },
        },
        {
          sens: "Ne t'inquiète pas",
          formes: {
            msa: 'la ta9la9 ! (à un homme) / la ta9la9i ! (à une femme)',
            darija: 'ma t9le9ch',
            tounsi: 'ma t9alla9ch',
          },
        },
      ],
      defiOral: "Dis comment tu te sens aujourd'hui, puis demande à un ami comment il se sent.",
      aRetenir:
        "Content : « fer7an » (darija), « far7an » (tounsi). J'en ai marre : « 3yit » (darija), « mallit » (tounsi).",
      aToiDeJouer: "Écris comment tu te sens aujourd'hui et pourquoi.",
    },
    {
      id: 'familier-plaisanter',
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
        },
        {
          sens: 'Tu es drôle',
          formes: {
            msa: 'anta moud7ik (à un homme) / anti moud7ika (à une femme)',
            darija: 'nta mdo77ek (à un homme) / nti mdo77ka (à une femme)',
            tounsi: 'enti tda77ek',
          },
        },
        {
          sens: 'Arrête !',
          formes: {
            msa: 'tawa99af ! (à un homme) / tawa99afi ! (à une femme)',
            darija: 'baraka !',
            tounsi: 'yezzi !',
          },
        },
        {
          sens: "C'est trop drôle",
          formes: {
            msa: 'hatha moud7ik jiddan',
            darija: 'kayd77ek bzaf',
            tounsi: 'yod7ek barcha',
          },
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
        },
        {
          sens: 'Tu me fais rire',
          formes: {
            msa: 'tod7ikouni',
            darija: 'katd7ekni',
            tounsi: 'tad7akni',
          },
        },
        {
          sens: "N'importe quoi !",
          formes: {
            msa: null,
            darija: 'kalam 5awi !',
            tounsi: 'klem fergh !',
          },
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
