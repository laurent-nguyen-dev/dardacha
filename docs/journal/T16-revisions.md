# T16 — Révisions (F11)

**Fait** : `src/logic/revisions.ts` (2 tests) et l'écran
`src/app/revisions.tsx`, ouvert par l'entrée **Révisions** de la barre
permanente : les 2 premières expressions de base de chaque séance
(`config.revisionsParSeance`), groupées par module, avec les trois
variantes, le sens et un bouton d'écoute par variante.

## Pourquoi

- **Groupées par module** : la spécification parle de « 48 fiches » ; avec
  un parcours extensible, une longue liste à plat devient vite illisible.
  Le titre de module sert de repère (et d'en-tête pour les lecteurs
  d'écran). Le contenu des fiches reste celui de la spécification.
- **Aucune fiche à variante vide** : la règle de contenu (décision Q-09)
  est déjà vérifiée par le contrôle automatique du contenu ; le défaut de
  la version web (fiches « 3 » et « 7 » sans MSA) ne peut pas revenir.
- Réutilise `ExpressionComparee` : écoute comprise, sans code nouveau.
