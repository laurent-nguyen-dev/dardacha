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
          arabe: { msa: 'السلام عليكم', darija: 'سلام عليكم', tounsi: 'سلام عليكم' },
        },
        {
          sens: 'Bonjour (réponse)',
          formes: {
            msa: 'wa 3alaykoum as-salam',
            darija: 'wa 3likoum salam',
            tounsi: 'w 3likoum salam',
          },
          arabe: { msa: 'وعليكم السلام', darija: 'وعليكم السلام', tounsi: 'وعليكم السلام' },
        },
        {
          sens: 'Bonjour (le matin)',
          formes: { msa: 'saba7 al-5ayr', darija: 'sba7 l-5ir', tounsi: 'sba7 el-5ir' },
          arabe: { msa: 'صباح الخير', darija: 'صباح الخير', tounsi: 'صباح الخير' },
        },
        {
          sens: 'Au revoir',
          formes: { msa: 'ma3a as-salama', darija: 'bslama', tounsi: 'bislema' },
          arabe: { msa: 'مع السلامة', darija: 'بسلامة', tounsi: 'بسلامة' },
        },
      ],
      supplementaires: [
        {
          sens: 'Bonsoir',
          formes: { msa: 'masa2 al-5ayr', darija: 'msa l-5ir', tounsi: 'msa el-5ir' },
          arabe: { msa: 'مساء الخير', darija: 'مسا الخير', tounsi: 'مسا الخير' },
        },
        {
          sens: 'Salut (entre proches)',
          formes: { msa: 'mar7aban', darija: 'salam', tounsi: '3aslema' },
          arabe: { msa: 'مرحبا', darija: 'سلام', tounsi: 'عسلامة' },
        },
        {
          sens: 'Bonne nuit',
          formes: {
            msa: 'tousbi7 3ala 5ayr (à un homme) / tousbi7ina 3ala 5ayr (à une femme)',
            darija: 'tesba7 3la 5ir',
            tounsi: 'tosbo7 3la 5ir',
          },
          arabe: {
            msa: 'تصبح على خير / تصبحين على خير',
            darija: 'تصبح على خير',
            tounsi: 'تصبح على خير',
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
          arabe: { msa: 'اسمي …', darija: 'سميتي …', tounsi: 'اسمي …' },
        },
        {
          sens: "Comment tu t'appelles ?",
          formes: {
            msa: 'ma ismouka ? (à un homme) / ma ismouki ? (à une femme)',
            darija: 'chnou smitek ?',
            tounsi: 'chesmek ?',
          },
          arabe: { msa: 'ما اسمك؟ / ما اسمك؟', darija: 'شنو سميتك؟', tounsi: 'شسمك؟' },
        },
        {
          sens: 'Enchanté(e)',
          formes: { msa: 'tacharrafna', darija: 'mtcharfin', tounsi: 'mitcharfin' },
          arabe: { msa: 'تشرفنا', darija: 'متشرفين', tounsi: 'متشرفين' },
        },
        {
          sens: 'Je suis français(e)',
          formes: {
            msa: 'ana faransi (homme) / ana faransiya (femme)',
            darija: 'ana fransawi (homme) / ana fransawiya (femme)',
            tounsi: 'ena fransawi (homme) / ena fransawiya (femme)',
          },
          arabe: {
            msa: 'أنا فرنسي / أنا فرنسية',
            darija: 'أنا فرنساوي / أنا فرنساوية',
            tounsi: 'أنا فرنساوي / أنا فرنساوية',
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
          arabe: { msa: 'أسكن في باريس', darija: 'كنسكن ف باريس', tounsi: 'نسكن في باريس' },
        },
        {
          sens: 'Et toi ?',
          formes: {
            msa: 'wa anta ? (à un homme) / wa anti ? (à une femme)',
            darija: 'w nta ? (à un homme) / w nti ? (à une femme)',
            tounsi: 'w enti ?',
          },
          arabe: { msa: 'وأنت؟ / وأنت؟', darija: 'ونتا؟ / ونتي؟', tounsi: 'وانتي؟' },
        },
        {
          sens: 'Je parle un peu arabe',
          formes: {
            msa: 'atakallamou al-3arabiya 9alilan',
            darija: 'kanhder chwiya l-3arbiya',
            tounsi: 'nahki chwaya bel-3arbi',
          },
          arabe: {
            msa: 'أتكلم العربية قليلا',
            darija: 'كنهضر شوية العربية',
            tounsi: 'نحكي شوية بالعربي',
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
          arabe: {
            msa: 'من أين أنت؟ / من أين أنت؟',
            darija: 'منين نتا؟ / منين نتي؟',
            tounsi: 'منين انتي؟',
          },
        },
        {
          sens: 'Je viens de France',
          formes: { msa: 'ana min faransa', darija: 'ana men fransa', tounsi: 'ena men fransa' },
          arabe: { msa: 'أنا من فرنسا', darija: 'أنا من فرنسا', tounsi: 'أنا من فرنسا' },
        },
        {
          sens: 'Tu habites où ?',
          formes: {
            msa: 'ayna taskoun ? (à un homme) / ayna taskounin ? (à une femme)',
            darija: 'fin saken ? (à un homme) / fin sakna ? (à une femme)',
            tounsi: 'win toskon ?',
          },
          arabe: {
            msa: 'أين تسكن؟ / أين تسكنين؟',
            darija: 'فين ساكن؟ / فين ساكنة؟',
            tounsi: 'وين تسكن؟',
          },
        },
        {
          sens: "Qu'est-ce que tu fais dans la vie ?",
          formes: { msa: 'ma 3amalouk ?', darija: 'ach kat5dem ?', tounsi: 'chnowa ta5dem ?' },
          arabe: { msa: 'ما عملك؟', darija: 'أش كتخدم؟', tounsi: 'شنوة تخدم؟' },
        },
      ],
      supplementaires: [
        {
          sens: 'Je travaille dans …',
          formes: { msa: 'a3malou fi …', darija: 'kan5dem f …', tounsi: 'na5dem fi …' },
          arabe: { msa: 'أعمل في …', darija: 'كنخدم ف …', tounsi: 'نخدم في …' },
        },
        {
          sens: 'Je suis étudiant(e)',
          formes: {
            msa: 'ana 6alib (homme) / ana 6aliba (femme)',
            darija: 'ana kan9ra',
            tounsi: 'ena na9ra',
          },
          arabe: { msa: 'أنا طالب / أنا طالبة', darija: 'أنا كنقرا', tounsi: 'أنا نقرا' },
        },
        {
          sens: 'Moi aussi',
          formes: { msa: 'wa ana aydan', darija: '7ta ana', tounsi: 'ena zeda' },
          arabe: { msa: 'وأنا أيضا', darija: 'حتى أنا', tounsi: 'أنا زادة' },
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
