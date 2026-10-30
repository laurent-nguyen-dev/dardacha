// Séances terminées (fonctionnel §6.4).
//
// Sprint 1 : aucune séance n'est encore enregistrée. Le stockage sur
// l'appareil arrive au ticket T07 ; les écrans passent déjà par ce hook,
// ils n'auront donc pas à changer.
const AUCUNE: ReadonlySet<string> = new Set();

export function useSeancesTerminees(): ReadonlySet<string> {
  return AUCUNE;
}
