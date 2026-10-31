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

/** Une réplique du mini-dialogue (fonctionnel §3.3, section 6). */
export interface Replique {
  /** Qui parle : « A » ou « B ». */
  locuteur: string;
  expression: Expression;
}

/** Un exemple du mémo des chiffres SMS (fonctionnel §3.4). */
export interface ExempleMemo {
  /** Transcription latine, avec le chiffre. */
  transcription: string;
  /** Le mot en écriture arabe : c'est lui qui est lu à voix haute (§6.3). */
  arabe: string;
  sens: string;
}

/** Un chiffre du chat et la lettre arabe qu'il remplace. */
export interface ChiffreMemo {
  chiffre: string;
  lettre: string;
  son: string;
  prononciation: string;
  exemples: ExempleMemo[];
}
