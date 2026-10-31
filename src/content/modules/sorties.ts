import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const sorties: Module = {
  id: 'sorties',
  icone: '🎉',
  titre: 'Amis et sorties',
  description: 'Proposer, accepter, refuser, fixer un rendez-vous',
  reluParNatif: false,
  seances: [
    {
      id: 'sorties-proposer',
      titre: 'Proposer une sortie',
      objectif: "Inviter quelqu'un à sortir, boire un café ou manger.",
      contexte:
        'Pour proposer, la darija dit « bghiti… ? » (tu veux… ?) et le tounsi « t7ebb… ? ». Pour entraîner les autres : « yallah ! » au Maroc, « ayya ! » en Tunisie.',
      expressions: [
        {
          sens: 'Tu veux venir avec nous ?',
          formes: {
            msa: 'hal tourid an ta2ti ma3ana ? (à un homme) / hal touridina an ta2ti ma3ana ? (à une femme)',
            darija: 'bghiti tji m3ana ?',
            tounsi: 't7ebb tji m3ana ?',
          },
          arabe: {
            msa: 'هل تريد أن تأتي معنا؟ / هل تريدين أن تأتي معنا؟',
            darija: 'بغيتي تجي معانا؟',
            tounsi: 'تحب تجي معانا؟',
          },
        },
        {
          sens: 'On va boire un café ?',
          formes: {
            msa: 'hal nachrabou 9ahwa ?',
            darija: 'nchorbo chi 9ahwa ?',
            tounsi: 'nochorbou 9ahwa ?',
          },
          arabe: { msa: 'هل نشرب قهوة؟', darija: 'نشربو شي قهوة؟', tounsi: 'نشربو قهوة؟' },
        },
        {
          sens: 'Allons-y !',
          formes: {
            msa: 'hayya bina !',
            darija: 'yallah !',
            tounsi: 'ayya !',
          },
          arabe: { msa: 'هيا بنا!', darija: 'يالله!', tounsi: 'أيا!' },
        },
        {
          sens: 'Ce soir',
          formes: {
            msa: 'hatha al-masa2',
            darija: 'had l-3chiya',
            tounsi: 'el-lila',
          },
          arabe: { msa: 'هذا المساء', darija: 'هاد العشية', tounsi: 'الليلة' },
        },
      ],
      supplementaires: [
        {
          sens: 'On mange ensemble ?',
          formes: {
            msa: 'hal na2koulou ma3an ?',
            darija: 'nakloo m3a ba3d ?',
            tounsi: 'nekloo m3a b3adhna ?',
          },
          arabe: { msa: 'هل نأكل معا؟', darija: 'ناكلو مع بعض؟', tounsi: 'ناكلو مع بعضنا؟' },
        },
        {
          sens: 'Tu es libre demain ?',
          formes: {
            msa: 'hal anta farigh ghadan ? (à un homme) / hal anti fargha ghadan ? (à une femme)',
            darija: 'wach nta fadi ghedda ? (à un homme) / wach nti fadya ghedda ? (à une femme)',
            tounsi: 'enti fadhi ghodwa ?',
          },
          arabe: {
            msa: 'هل أنت فارغ غدا؟ / هل أنت فارغة غدا؟',
            darija: 'واش نتا فاضي غدا؟ / واش نتي فاضية غدا؟',
            tounsi: 'انتي فاضي غدوة؟',
          },
        },
        {
          sens: 'Le week-end prochain',
          formes: {
            msa: 'fi nihayat al-ousbou3 al-9adim',
            darija: 'l-wikand jay',
            tounsi: 'el-weekend ejjey',
          },
          arabe: {
            msa: 'في نهاية الأسبوع القادم',
            darija: 'الويكاند الجاي',
            tounsi: 'الويكاند الجاي',
          },
        },
      ],
      defiOral: "Propose à un ami de sortir ce soir : d'abord un café, puis manger ensemble.",
      aRetenir:
        'Tu veux… ? : « bghiti… ? » (darija), « t7ebb… ? » (tounsi). Allez ! : « yallah » (darija), « ayya » (tounsi).',
      aToiDeJouer: 'Écris un message pour proposer une sortie à un ami : quoi, et quand.',
    },
    {
      id: 'sorties-repondre',
      titre: 'Accepter ou refuser',
      objectif: 'Dire oui avec plaisir, ou refuser poliment.',
      contexte:
        'On refuse avec douceur, souvent avec une excuse et « merra o5ra, inchallah » (une autre fois, si Dieu le veut). Un refus sec passe mal.',
      expressions: [
        {
          sens: 'Avec plaisir',
          formes: {
            msa: 'bi-koulli srour',
            darija: 'b koll ferha',
            tounsi: 'b koll far7a',
          },
          arabe: { msa: 'بكل سرور', darija: 'بكل فرحة', tounsi: 'بكل فرحة' },
        },
        {
          sens: 'Désolé(e), je ne peux pas',
          formes: {
            msa: 'ana asif, la asta6i3 (homme) / ana asifa, la asta6i3 (femme)',
            darija: 'sme7 liya, ma n9derch',
            tounsi: 'samahni, ma najjamch',
          },
          arabe: {
            msa: 'أنا آسف، لا أستطيع / أنا آسفة، لا أستطيع',
            darija: 'سمح ليا، ما نقدرش',
            tounsi: 'سامحني، ما نجمش',
          },
        },
        {
          sens: 'Une autre fois, si Dieu le veut',
          formes: {
            msa: 'marratan o5ra, in cha2a allah',
            darija: 'merra o5ra, inchallah',
            tounsi: 'marra o5ra, inchallah',
          },
          arabe: {
            msa: 'مرة أخرى، إن شاء الله',
            darija: 'مرة أخرى، إن شاء الله',
            tounsi: 'مرة أخرى، إن شاء الله',
          },
        },
        {
          sens: 'Pourquoi pas !',
          formes: {
            msa: 'wa lima la !',
            darija: '3lach la !',
            tounsi: '3lech le !',
          },
          arabe: { msa: 'ولم لا!', darija: 'علاش لا!', tounsi: 'علاش لا!' },
        },
      ],
      supplementaires: [
        {
          sens: "J'ai un empêchement",
          formes: {
            msa: 'ladayya mani3',
            darija: '3ndi chi 7aja',
            tounsi: '3andi chghol',
          },
          arabe: { msa: 'لدي مانع', darija: 'عندي شي حاجة', tounsi: 'عندي شغل' },
        },
        {
          sens: 'Bonne idée !',
          formes: {
            msa: 'fikra jayyida !',
            darija: 'fikra zwina !',
            tounsi: 'fekra behya !',
          },
          arabe: { msa: 'فكرة جيدة!', darija: 'فكرة زوينة!', tounsi: 'فكرة بهية!' },
        },
        {
          sens: 'Je ne sais pas encore',
          formes: {
            msa: 'la a3rifou ba3d',
            darija: 'ma3reftch mazal',
            tounsi: 'ma na3rafch mazelt',
          },
          arabe: { msa: 'لا أعرف بعد', darija: 'ما عرفتش مازال', tounsi: 'ما نعرفش مازلت' },
        },
      ],
      defiOral:
        'Un ami te propose deux sorties : accepte la première avec plaisir, refuse poliment la seconde.',
      aRetenir:
        'Je ne peux pas : « ma n9derch » (darija), « ma najjamch » (tounsi). Une autre fois : « merra o5ra, inchallah ».',
      aToiDeJouer: 'Écris une réponse pour refuser poliment une invitation, avec une excuse.',
    },
    {
      id: 'sorties-rendez-vous',
      titre: 'Fixer un rendez-vous',
      objectif: "Se mettre d'accord sur une heure et un lieu.",
      contexte:
        "Pour l'heure, la darija et le tounsi disent « m3a » (vers) : « m3a t-tmnya » (vers huit heures). Où : « fin » au Maroc, « win » en Tunisie.",
      expressions: [
        {
          sens: 'À quelle heure ?',
          formes: {
            msa: 'fi ayy sa3a ?',
            darija: 'm3a ach7al ?',
            tounsi: 'm3a 9addech ?',
          },
          arabe: { msa: 'في أي ساعة؟', darija: 'مع أشحال؟', tounsi: 'مع قداش؟' },
        },
        {
          sens: 'On se retrouve où ?',
          formes: {
            msa: 'ayna nalta9i ?',
            darija: 'fin ntla9aw ?',
            tounsi: 'win net9ablou ?',
          },
          arabe: { msa: 'أين نلتقي؟', darija: 'فين نتلاقاو؟', tounsi: 'وين نتقابلو؟' },
        },
        {
          sens: 'Devant le café',
          formes: {
            msa: 'amama al-ma9ha',
            darija: '9eddam l-9ahwa',
            tounsi: '9oddem el-9ahwa',
          },
          arabe: { msa: 'أمام المقهى', darija: 'قدام القهوة', tounsi: 'قدام القهوة' },
        },
        {
          sens: "À tout à l'heure",
          formes: {
            msa: 'ila al-li9a2 9ariban',
            darija: 'nchoufek men b3d',
            tounsi: 'nchoufek ba3d',
          },
          arabe: { msa: 'إلى اللقاء قريبا', darija: 'نشوفك من بعد', tounsi: 'نشوفك بعد' },
        },
      ],
      supplementaires: [
        {
          sens: 'Vers huit heures',
          formes: {
            msa: 'nahwa as-sa3a ath-thamina',
            darija: 'm3a t-tmnya',
            tounsi: 'm3a ethmanya',
          },
          arabe: { msa: 'نحو الساعة الثامنة', darija: 'مع التمنية', tounsi: 'مع الثمنية' },
        },
        {
          sens: "Je t'envoie l'adresse",
          formes: {
            msa: 'sa-oursilou laka al-3inwan',
            darija: 'ghadi nsifet lik l-adresse',
            tounsi: 'taw nab3athlek l-adresse',
          },
          arabe: {
            msa: 'سأرسل لك العنوان',
            darija: 'غادي نصيفط ليك لادريس',
            tounsi: 'توا نبعثلك لادريس',
          },
        },
        {
          sens: 'Ne sois pas en retard !',
          formes: {
            msa: 'la tata2a55ar ! (à un homme) / la tata2a55ari ! (à une femme)',
            darija: 'ma t3a66elch !',
            tounsi: 'ma tet2a55arch !',
          },
          arabe: { msa: 'لا تتأخر! / لا تتأخري!', darija: 'ما تعطلش!', tounsi: 'ما تتأخرش!' },
        },
      ],
      defiOral:
        "Fixe un rendez-vous avec un ami : l'heure, le lieu, et rappelle-lui de ne pas être en retard.",
      aRetenir: 'Où : « fin » (darija), « win » (tounsi). Vers + heure : « m3a » dans les deux.',
      aToiDeJouer: 'Écris un message pour fixer un rendez-vous : jour, heure et lieu.',
    },
  ],
};
