import type { Expression, Module, Seance } from './types';
import { validerParcours } from './validation';

// Fabriques de contenu minimal valide, que chaque test abîme d'une façon.
function expression(sens: string): Expression {
  return {
    sens,
    formes: { msa: `${sens} msa`, darija: `${sens} darija`, tounsi: `${sens} tounsi` },
  };
}

function seance(id: string): Seance {
  return {
    id,
    titre: 'Titre',
    objectif: 'Objectif',
    contexte: 'Contexte',
    expressions: [expression('a'), expression('b'), expression('c')],
    supplementaires: [expression('d'), expression('e'), expression('f')],
    defiOral: 'Défi',
    aRetenir: 'À retenir',
    aToiDeJouer: 'À toi',
  };
}

function module(id: string, seances: Seance[] = [seance(`${id}-un`)]): Module {
  return {
    id,
    icone: '👋',
    titre: 'Module',
    description: 'Description',
    reluParNatif: false,
    seances,
  };
}

describe('validerParcours', () => {
  it('accepte un parcours valide', () => {
    expect(validerParcours([module('salutations'), module('nouvelles')])).toEqual([]);
  });

  it('refuse un parcours vide', () => {
    expect(validerParcours([])).toEqual(['Le parcours ne contient aucun module.']);
  });

  it('refuse un module sans séance', () => {
    expect(validerParcours([module('vide', [])])).toEqual(['Module « vide » : aucune séance.']);
  });

  it('refuse un identifiant mal formé', () => {
    const erreurs = validerParcours([module('Module 1', [seance('ok-seance')])]);
    expect(erreurs).toEqual([
      'Identifiant « Module 1 » invalide : minuscules, chiffres et tirets uniquement.',
    ]);
  });

  it('refuse un identifiant utilisé deux fois, même entre module et séance', () => {
    const erreurs = validerParcours([
      module('salutations', [seance('bonjour')]),
      module('nouvelles', [seance('bonjour')]),
      module('bonjour', [seance('autre')]),
    ]);
    expect(erreurs).toEqual([
      'Identifiant « bonjour » utilisé plusieurs fois.',
      'Identifiant « bonjour » utilisé plusieurs fois.',
    ]);
  });

  it("refuse trop peu ou trop d'expressions de base", () => {
    const tropPeu = seance('trop-peu');
    tropPeu.expressions = tropPeu.expressions.slice(0, 2);
    const tropDe = seance('trop-de');
    tropDe.expressions = ['a', 'b', 'c', 'd', 'e', 'f'].map(expression);
    expect(validerParcours([module('m', [tropPeu, tropDe])])).toEqual([
      'Séance « trop-peu » : 2 expressions de base (attendu : 3 à 5).',
      'Séance « trop-de » : 6 expressions de base (attendu : 3 à 5).',
    ]);
  });

  it("refuse un nombre d'expressions supplémentaires différent de 3", () => {
    const s = seance('s');
    s.supplementaires = s.supplementaires.slice(0, 2);
    expect(validerParcours([module('m', [s])])).toEqual([
      'Séance « s » : 2 expressions supplémentaires (attendu : 3).',
    ]);
  });

  it('refuse un texte obligatoire vide', () => {
    const s = seance('s');
    s.objectif = '  ';
    expect(validerParcours([module('m', [s])])).toEqual(['Séance « s » : « objectif » est vide.']);
  });

  it('refuse une expression sans aucune forme', () => {
    const s = seance('s');
    s.supplementaires[0] = { sens: 'rien', formes: { msa: null, darija: null, tounsi: null } };
    expect(validerParcours([module('m', [s])])).toEqual([
      "Séance « s » : l'expression « rien » n'a aucune forme.",
    ]);
  });

  it('exige les trois variantes, sans chiffre initial, pour les 2 premières expressions de base', () => {
    const s = seance('s');
    s.expressions[0] = { sens: 'trois', formes: { msa: null, darija: '3', tounsi: 'tlata' } };
    s.expressions[1] = { sens: 'quatre', formes: { msa: 'arba3a', darija: '4', tounsi: 'arb3a' } };
    // La 3e expression peut avoir une variante vide.
    s.expressions[2] = { sens: 'cinq', formes: { msa: null, darija: 'khamsa', tounsi: 'khamsa' } };
    expect(validerParcours([module('m', [s])])).toEqual([
      "Séance « s » : l'expression « trois » (reprise en révision) doit avoir une forme en msa.",
      "Séance « s » : l'expression « trois » (reprise en révision) ne doit pas commencer par un chiffre en darija.",
      "Séance « s » : l'expression « quatre » (reprise en révision) ne doit pas commencer par un chiffre en darija.",
    ]);
  });

  describe('écriture arabe (fonctionnel §3.7)', () => {
    function avecArabe(arabe: Expression['arabe'], formes?: Partial<Expression['formes']>) {
      const s = seance('s');
      s.supplementaires[0] = {
        sens: 'au revoir',
        formes: { msa: 'ma3a as-salama', darija: 'bslama', tounsi: 'bislema', ...formes },
        arabe,
      };
      return validerParcours([module('m', [s])]);
    }

    it('accepte une écriture arabe valide, complète ou partielle', () => {
      expect(avecArabe({ msa: 'مع السلامة', darija: 'بسلامة', tounsi: 'بسلامة' })).toEqual([]);
      expect(avecArabe({ darija: 'بسلامة' })).toEqual([]);
      expect(avecArabe({ msa: 'ما اسمك؟ / من أنت…' }, { msa: 'a / b' })).toEqual([]);
    });

    it('refuse une écriture arabe sans forme latine dans la variante', () => {
      expect(avecArabe({ msa: 'مع السلامة' }, { msa: null })).toEqual([
        "Séance « s » : l'expression « au revoir » a une écriture arabe en msa sans forme latine.",
      ]);
    });

    it('refuse des lettres latines ou des parenthèses dans l’écriture arabe', () => {
      expect(avecArabe({ darija: 'bslama' })).toEqual([
        "Séance « s » : l'écriture arabe de « au revoir » en darija contient autre chose que des lettres arabes.",
      ]);
      expect(avecArabe({ darija: 'بسلامة (للرجل)' })).toEqual([
        "Séance « s » : l'écriture arabe de « au revoir » en darija contient autre chose que des lettres arabes.",
      ]);
    });

    it('exige autant d’alternatives « / » que la forme latine', () => {
      expect(avecArabe({ msa: 'ما اسمك؟' }, { msa: 'ma ismouka ? / ma ismouki ?' })).toEqual([
        "Séance « s » : l'écriture arabe de « au revoir » en msa a 1 alternative(s), la forme latine 2.",
      ]);
    });
  });
});
