// Fiches de révision (F11) : les premières expressions de base de chaque
// séance, groupées par module, dans l'ordre du parcours.
import { config } from '@/config';
import type { Expression, Module } from '@/content/types';

export interface GroupeRevision {
  module: Module;
  numeroModule: number;
  expressions: Expression[];
}

export function fichesRevision(parcours: readonly Module[]): GroupeRevision[] {
  return parcours.map((module, index) => ({
    module,
    numeroModule: index + 1,
    expressions: module.seances.flatMap((seance) =>
      seance.expressions.slice(0, config.revisionsParSeance),
    ),
  }));
}
