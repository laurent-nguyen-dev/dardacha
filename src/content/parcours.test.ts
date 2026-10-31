import { miniDialogue } from './dialogue';
import { memo } from './memo';
import { parcours } from './parcours';
import { VARIANTES } from './types';
import { validerParcours } from './validation';

// Contrôle du vrai contenu : un module mal formé fait échouer la CI, avec
// la liste des erreurs en français.
describe('parcours', () => {
  it('respecte les règles de structure du contenu', () => {
    expect(validerParcours(parcours)).toEqual([]);
  });

  it('a un mini-dialogue de 3 répliques, complet dans les trois variantes', () => {
    expect(miniDialogue).toHaveLength(3);
    for (const { expression } of miniDialogue) {
      for (const variante of VARIANTES) {
        expect(expression.formes[variante]?.trim()).toBeTruthy();
      }
    }
  });

  it('a un mémo des chiffres 2, 3, 5, 6, 7, 9, chacun avec des exemples en écriture arabe', () => {
    expect(memo.map((c) => c.chiffre)).toEqual(['2', '3', '5', '6', '7', '9']);
    for (const chiffre of memo) {
      expect(chiffre.lettre).toMatch(/^\p{Script=Arabic}$/u);
      expect(chiffre.exemples.length).toBeGreaterThan(0);
      for (const exemple of chiffre.exemples) {
        expect(exemple.transcription).toContain(chiffre.chiffre);
        expect(exemple.arabe).toMatch(/^\p{Script=Arabic}+$/u);
        expect(exemple.sens.trim()).toBeTruthy();
      }
    }
  });
});
