// Paramètres configurables (fonctionnel.md §7). Modifier une valeur ici
// rééquilibre l'application sans toucher à la logique.
export const config = {
  vitesseLecture: 0.86,
  quizSeanceNbQuestions: 4,
  quizNbChoix: 3,
  correctionTypeNbFormules: 4,
  correcteurNbExpressions: 6,
  correcteurLongueurMin: 3,
  correcteurNbSuggestions: 3,
  revisionsParSeance: 2,
  quizMemoNbQuestions: 5,
  reponseLongueurMax: 1000,
  dialogueRepliquesMin: 3,
  dialogueRepliquesMax: 6,

  // Règles de structure du contenu, vérifiées automatiquement (§3.2, §3.5).
  contenuExpressionsBaseMin: 3,
  contenuExpressionsBaseMax: 5,
  contenuSupplementaires: 3,
} as const;
