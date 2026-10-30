import { ecrireProgression, lireProgression } from './progression';

describe('lireProgression', () => {
  it('relit ce qui a été écrit', () => {
    const terminees = new Set(['salutations-bonjour', 'salutations-se-presenter']);
    expect(lireProgression(ecrireProgression(terminees))).toEqual(terminees);
  });

  it('renvoie un ensemble vide sans donnée enregistrée', () => {
    expect(lireProgression(null)).toEqual(new Set());
  });

  it('renvoie un ensemble vide pour une donnée illisible, sans planter', () => {
    expect(lireProgression('{pas du json')).toEqual(new Set());
    expect(lireProgression('{"a": 1}')).toEqual(new Set());
  });

  it('ignore les éléments qui ne sont pas des identifiants', () => {
    expect(lireProgression('["a", 3, null, "b"]')).toEqual(new Set(['a', 'b']));
  });
});
