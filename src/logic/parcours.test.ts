import type { Module, Seance } from '@/content/types';

import {
  progressionGlobale,
  progressionModule,
  seanceSuivante,
  situerModule,
  situerSeance,
} from './parcours';

function seance(id: string): Seance {
  return {
    id,
    titre: id,
    objectif: '',
    contexte: '',
    expressions: [],
    supplementaires: [],
    defiOral: '',
    aRetenir: '',
    aToiDeJouer: '',
  };
}

function module(id: string, seances: string[]): Module {
  return {
    id,
    icone: '',
    titre: id,
    description: '',
    reluParNatif: false,
    seances: seances.map(seance),
  };
}

const a = module('a', ['a-1', 'a-2', 'a-3']);
const b = module('b', ['b-1', 'b-2']);
const parcours = [a, b];

describe('situerSeance', () => {
  it('donne le module, les numéros et le rang global', () => {
    expect(situerSeance(parcours, 'b-2')).toEqual({
      module: b,
      seance: b.seances[1],
      numeroModule: 2,
      numeroSeance: 2,
      rang: 5,
    });
  });

  it('renvoie undefined pour un identifiant inconnu', () => {
    expect(situerSeance(parcours, 'inconnue')).toBeUndefined();
  });

  it('recalcule numéros et rang quand un module est inséré avant', () => {
    const nouveau = module('nouveau', ['n-1']);
    expect(situerSeance([nouveau, a, b], 'a-1')).toMatchObject({ numeroModule: 2, rang: 2 });
  });
});

describe('situerModule', () => {
  it('donne le module et son numéro', () => {
    expect(situerModule(parcours, 'b')).toEqual({ module: b, numero: 2 });
    expect(situerModule(parcours, 'inconnu')).toBeUndefined();
  });
});

describe('seanceSuivante (F04)', () => {
  it('passe à la séance suivante du module', () => {
    expect(seanceSuivante(parcours, 'a-1')?.id).toBe('a-2');
  });

  it('passe au module suivant après la dernière séance', () => {
    expect(seanceSuivante(parcours, 'a-3')?.id).toBe('b-1');
  });

  it('renvoie undefined après la dernière séance du dernier module', () => {
    expect(seanceSuivante(parcours, 'b-2')).toBeUndefined();
  });

  it('saute un module sans séance', () => {
    expect(seanceSuivante([a, module('vide', []), b], 'a-3')?.id).toBe('b-1');
  });
});

describe('progressionModule (F01)', () => {
  it('compte les séances terminées du module et arrondit le pourcentage', () => {
    expect(progressionModule(a, new Set(['a-1', 'b-1']))).toEqual({
      terminees: 1,
      total: 3,
      pourcentage: 33,
    });
    expect(progressionModule(a, new Set(['a-1', 'a-2']))).toMatchObject({ pourcentage: 67 });
  });

  it('vaut 0 % pour un module sans séance', () => {
    expect(progressionModule(module('vide', []), new Set())).toEqual({
      terminees: 0,
      total: 0,
      pourcentage: 0,
    });
  });
});

describe('progressionGlobale (F06)', () => {
  it('compte sur tout le parcours en ignorant les identifiants inconnus', () => {
    const terminees = new Set(['a-1', 'b-2', 'module-retire-1']);
    expect(progressionGlobale(parcours, terminees)).toEqual({
      terminees: 2,
      total: 5,
      pourcentage: 40,
    });
  });

  it("augmente le total à l'ajout d'un module sans perdre la progression", () => {
    const terminees = new Set(['a-1', 'a-2', 'a-3', 'b-1', 'b-2']);
    expect(progressionGlobale(parcours, terminees)).toMatchObject({ terminees: 5, total: 5 });
    const avecNouveau = [a, module('nouveau', ['n-1', 'n-2']), b];
    expect(progressionGlobale(avecNouveau, terminees)).toMatchObject({ terminees: 5, total: 7 });
  });
});
