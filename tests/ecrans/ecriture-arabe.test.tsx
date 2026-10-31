import { renderRouter, screen } from 'expo-router/testing-library';

// Parcours de test : une expression avec écriture arabe partielle (MSA et
// tounsi, pas darija), pour vérifier l'affichage indépendamment du contenu
// réel. jest.mock est remonté avant les imports : les données sont donc
// construites dans la fabrique elle-même.
jest.mock('@/content/parcours', () => {
  const bonjour = {
    sens: 'Bonjour',
    formes: { msa: 'as-salamou 3alaykoum', darija: 'salam', tounsi: '3aslema' },
    arabe: { msa: 'السلام عليكم', tounsi: 'عسلامة' },
  };
  const seance = {
    id: 'test-seance',
    titre: 'Séance de test',
    objectif: 'o',
    contexte: 'c',
    expressions: [bonjour],
    supplementaires: [bonjour],
    defiOral: 'd',
    aRetenir: 'r',
    aToiDeJouer: 't',
  };
  return {
    parcours: [
      {
        id: 'test',
        icone: '',
        titre: 'Test',
        description: '',
        reluParNatif: false,
        seances: [seance],
      },
    ],
  };
});

describe('Écriture arabe (fonctionnel §3.7)', () => {
  it('s’affiche sous la transcription latine, de droite à gauche, quand elle existe', async () => {
    await renderRouter('./src/app', { initialUrl: '/seance/test-seance' });

    const arabes = screen.getAllByText('السلام عليكم');
    // Expressions supplémentaires et tableau de vocabulaire au moins.
    expect(arabes.length).toBeGreaterThanOrEqual(2);
    expect(arabes[0]).toHaveStyle({ writingDirection: 'rtl' });
    expect(screen.getAllByText('عسلامة').length).toBeGreaterThanOrEqual(2);
    // La darija n'a pas d'écriture arabe : seule la transcription latine s'affiche.
    expect(screen.getAllByText('salam').length).toBeGreaterThanOrEqual(2);
  });
});
