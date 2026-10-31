import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const sentiments: Module = {
  id: 'sentiments',
  icone: '💛',
  titre: 'Relations et sentiments',
  description: "Parler d'amitié et d'affection avec tact",
  reluParNatif: false,
  seances: [
    {
      id: 'sentiments-amitie',
      titre: "Parler d'amitié",
      objectif: "Dire qu'on apprécie quelqu'un, présenter un ami.",
      contexte:
        '« Sa7bi / sa7bti » (mon ami / mon amie) en darija et en tounsi. Attention : selon le contexte, « sa7bti » peut aussi vouloir dire « ma copine ».',
      expressions: [
        {
          sens: "C'est mon ami(e)",
          formes: {
            msa: 'hatha sadi9i (un ami) / hathihi sadi9ati (une amie)',
            darija: 'hada sa7bi (un ami) / hadi sa7bti (une amie)',
            tounsi: 'hedha sa7bi (un ami) / hedhi sa7bti (une amie)',
          },
        },
        {
          sens: "Je t'apprécie beaucoup",
          formes: {
            msa: 'ou9addirouka kathiran (à un homme) / ou9addirouki kathiran (à une femme)',
            darija: 'kan7tremek bzaf',
            tounsi: 'n9adrek barcha',
          },
        },
        {
          sens: 'On se connaît depuis longtemps',
          formes: {
            msa: 'nata3arafou mounthou zaman',
            darija: 'kan3erfo ba3diyatna chhal hadi',
            tounsi: 'na3arfou b3adhna men zman',
          },
        },
        {
          sens: 'Tu peux compter sur moi',
          formes: {
            msa: 'youmkinouka al-i3timad 3alayya',
            darija: 't9der t3awel 3liya',
            tounsi: 'tnajjem t3awel 3liya',
          },
        },
      ],
      supplementaires: [
        {
          sens: 'Mon meilleur ami',
          formes: {
            msa: 'sadi9i al-mou9arrab',
            darija: 'a7san sa7bi',
            tounsi: 'a7sen sa7bi',
          },
        },
        {
          sens: "Tu m'as manqué",
          formes: {
            msa: 'ichta9tou ilayk',
            darija: 'twe77echtek',
            tounsi: 'twa7chtek',
          },
        },
        {
          sens: "Merci d'être là",
          formes: {
            msa: 'choukran li-woujoudik',
            darija: 'choukran 3la wjoudek',
            tounsi: 'ya3tik sa77a 3la wjoudek',
          },
        },
      ],
      defiOral: "Présente ton meilleur ami à quelqu'un, puis dis à ton ami que tu l'apprécies.",
      aRetenir:
        'Mon ami : « sa7bi » (darija et tounsi). Beaucoup : « bzaf » (darija), « barcha » (tounsi).',
      aToiDeJouer: "Écris un message à un ami pour lui dire qu'il t'a manqué.",
    },
    {
      id: 'sentiments-affection',
      titre: 'Exprimer son affection avec tact',
      objectif: 'Montrer son attachement avec pudeur, selon le contexte.',
      contexte:
        'Les déclarations directes sont rares en public. On passe volontiers par des formules affectueuses et des souhaits : « rd balek 3la rasek » (prends soin de toi).',
      expressions: [
        {
          sens: 'Je tiens à toi',
          formes: {
            msa: 'anta 3aziz 3alayya (à un homme) / anti 3aziza 3alayya (à une femme)',
            darija: 'nta 3ziz 3liya (à un homme) / nti 3ziza 3liya (à une femme)',
            tounsi: 'enti 3ziz 3liya (à un homme) / enti 3ziza 3liya (à une femme)',
          },
        },
        {
          sens: 'Je pense à toi',
          formes: {
            msa: 'oufakkirou fik',
            darija: 'kanfekker fik',
            tounsi: 'n5ammem fik',
          },
        },
        {
          sens: 'Mon cœur (affectueux)',
          formes: {
            msa: 'ya 9albi',
            darija: 'a 9albi',
            tounsi: 'ya 9albi',
          },
        },
        {
          sens: 'Prends soin de toi',
          formes: {
            msa: 'i3tani bi-nafsik',
            darija: 'rd balek 3la rasek',
            tounsi: 'rod balek 3la rou7ek',
          },
        },
      ],
      supplementaires: [
        {
          sens: "Tu es quelqu'un de bien",
          formes: {
            msa: 'anta cha5s 6ayyib (à un homme) / anti cha5sa 6ayyiba (à une femme)',
            darija: 'nta wa7ed mzyan (à un homme) / nti wa7da mzyana (à une femme)',
            tounsi: 'enti bnadem behi',
          },
        },
        {
          sens: 'Je suis fier (fière) de toi',
          formes: {
            msa: 'ana fa5our bik',
            darija: 'ana fa5our bik',
            tounsi: 'ena fa5our bik',
          },
        },
        {
          sens: 'Que Dieu te protège',
          formes: {
            msa: 'allah ya7mik',
            darija: 'lla ye7mik',
            tounsi: 'rabbi y7amik',
          },
        },
      ],
      defiOral:
        'Dis à un proche que tu penses à lui et que tu tiens à lui, avec une formule affectueuse.',
      aRetenir:
        'Prends soin de toi : « rd balek 3la rasek » (darija), « rod balek 3la rou7ek » (tounsi).',
      aToiDeJouer: 'Écris un message affectueux et pudique à un proche.',
    },
    {
      id: 'sentiments-reconforter',
      titre: "Réconforter quelqu'un",
      objectif: 'Soutenir un ami qui traverse un moment difficile.',
      contexte:
        "Pour réconforter, on souhaite que les choses s'arrangent, souvent en invoquant Dieu : « lla ysahhel » (que Dieu facilite), « rabbi m3ak » (Dieu est avec toi).",
      expressions: [
        {
          sens: 'Je suis là pour toi',
          formes: {
            msa: 'ana houna min ajlik',
            darija: 'ana hna m3ak',
            tounsi: 'ena houni m3ak',
          },
        },
        {
          sens: 'Ça va passer',
          formes: {
            msa: 'sata7assanou al-oumour',
            darija: 'ghadi ydouz kolchi',
            tounsi: 'taw t3addi',
          },
        },
        {
          sens: 'Que Dieu facilite',
          formes: {
            msa: 'allah youyassir',
            darija: 'lla ysahhel',
            tounsi: 'rabbi ysahhel',
          },
        },
        {
          sens: 'Courage !',
          formes: {
            msa: 'tachajja3 ! (à un homme) / tachajja3i ! (à une femme)',
            darija: 'sber !',
            tounsi: 'osbor !',
          },
        },
      ],
      supplementaires: [
        {
          sens: "Ce n'est pas grave",
          formes: {
            msa: 'laysa amran 5a6iran',
            darija: 'machi mouchkil',
            tounsi: 'mouch mochkla',
          },
        },
        {
          sens: 'Tu veux en parler ?',
          formes: {
            msa: 'hal tourid an nata7addath ?',
            darija: 'bghiti nhadro ?',
            tounsi: 't7ebb nahkiw ?',
          },
        },
        {
          sens: 'Je comprends',
          formes: {
            msa: 'afham',
            darija: 'fhemtek',
            tounsi: 'fhemtek',
          },
        },
      ],
      defiOral: "Un ami traverse un moment difficile : rassure-le et propose-lui d'en parler.",
      aRetenir:
        'Que Dieu facilite : « lla ysahhel » (darija), « rabbi ysahhel » (tounsi). Je suis là : « ana hna » / « ena houni ».',
      aToiDeJouer: 'Écris un message pour réconforter un ami qui a raté un examen.',
    },
  ],
};
