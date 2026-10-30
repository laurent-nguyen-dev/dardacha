// Lecture à voix haute par la synthèse vocale du téléphone (F07).
import * as Speech from 'expo-speech';
import { Alert } from 'react-native';

import { config } from '@/config';
import type { Variante } from '@/content/types';
import { choisirVoix, LANGUES, type VoixDisponible } from '@/logic/audio';

const MESSAGE_SANS_VOIX =
  "Aucune voix arabe n'est installée sur ce téléphone.\n\n" +
  'Android : Paramètres › Système › Langues › Synthèse vocale, puis installer les données vocales « Arabe ».\n\n' +
  'iPhone : Réglages › Accessibilité › Contenu énoncé › Voix › Arabe.';

// Liste des voix gardée en mémoire après la première lecture. Une liste
// vide n'est pas gardée : sur Android, le moteur peut ne pas être prêt au
// premier appel.
let voixEnMemoire: VoixDisponible[] = [];

async function voixDuTelephone(): Promise<VoixDisponible[]> {
  if (voixEnMemoire.length === 0) {
    voixEnMemoire = await Speech.getAvailableVoicesAsync().catch(() => []);
  }
  return voixEnMemoire;
}

/** Lit `texte` avec la voix la plus proche de la variante (fonctionnel §6.3). */
export async function lire(texte: string, variante: Variante): Promise<void> {
  // Une nouvelle lecture interrompt la précédente.
  await Speech.stop();
  const choix = choisirVoix(variante, await voixDuTelephone());
  if (choix.statut === 'aucune') {
    Alert.alert('Pas de voix arabe', MESSAGE_SANS_VOIX);
    return;
  }
  Speech.speak(texte, {
    language: LANGUES[variante],
    voice: choix.statut === 'voix' ? choix.voix.identifier : undefined,
    rate: config.vitesseLecture,
  });
}

/** Pour les tests : oublie la liste des voix gardée en mémoire. */
export function oublierVoix() {
  voixEnMemoire = [];
}
