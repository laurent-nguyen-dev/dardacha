// Format de stockage de la progression (fonctionnel §6.4) : la liste des
// identifiants de séances terminées, en JSON. Fonctions pures, testées
// sans téléphone ; le stockage lui-même est dans services/progression.

export function ecrireProgression(terminees: ReadonlySet<string>): string {
  return JSON.stringify([...terminees].sort());
}

/**
 * Relit la progression enregistrée. Une donnée absente ou abîmée donne une
 * progression vide plutôt qu'une erreur : l'application doit rester
 * utilisable dans tous les cas.
 */
export function lireProgression(texte: string | null): Set<string> {
  if (texte === null) return new Set();
  try {
    const donnees: unknown = JSON.parse(texte);
    if (!Array.isArray(donnees)) return new Set();
    return new Set(donnees.filter((element): element is string => typeof element === 'string'));
  } catch {
    return new Set();
  }
}
