import type { Replique } from './types';

// Mini-dialogue commun à toutes les séances en version 1 (fonctionnel §3.3).
// Premier jet, non relu par des locuteurs natifs.
export const miniDialogue: readonly Replique[] = [
  {
    locuteur: 'A',
    expression: {
      sens: 'Bonjour, ça va ?',
      formes: {
        msa: 'as-salamou 3alaykoum, kayfa 7alouk ?',
        darija: 'salam 3likoum, labas ?',
        tounsi: '3aslema, labes ?',
      },
    },
  },
  {
    locuteur: 'B',
    expression: {
      sens: 'Ça va, Dieu merci. Et toi ?',
      formes: {
        msa: 'bi5ayr, al-7amdou lillah. wa anta ?',
        darija: 'labas, l-7amdoullah. w nta ?',
        tounsi: 'labes, el-7amdoullah. w enti ?',
      },
    },
  },
  {
    locuteur: 'A',
    expression: {
      sens: 'Ça va bien, merci.',
      formes: {
        msa: 'ana bi5ayr, choukran.',
        darija: 'ana bi5ir, choukran.',
        tounsi: 'ena labes, ya3tik sa77a.',
      },
    },
  },
];
