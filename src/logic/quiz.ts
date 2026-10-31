// Génération du quiz de séance (F08, fonctionnel §6.1).
//
// Fonction pure : le tirage au hasard passe par `alea` (Math.random par
// défaut), que les tests remplacent par un générateur reproductible.
import { config } from '@/config';
import {
  type Expression,
  type Module,
  NOMS_VARIANTES,
  type Variante,
  VARIANTES,
} from '@/content/types';
import { aUneForme } from '@/content/validation';

import { type Alea, melanger, tirer } from './hasard';
import { situerSeance } from './parcours';

export interface Question {
  /** « variante » : trouver la forme ; « sens » : trouver le sens français. */
  type: 'variante' | 'sens';
  enonce: string;
  /** L'expression interrogée, pour afficher la correction dans les trois variantes. */
  expression: Expression;
  /** Variante demandée (question « variante ») ou affichée (question « sens »). */
  variante: Variante;
  choix: string[];
  bonneReponse: string;
}

export function genererQuiz(
  parcours: readonly Module[],
  seanceId: string,
  alea: Alea = Math.random,
): Question[] {
  const position = situerSeance(parcours, seanceId);
  if (!position) return [];

  const { seance, rang } = position;
  const expressionsSeance = [...seance.expressions, ...seance.supplementaires];
  const expressionsCours = parcours.flatMap((m) =>
    m.seances.flatMap((s) => [...s.expressions, ...s.supplementaires]),
  );
  const dejaInterrogees = new Set<Expression>();
  const questions: Question[] = [];

  // Questions 1 à n−1 : une variante différente chacune, en partant de la
  // variante d'indice (rang − 1) mod 3 (décision Q-04).
  for (let i = 0; i < config.quizSeanceNbQuestions - 1; i++) {
    const variante = VARIANTES[(rang - 1 + i) % VARIANTES.length];
    const candidates = expressionsSeance.filter(
      (e) => !dejaInterrogees.has(e) && estEligible(e, variante),
    );
    if (candidates.length === 0) continue;

    const expression = tirer(candidates, alea);
    dejaInterrogees.add(expression);
    const bonneReponse = expression.formes[variante]!;
    const formesDe = (liste: Expression[]) =>
      liste
        .filter((e) => e !== expression && estEligible(e, variante))
        .map((e) => e.formes[variante]!);

    questions.push({
      type: 'variante',
      enonce: `Comment dit-on « ${expression.sens} » en ${NOMS_VARIANTES[variante]} ?`,
      expression,
      variante,
      bonneReponse,
      choix: composerChoix(
        bonneReponse,
        formesDe(expressionsSeance),
        formesDe(expressionsCours),
        alea,
      ),
    });
  }

  // Dernière question : le sens d'une forme, affichée dans une variante tirée
  // au hasard parmi celles où elle est éligible (décision Q-05).
  const candidates = expressionsSeance.filter(
    (e) => !dejaInterrogees.has(e) && VARIANTES.some((v) => estEligible(e, v)),
  );
  if (candidates.length > 0) {
    const expression = tirer(candidates, alea);
    const variante = tirer(
      VARIANTES.filter((v) => estEligible(expression, v)),
      alea,
    );
    const sensDe = (liste: Expression[]) =>
      liste.filter((e) => e !== expression).map((e) => e.sens);
    questions.push({
      type: 'sens',
      enonce: `Que signifie « ${expression.formes[variante]} » ?`,
      expression,
      variante,
      bonneReponse: expression.sens,
      choix: composerChoix(
        expression.sens,
        sensDe(expressionsSeance),
        sensDe(expressionsCours),
        alea,
      ),
    });
  }

  return questions;
}

/** Une forme est interrogeable si elle existe et ne commence pas par un chiffre. */
function estEligible(expression: Expression, variante: Variante): boolean {
  const forme = expression.formes[variante];
  return aUneForme(forme) && !/^\d/.test(forme.trim());
}

/**
 * La bonne réponse et des distracteurs pris d'abord dans la séance, puis dans
 * tout le cours ; aucun doublon de texte ; le tout mélangé.
 */
function composerChoix(
  bonneReponse: string,
  distracteursSeance: string[],
  distracteursCours: string[],
  alea: Alea,
): string[] {
  const choix = [bonneReponse];
  for (const candidat of [
    ...melanger(distracteursSeance, alea),
    ...melanger(distracteursCours, alea),
  ]) {
    if (choix.length === config.quizNbChoix) break;
    if (!choix.includes(candidat)) choix.push(candidat);
  }
  return melanger(choix, alea);
}
