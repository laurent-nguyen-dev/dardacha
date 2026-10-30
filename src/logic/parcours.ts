// Logique de parcours : position d'une séance, séance suivante, totaux.
//
// Fonctions pures : elles reçoivent le parcours en paramètre et ne
// stockent rien. Numéros et rangs sont recalculés à chaque appel à partir
// de l'ordre du registre, jamais enregistrés (fonctionnel §3.6).
import type { Module, Seance } from '@/content/types';

export interface PositionSeance {
  module: Module;
  seance: Seance;
  /** Numéro du module dans le parcours, à partir de 1. */
  numeroModule: number;
  /** Numéro de la séance dans son module, à partir de 1. */
  numeroSeance: number;
  /** Rang de la séance dans tout le parcours, à partir de 1 (rotation du quiz, §6.1). */
  rang: number;
}

export interface Progression {
  terminees: number;
  total: number;
  /** Arrondi à l'entier le plus proche. */
  pourcentage: number;
}

export function situerSeance(
  parcours: readonly Module[],
  seanceId: string,
): PositionSeance | undefined {
  let rang = 0;
  for (const [indexModule, module] of parcours.entries()) {
    for (const [indexSeance, seance] of module.seances.entries()) {
      rang += 1;
      if (seance.id === seanceId) {
        return {
          module,
          seance,
          numeroModule: indexModule + 1,
          numeroSeance: indexSeance + 1,
          rang,
        };
      }
    }
  }
  return undefined;
}

export function situerModule(
  parcours: readonly Module[],
  moduleId: string,
): { module: Module; numero: number } | undefined {
  const index = parcours.findIndex((module) => module.id === moduleId);
  return index === -1 ? undefined : { module: parcours[index], numero: index + 1 };
}

/** F04 : la séance qui suit, dans le module puis dans le module suivant. */
export function seanceSuivante(parcours: readonly Module[], seanceId: string): Seance | undefined {
  const toutes = parcours.flatMap((module) => module.seances);
  const index = toutes.findIndex((seance) => seance.id === seanceId);
  return index === -1 ? undefined : toutes[index + 1];
}

export function progressionModule(module: Module, terminees: ReadonlySet<string>): Progression {
  return calculerProgression(module.seances, terminees);
}

/**
 * F06 : progression sur tout le parcours. Les identifiants terminés qui ne
 * correspondent à aucune séance actuelle (module retiré) sont ignorés.
 */
export function progressionGlobale(
  parcours: readonly Module[],
  terminees: ReadonlySet<string>,
): Progression {
  return calculerProgression(
    parcours.flatMap((module) => module.seances),
    terminees,
  );
}

function calculerProgression(
  seances: readonly Seance[],
  terminees: ReadonlySet<string>,
): Progression {
  const total = seances.length;
  const nbTerminees = seances.filter((seance) => terminees.has(seance.id)).length;
  const pourcentage = total === 0 ? 0 : Math.round((nbTerminees / total) * 100);
  return { terminees: nbTerminees, total, pourcentage };
}
