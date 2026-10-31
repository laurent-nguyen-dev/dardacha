import { parcours } from '@/content/parcours';
import type { Module, Seance } from '@/content/types';

import { fichesRevision } from './revisions';

function seance(id: string, sens: string[]): Seance {
  return {
    id,
    titre: id,
    objectif: '',
    contexte: '',
    expressions: sens.map((s) => ({ sens: s, formes: { msa: s, darija: s, tounsi: s } })),
    supplementaires: [],
    defiOral: '',
    aRetenir: '',
    aToiDeJouer: '',
  };
}

function module(id: string, seances: Seance[]): Module {
  return { id, icone: '', titre: id, description: '', reluParNatif: false, seances };
}

describe('fichesRevision (F11)', () => {
  it('prend les 2 premières expressions de base de chaque séance, groupées par module', () => {
    const fiches = fichesRevision([
      module('m1', [seance('a', ['a1', 'a2', 'a3']), seance('b', ['b1', 'b2', 'b3'])]),
      module('m2', [seance('c', ['c1', 'c2', 'c3', 'c4'])]),
    ]);
    expect(
      fiches.map(({ module, numeroModule, expressions }) => ({
        module: module.id,
        numeroModule,
        sens: expressions.map((e) => e.sens),
      })),
    ).toEqual([
      { module: 'm1', numeroModule: 1, sens: ['a1', 'a2', 'b1', 'b2'] },
      { module: 'm2', numeroModule: 2, sens: ['c1', 'c2'] },
    ]);
  });

  it('donne 2 fiches par séance sur le vrai parcours', () => {
    const nbSeances = parcours.reduce((total, m) => total + m.seances.length, 0);
    const nbFiches = fichesRevision(parcours).reduce((t, g) => t + g.expressions.length, 0);
    expect(nbFiches).toBe(2 * nbSeances);
  });
});
