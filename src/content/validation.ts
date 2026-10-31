// Contrôle automatique de la structure du contenu (technique.md §2.1).
//
// Renvoie la liste des erreurs, en français, prêtes à afficher. Une liste
// vide signifie que le parcours est valide. Le test `parcours.test.ts`
// applique ce contrôle au vrai contenu : un module mal formé fait échouer
// la CI avant d'arriver dans l'application.
import { config } from '../config';
import { type Expression, type Module, type Replique, type Seance, VARIANTES } from './types';

const FORMAT_IDENTIFIANT = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const TEXTES_OBLIGATOIRES_SEANCE = [
  'titre',
  'objectif',
  'contexte',
  'defiOral',
  'aRetenir',
  'aToiDeJouer',
] as const;

export function validerParcours(modules: readonly Module[]): string[] {
  if (modules.length === 0) {
    return ['Le parcours ne contient aucun module.'];
  }

  const erreurs: string[] = [];
  erreurs.push(...validerIdentifiants(modules));
  for (const module of modules) {
    if (module.seances.length === 0) {
      erreurs.push(`Module « ${module.id} » : aucune séance.`);
    }
    for (const seance of module.seances) {
      erreurs.push(...validerSeance(seance));
    }
  }
  return erreurs;
}

/** Format, et unicité sur tout le parcours (modules et séances confondus). */
function validerIdentifiants(modules: readonly Module[]): string[] {
  const erreurs: string[] = [];
  const dejaVus = new Set<string>();
  const tous = modules.flatMap((module) => [module.id, ...module.seances.map((s) => s.id)]);

  for (const id of tous) {
    if (!FORMAT_IDENTIFIANT.test(id)) {
      erreurs.push(`Identifiant « ${id} » invalide : minuscules, chiffres et tirets uniquement.`);
    }
    if (dejaVus.has(id)) {
      erreurs.push(`Identifiant « ${id} » utilisé plusieurs fois.`);
    }
    dejaVus.add(id);
  }
  return erreurs;
}

function validerSeance(seance: Seance): string[] {
  const erreurs: string[] = [];
  const prefixe = `Séance « ${seance.id} »`;

  for (const champ of TEXTES_OBLIGATOIRES_SEANCE) {
    if (seance[champ].trim() === '') {
      erreurs.push(`${prefixe} : « ${champ} » est vide.`);
    }
  }

  const { contenuExpressionsBaseMin: min, contenuExpressionsBaseMax: max } = config;
  if (seance.expressions.length < min || seance.expressions.length > max) {
    erreurs.push(
      `${prefixe} : ${seance.expressions.length} expressions de base (attendu : ${min} à ${max}).`,
    );
  }
  if (seance.supplementaires.length !== config.contenuSupplementaires) {
    erreurs.push(
      `${prefixe} : ${seance.supplementaires.length} expressions supplémentaires (attendu : ${config.contenuSupplementaires}).`,
    );
  }

  for (const expression of [...seance.expressions, ...seance.supplementaires]) {
    if (!VARIANTES.some((variante) => aUneForme(expression.formes[variante]))) {
      erreurs.push(`${prefixe} : l'expression « ${expression.sens} » n'a aucune forme.`);
    }
    erreurs.push(...validerEcritureArabe(expression, prefixe));
  }

  if (seance.dialogue) {
    erreurs.push(...validerDialogue(seance.dialogue, prefixe));
  }

  // Les premières expressions de base sont reprises dans les révisions :
  // elles doivent être complètes (fonctionnel §3.5, règle de contenu).
  for (const expression of seance.expressions.slice(0, config.revisionsParSeance)) {
    erreurs.push(...validerExpressionDeRevision(expression, prefixe));
  }
  return erreurs;
}

function validerExpressionDeRevision(expression: Expression, prefixe: string): string[] {
  const erreurs: string[] = [];
  for (const variante of VARIANTES) {
    const forme = expression.formes[variante];
    const debut = `${prefixe} : l'expression « ${expression.sens} » (reprise en révision)`;
    if (!aUneForme(forme)) {
      erreurs.push(`${debut} doit avoir une forme en ${variante}.`);
    } else if (/^\d/.test(forme)) {
      erreurs.push(`${debut} ne doit pas commencer par un chiffre en ${variante}.`);
    }
  }
  return erreurs;
}

/** Mini-dialogue de séance, facultatif (fonctionnel §3.8, technique §2.3). */
function validerDialogue(dialogue: readonly Replique[], prefixe: string): string[] {
  const erreurs: string[] = [];
  const { dialogueRepliquesMin: min, dialogueRepliquesMax: max } = config;
  if (dialogue.length < min || dialogue.length > max) {
    erreurs.push(
      `${prefixe} : le mini-dialogue a ${dialogue.length} répliques (attendu : ${min} à ${max}).`,
    );
  }
  dialogue.forEach(({ locuteur, expression }, index) => {
    const replique = `${prefixe} : la réplique ${index + 1} du mini-dialogue`;
    const attendu = index % 2 === 0 ? 'A' : 'B';
    if (locuteur !== attendu) {
      erreurs.push(`${replique} doit être dite par ${attendu}.`);
    }
    for (const variante of VARIANTES) {
      if (!aUneForme(expression.formes[variante])) {
        erreurs.push(`${replique} n'a pas de forme en ${variante}.`);
      }
      if (!expression.arabe?.[variante]) {
        erreurs.push(`${replique} n'a pas d'écriture arabe en ${variante}.`);
      }
    }
    erreurs.push(...validerEcritureArabe(expression, `${prefixe} (mini-dialogue)`));
  });
  return erreurs;
}

/**
 * Lettres arabes, espaces, séparateur d'alternatives « / », « … » et
 * ponctuation (، ؟ sont des caractères « communs » pour Unicode, d'où leur
 * mention explicite).
 */
const ECRITURE_ARABE = /^[\p{Script=Arabic}\s/…،؟.!?]+$/u;

/** Écriture arabe facultative (fonctionnel §3.7, technique §2.2). */
export function validerEcritureArabe(expression: Expression, prefixe: string): string[] {
  const erreurs: string[] = [];
  for (const variante of VARIANTES) {
    const arabe = expression.arabe?.[variante];
    if (arabe === undefined) continue;
    const forme = expression.formes[variante];
    if (!aUneForme(forme)) {
      erreurs.push(
        `${prefixe} : l'expression « ${expression.sens} » a une écriture arabe en ${variante} sans forme latine.`,
      );
      continue;
    }
    const debut = `${prefixe} : l'écriture arabe de « ${expression.sens} » en ${variante}`;
    if (!ECRITURE_ARABE.test(arabe)) {
      erreurs.push(`${debut} contient autre chose que des lettres arabes.`);
    }
    const nbArabe = arabe.split('/').length;
    const nbLatin = forme.split('/').length;
    if (nbArabe !== nbLatin) {
      erreurs.push(`${debut} a ${nbArabe} alternative(s), la forme latine ${nbLatin}.`);
    }
  }
  return erreurs;
}

/** Vrai si la variante a une forme non vide. */
export function aUneForme(forme: string | null): forme is string {
  return forme !== null && forme.trim() !== '';
}
