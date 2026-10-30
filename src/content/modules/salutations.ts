import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const salutations: Module = {
  id: 'salutations',
  icone: '👋',
  titre: 'Salutations et présentations',
  description: 'Dire bonjour, se présenter, faire connaissance',
  reluParNatif: false,
  seances: [
    {
      id: 'salutations-bonjour',
      titre: 'Dire bonjour et au revoir',
      objectif: "Saluer quelqu'un et prendre congé, du matin au soir.",
      contexte:
        "« Salam 3likoum » se comprend partout, du Maroc à la Tunisie. Entre proches, on salue plus court : « salam », ou « 3aslema » en Tunisie. Ces salutations ne changent pas selon qu'on parle à un homme ou à une femme.",
      expressions: [
        {
          sens: 'Bonjour (la paix soit sur vous)',
          formes: {
            msa: 'as-salamou 3alaykoum',
            darija: 'salam 3likoum',
            tounsi: 'salam 3likoum',
          },
        },
        {
          sens: 'Bonjour (réponse)',
          formes: {
            msa: 'wa 3alaykoum as-salam',
            darija: 'wa 3likoum salam',
            tounsi: 'w 3likoum salam',
          },
        },
        {
          sens: 'Bonjour (le matin)',
          formes: { msa: 'saba7 al-5ayr', darija: 'sba7 l-5ir', tounsi: 'sba7 el-5ir' },
        },
        {
          sens: 'Au revoir',
          formes: { msa: 'ma3a as-salama', darija: 'bslama', tounsi: 'bislema' },
        },
      ],
      supplementaires: [
        {
          sens: 'Bonsoir',
          formes: { msa: 'masa2 al-5ayr', darija: 'msa l-5ir', tounsi: 'msa el-5ir' },
        },
        {
          sens: 'Salut (entre proches)',
          formes: { msa: 'mar7aban', darija: 'salam', tounsi: '3aslema' },
        },
        {
          sens: 'Bonne nuit',
          formes: {
            msa: 'tousbi7 3ala 5ayr (à un homme) / tousbi7ina 3ala 5ayr (à une femme)',
            darija: 'tesba7 3la 5ir',
            tounsi: 'tosbo7 3la 5ir',
          },
        },
      ],
      defiOral:
        'Salue un ami le matin, imagine sa réponse, puis dis-lui au revoir. Fais-le une fois dans chaque variante.',
      aRetenir:
        '« Salam 3likoum » appelle toujours la réponse « wa 3likoum salam ». Au revoir se dit « bslama » au Maroc et « bislema » en Tunisie.',
      aToiDeJouer:
        "Écris un court échange : tu salues quelqu'un le matin, il te répond, puis vous vous dites au revoir.",
    },
    {
      id: 'salutations-se-presenter',
      titre: 'Se présenter',
      objectif: 'Dire son prénom, sa nationalité et sa ville.',
      contexte:
        "Pour « je m'appelle », le MSA dit « ismi », la darija « smiti » et le tounsi « esmi ». En MSA et en darija, « toi » change selon qu'on parle à un homme (anta, nta) ou à une femme (anti, nti) ; en tounsi, « enti » sert pour les deux.",
      expressions: [
        {
          sens: "Je m'appelle …",
          formes: { msa: 'ismi …', darija: 'smiti …', tounsi: 'esmi …' },
        },
        {
          sens: "Comment tu t'appelles ?",
          formes: {
            msa: 'ma ismouka ? (à un homme) / ma ismouki ? (à une femme)',
            darija: 'chnou smitek ?',
            tounsi: 'chesmek ?',
          },
        },
        {
          sens: 'Enchanté(e)',
          formes: { msa: 'tacharrafna', darija: 'mtcharfin', tounsi: 'mitcharfin' },
        },
        {
          sens: 'Je suis français(e)',
          formes: {
            msa: 'ana faransi (homme) / ana faransiya (femme)',
            darija: 'ana fransawi (homme) / ana fransawiya (femme)',
            tounsi: 'ena fransawi (homme) / ena fransawiya (femme)',
          },
        },
      ],
      supplementaires: [
        {
          sens: "J'habite à Paris",
          formes: {
            msa: 'askounou fi baris',
            darija: 'kansken f paris',
            tounsi: 'noskon fi paris',
          },
        },
        {
          sens: 'Et toi ?',
          formes: {
            msa: 'wa anta ? (à un homme) / wa anti ? (à une femme)',
            darija: 'w nta ? (à un homme) / w nti ? (à une femme)',
            tounsi: 'w enti ?',
          },
        },
        {
          sens: 'Je parle un peu arabe',
          formes: {
            msa: 'atakallamou al-3arabiya 9alilan',
            darija: 'kanhder chwiya l-3arbiya',
            tounsi: 'nahki chwaya bel-3arbi',
          },
        },
      ],
      defiOral:
        'Présente-toi à voix haute : ton prénom, ta nationalité et ta ville. Puis demande son prénom à ton interlocuteur.',
      aRetenir:
        "« Smiti » (darija) et « esmi » (tounsi) viennent du même mot que « ismi » en MSA. En tounsi, « enti » (toi) s'utilise pour un homme comme pour une femme.",
      aToiDeJouer:
        'Écris ta présentation en trois phrases : ton prénom, ta nationalité et ta ville.',
    },
    {
      id: 'salutations-faire-connaissance',
      titre: 'Faire connaissance',
      objectif: "Demander à quelqu'un d'où il vient, où il habite et ce qu'il fait.",
      contexte:
        "« Mnin » (d'où) est commun à la darija et au tounsi. Pour « où », le Maroc dit « fin » et la Tunisie « win ». En MSA, les questions s'accordent avec la personne à qui l'on parle.",
      expressions: [
        {
          sens: "Tu viens d'où ?",
          formes: {
            msa: 'min ayna anta ? (à un homme) / min ayna anti ? (à une femme)',
            darija: 'mnin nta ? (à un homme) / mnin nti ? (à une femme)',
            tounsi: 'mnin enti ?',
          },
        },
        {
          sens: 'Je viens de France',
          formes: { msa: 'ana min faransa', darija: 'ana men fransa', tounsi: 'ena men fransa' },
        },
        {
          sens: 'Tu habites où ?',
          formes: {
            msa: 'ayna taskoun ? (à un homme) / ayna taskounin ? (à une femme)',
            darija: 'fin saken ? (à un homme) / fin sakna ? (à une femme)',
            tounsi: 'win toskon ?',
          },
        },
        {
          sens: "Qu'est-ce que tu fais dans la vie ?",
          formes: { msa: 'ma 3amalouk ?', darija: 'ach kat5dem ?', tounsi: 'chnowa ta5dem ?' },
        },
      ],
      supplementaires: [
        {
          sens: 'Je travaille dans …',
          formes: { msa: 'a3malou fi …', darija: 'kan5dem f …', tounsi: 'na5dem fi …' },
        },
        {
          sens: 'Je suis étudiant(e)',
          formes: {
            msa: 'ana 6alib (homme) / ana 6aliba (femme)',
            darija: 'ana kan9ra',
            tounsi: 'ena na9ra',
          },
        },
        {
          sens: 'Moi aussi',
          formes: { msa: 'wa ana aydan', darija: '7ta ana', tounsi: 'ena zeda' },
        },
      ],
      defiOral:
        "Pose trois questions à quelqu'un que tu rencontres : d'où il vient, où il habite, ce qu'il fait. Puis réponds-y pour toi.",
      aRetenir:
        "« Mnin » veut dire « d'où » en darija comme en tounsi. Pour « où », le Maroc dit « fin » et la Tunisie « win ».",
      aToiDeJouer: 'Écris un mini-dialogue de rencontre : deux questions et leurs deux réponses.',
    },
  ],
};
