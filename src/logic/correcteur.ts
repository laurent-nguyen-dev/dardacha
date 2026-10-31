// Correcteur de réponse libre (F10, fonctionnel §6.2).
//
// Il repère, dans le texte saisi, les expressions de la séance ; il ne juge
// ni la grammaire ni l'accord (l'écran le rappelle toujours).
import { config } from '@/config';
import { type Expression, type Seance, type Variante, VARIANTES } from '@/content/types';

import { contientEnMotsEntiers, formesRetenues, normaliser } from './normalisation';

export interface ExpressionReconnue {
  expression: Expression;
  /** Variante de la forme trouvée dans le texte. */
  variante: Variante;
}

export type Correction =
  | { statut: 'vide' }
  | { statut: 'analyse'; reconnues: ExpressionReconnue[]; suggestions: Expression[] };

export function corriger(seance: Seance, texte: string): Correction {
  const texteNormalise = normaliser(texte);
  if (texteNormalise === '') return { statut: 'vide' };

  // Les premières expressions de la séance : base, puis supplémentaires (Q-11).
  const comparees = [...seance.expressions, ...seance.supplementaires].slice(
    0,
    config.correcteurNbExpressions,
  );

  const reconnues: ExpressionReconnue[] = [];
  const nonReconnues: Expression[] = [];
  for (const expression of comparees) {
    const variante = VARIANTES.find((v) =>
      formesRetenues(expression.formes[v]).some((forme) =>
        contientEnMotsEntiers(texteNormalise, forme),
      ),
    );
    if (variante) {
      reconnues.push({ expression, variante });
    } else {
      nonReconnues.push(expression);
    }
  }

  return {
    statut: 'analyse',
    reconnues,
    suggestions: nonReconnues.slice(0, config.correcteurNbSuggestions),
  };
}
