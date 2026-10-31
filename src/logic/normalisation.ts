// Normalisation de texte pour le correcteur de réponse libre (fonctionnel
// §6.2). Le texte saisi et les formes de référence passent par les mêmes
// fonctions, pour être comparés à égalité.
import { config } from '@/config';

/**
 * Minuscules, accents retirés, ponctuation remplacée par des espaces,
 * espaces multiples réduits. Les chiffres et les lettres (latines comme
 * arabes) sont conservés.
 *
 * Écriture arabe (fonctionnel §6.2) : voyelles et hamza portée retirées
 * par la même décomposition que les accents (أ → ا, ؤ → و, ئ → ي), trait
 * d'allongement ـ retiré, ى confondu avec ي et ة avec ه.
 */
export function normaliser(texte: string): string {
  return (
    texte
      .toLowerCase()
      // Décompose « é » en « e » + accent, puis retire les accents.
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
      .replace(/ـ/g, '')
      .replace(/ى/g, 'ي')
      .replace(/ة/g, 'ه')
      // Tout ce qui n'est ni lettre ni chiffre devient un espace.
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .trim()
  );
}

/**
 * Formes d'une variante prises en compte par le correcteur : alternatives
 * « / » séparées, parenthèses ignorées, normalisées, et d'au moins
 * `correcteurLongueurMin` caractères.
 */
export function formesRetenues(forme: string | null): string[] {
  if (forme === null) return [];
  return forme
    .replace(/\([^)]*\)/g, '')
    .split('/')
    .map(normaliser)
    .filter((f) => f.length >= config.correcteurLongueurMin);
}

/** Vrai si `forme` apparaît dans `texte` en mots entiers (textes déjà normalisés). */
export function contientEnMotsEntiers(texte: string, forme: string): boolean {
  return ` ${texte} `.includes(` ${forme} `);
}
