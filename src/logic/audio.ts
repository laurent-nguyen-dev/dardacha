// Règles de l'écoute (fonctionnel §6.3) : choix de la voix et préparation
// du texte à lire. Fonctions pures ; la lecture elle-même est dans
// services/audio.
import type { Variante } from '@/content/types';

/** Ce dont on a besoin d'une voix du téléphone. */
export interface VoixDisponible {
  identifier: string;
  language: string;
}

export type ChoixVoix =
  | { statut: 'voix'; voix: VoixDisponible }
  /** Le téléphone ne liste pas ses voix : on demande seulement la langue. */
  | { statut: 'langue' }
  /** Aucune voix arabe : il faut prévenir l'utilisateur. */
  | { statut: 'aucune' };

/** Langue demandée au téléphone pour chaque variante. */
export const LANGUES: Record<Variante, string> = {
  msa: 'ar',
  darija: 'ar-MA',
  tounsi: 'ar-TN',
};

/** Ordre de préférence des langues, avant le repli sur toute voix arabe. */
const PREFERENCES: Record<Variante, string[]> = {
  msa: ['ar', 'ar-sa'],
  darija: ['ar-ma', 'ar', 'ar-sa'],
  tounsi: ['ar-tn', 'ar', 'ar-sa'],
};

/** « ar_MA » (Android) et « ar-MA » (iOS) deviennent « ar-ma ». */
function normaliserLangue(langue: string): string {
  return langue.replace('_', '-').toLowerCase();
}

export function choisirVoix(variante: Variante, voix: readonly VoixDisponible[]): ChoixVoix {
  if (voix.length === 0) return { statut: 'langue' };

  for (const langue of PREFERENCES[variante]) {
    const trouvee = voix.find((v) => normaliserLangue(v.language) === langue);
    if (trouvee) return { statut: 'voix', voix: trouvee };
  }
  const arabe = voix.find((v) => normaliserLangue(v.language).split('-')[0] === 'ar');
  return arabe ? { statut: 'voix', voix: arabe } : { statut: 'aucune' };
}

/** Lettres lues à la place des chiffres du chat (fonctionnel §3.5). */
const CHIFFRES_DU_CHAT: Record<string, string> = {
  '2': '',
  '3': 'a',
  '5': 'kh',
  '6': 't',
  '7': 'h',
  '9': 'q',
};

/**
 * Texte envoyé à la voix pour une forme en transcription latine : sans les
 * précisions entre parenthèses, alternatives séparées par une pause, et
 * chiffres du chat remplacés par des lettres (une voix arabe lirait sinon
 * « 7 » comme le nombre sept).
 */
export function texteALire(forme: string): string {
  return forme
    .replace(/\([^)]*\)/g, '')
    .replace(/\s*\/\s*/g, ', ')
    .replace(/[235679]/g, (chiffre) => CHIFFRES_DU_CHAT[chiffre])
    .replace(/\s+/g, ' ')
    .replace(/\s+,/g, ',')
    .trim();
}
