import type { Expression, Seance } from '@/content/types';

import { corriger } from './correcteur';

function expression(sens: string, formes: Expression['formes']): Expression {
  return { sens, formes };
}

const seance: Seance = {
  id: 's',
  titre: '',
  objectif: '',
  contexte: '',
  expressions: [
    {
      ...expression('Bonjour', {
        msa: 'as-salamou 3alaykoum',
        darija: 'salam 3likoum',
        tounsi: '3aslema',
      }),
      arabe: { msa: 'السلام عليكم', darija: 'سلام عليكم', tounsi: 'عسلامة' },
    },
    expression('Ça va ?', { msa: 'kayfa 7alouk ?', darija: 'labas ?', tounsi: 'labes ?' }),
    expression('Et toi ?', {
      msa: 'wa anta ? (à un homme) / wa anti ? (à une femme)',
      darija: 'w nta ? (à un homme) / w nti ? (à une femme)',
      tounsi: 'w enti ?',
    }),
    expression('Merci', { msa: 'choukran', darija: 'choukran', tounsi: 'ya3tik sa77a' }),
  ],
  supplementaires: [
    expression('Oui', { msa: 'na3am', darija: 'iyyeh', tounsi: 'ey' }),
    expression('Au revoir', { msa: 'ma3a as-salama', darija: 'bslama', tounsi: 'bislema' }),
    // 7e expression : hors des 6 comparées.
    expression('Bonne nuit', { msa: null, darija: 'tesba7 3la 5ir', tounsi: 'tosbo7 3la 5ir' }),
  ],
  defiOral: '',
  aRetenir: '',
  aToiDeJouer: '',
};

describe('corriger (F10, fonctionnel §6.2)', () => {
  it('demande un texte si la réponse est vide', () => {
    expect(corriger(seance, '   ')).toEqual({ statut: 'vide' });
  });

  it('reconnaît les expressions et leur variante, malgré majuscules et ponctuation', () => {
    const resultat = corriger(seance, 'Salam 3likoum ! Labes ? W enti ?');
    expect(resultat).toMatchObject({
      statut: 'analyse',
      reconnues: [
        { expression: { sens: 'Bonjour' }, variante: 'darija' },
        { expression: { sens: 'Ça va ?' }, variante: 'tounsi' },
        { expression: { sens: 'Et toi ?' }, variante: 'tounsi' },
      ],
    });
  });

  it('reconnaît chaque alternative et ignore les parenthèses', () => {
    const resultat = corriger(seance, 'w nti, labas');
    expect(resultat).toMatchObject({
      reconnues: [
        { expression: { sens: 'Ça va ?' }, variante: 'darija' },
        { expression: { sens: 'Et toi ?' }, variante: 'darija' },
      ],
    });
  });

  it('suggère jusqu’à 3 expressions non utilisées, dans l’ordre', () => {
    const resultat = corriger(seance, 'salam 3likoum');
    expect(resultat.statut === 'analyse' && resultat.suggestions.map((e) => e.sens)).toEqual([
      'Ça va ?',
      'Et toi ?',
      'Merci',
    ]);
  });

  it('ne compare que les 6 premières expressions (base puis supplémentaires)', () => {
    const resultat = corriger(seance, 'tesba7 3la 5ir, bslama');
    expect(resultat).toMatchObject({
      reconnues: [{ expression: { sens: 'Au revoir' }, variante: 'darija' }],
    });
  });

  it('ignore les formes de moins de 3 caractères', () => {
    // « ey » (oui en tounsi) est trop court pour être reconnu.
    expect(corriger(seance, 'ey')).toMatchObject({ reconnues: [] });
  });

  it('ne reconnaît une forme qu’en mots entiers', () => {
    expect(corriger(seance, 'labassss')).toMatchObject({ reconnues: [] });
  });

  it('reconnaît une réponse en écriture arabe, avec ou sans voyelles et hamza', () => {
    expect(corriger(seance, 'عَسلامة! السلام عليكم')).toMatchObject({
      reconnues: [{ expression: { sens: 'Bonjour' }, variante: 'msa' }],
    });
    expect(corriger(seance, 'عسلامه')).toMatchObject({
      reconnues: [{ expression: { sens: 'Bonjour' }, variante: 'tounsi' }],
    });
  });
});
