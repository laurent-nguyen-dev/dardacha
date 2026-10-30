import { parcours } from './parcours';
import { validerParcours } from './validation';

// Contrôle du vrai contenu : un module mal formé fait échouer la CI, avec
// la liste des erreurs en français.
describe('parcours', () => {
  it('respecte les règles de structure du contenu', () => {
    expect(validerParcours(parcours)).toEqual([]);
  });
});
