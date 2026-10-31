import { renderRouter, screen } from 'expo-router/testing-library';

import { miniDialogue } from '@/content/dialogue';

// Parcours de test : une séance avec son propre dialogue, une sans
// (fonctionnel §3.8). jest.mock est remonté avant les imports : les données
// sont construites dans la fabrique.
jest.mock('@/content/parcours', () => {
  const expression = {
    sens: 'Bonjour',
    formes: { msa: 'marhaban', darija: 'salam', tounsi: '3aslema' },
  };
  const base = {
    titre: 'Séance',
    objectif: 'o',
    contexte: 'c',
    expressions: [expression],
    supplementaires: [expression],
    defiOral: 'd',
    aRetenir: 'r',
    aToiDeJouer: 't',
  };
  const replique = (locuteur: string, sens: string, darija: string) => ({
    locuteur,
    expression: {
      sens,
      formes: { msa: `${darija}-msa`, darija, tounsi: `${darija}-tounsi` },
      arabe: { msa: 'مرحبا', darija: 'سلام', tounsi: 'عسلامة' },
    },
  });
  return {
    parcours: [
      {
        id: 'test',
        icone: '',
        titre: 'Test',
        description: '',
        reluParNatif: false,
        seances: [
          {
            ...base,
            id: 'avec-dialogue',
            dialogue: [
              replique('A', 'On se voit ce soir ?', 'nchoufek had l-3chiya ?'),
              replique('B', 'Oui, avec plaisir', 'iyyeh, b koll ferha'),
              replique('A', 'À ce soir', 'nchoufek f l-3chiya'),
            ],
          },
          { ...base, id: 'sans-dialogue' },
        ],
      },
    ],
  };
});

describe('Mini-dialogue de séance (fonctionnel §3.8)', () => {
  it('affiche le dialogue propre à la séance', async () => {
    await renderRouter('./src/app', { initialUrl: '/seance/avec-dialogue' });
    expect(screen.getByText('On se voit ce soir ?')).toBeVisible();
    expect(screen.getByText('nchoufek had l-3chiya ?')).toBeVisible();
    expect(screen.queryByText(miniDialogue[0].expression.sens)).toBeNull();
  });

  it('affiche le dialogue commun à une séance sans dialogue propre', async () => {
    await renderRouter('./src/app', { initialUrl: '/seance/sans-dialogue' });
    expect(screen.getByText(miniDialogue[0].expression.sens)).toBeVisible();
  });
});
