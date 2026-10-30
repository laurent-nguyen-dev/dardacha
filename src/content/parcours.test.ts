import { miniDialogue } from './dialogue';
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
});
