// Modèle du contenu pédagogique (fonctionnel.md §3).
//
// Le contenu est de la donnée pure : aucun écran ni aucune règle ne dépend
// d'un module en particulier. Ajouter un module = ajouter un fichier qui
// respecte ces types (docs/ajouter-un-module.md).

export type Variante = 'msa' | 'darija' | 'tounsi';

/** Ordre de référence des variantes, utilisé partout (affichage, quiz). */
export const VARIANTES: readonly Variante[] = ['msa', 'darija', 'tounsi'];

export const NOMS_VARIANTES: Record<Variante, string> = {
  msa: 'MSA',
  darija: 'darija',
  tounsi: 'tounsi',
};

/**
 * Une expression en transcription latine dans chaque variante.
 * `null` = pas de forme dans cette variante (affiché « — »).
 * Plusieurs formes alternatives sont séparées par « / » ; les précisions
 * entre parenthèses ne font pas partie de la forme (fonctionnel §3.2).
 */
export interface Expression {
  sens: string;
  formes: Record<Variante, string | null>;
}

export interface Seance {
  /** Identifiant permanent : jamais modifié ni réutilisé (technique §2.1). */
  id: string;
  titre: string;
  objectif: string;
  /** Conseil sur les variantes et le genre de l'interlocuteur. */
  contexte: string;
  /** Expressions de base : vocabulaire comparé. */
  expressions: Expression[];
  /** Expressions supplémentaires. */
  supplementaires: Expression[];
  /** Consigne du défi oral. */
  defiOral: string;
  /** Texte « À retenir ». */
  aRetenir: string;
  /** Consigne de la réponse libre « À toi de jouer ». */
  aToiDeJouer: string;
}

export interface Module {
  /** Identifiant permanent : jamais modifié ni réutilisé (technique §2.1). */
  id: string;
  /** Un emoji. */
  icone: string;
  titre: string;
  description: string;
  /** Relu par des locuteurs natifs (fonctionnel §3.5). */
  reluParNatif: boolean;
  seances: Seance[];
}
