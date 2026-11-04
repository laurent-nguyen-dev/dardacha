// F16 : lien de signalement d'une erreur de contenu (fonctionnel §3.9).
//
// Le lien ouvre le formulaire GitHub `.github/ISSUE_TEMPLATE/
// correction-contenu.yml`, prérempli par des paramètres d'URL qui portent
// l'identifiant (`id`) des champs du formulaire.

import { config } from '@/config';
import { type Expression, NOMS_VARIANTES, VARIANTES } from '@/content/types';

export interface Signalement {
  /** Où se trouve l'erreur : « Module 1 · Séance 2 · titre », « Mémo… ». */
  lieu: string;
  /** L'expression concernée, si l'erreur porte sur une expression. */
  expression?: Expression;
}

/** Les formes actuelles, une variante après l'autre, sur une ligne. */
export function formesActuelles(expression: Expression): string {
  return VARIANTES.map((variante) => {
    const forme = expression.formes[variante] ?? '—';
    const arabe = expression.arabe?.[variante];
    return `${NOMS_VARIANTES[variante]} : ${forme}${arabe ? ` (${arabe})` : ''}`;
  }).join(' · ');
}

/**
 * URL du formulaire prérempli. Encodage fait à la main : `URLSearchParams`
 * n'est pas complet dans React Native.
 */
export function lienSignalement({ lieu, expression }: Signalement): string {
  const champs: [string, string][] = [
    ['template', 'correction-contenu.yml'],
    ['title', `Contenu : ${expression?.sens ?? lieu}`],
    ['seance', lieu],
  ];
  if (expression) {
    champs.push(['expression', expression.sens], ['actuelle', formesActuelles(expression)]);
  }
  const requete = champs.map(([cle, valeur]) => `${cle}=${encodeURIComponent(valeur)}`).join('&');
  return `${config.depot}/issues/new?${requete}`;
}
