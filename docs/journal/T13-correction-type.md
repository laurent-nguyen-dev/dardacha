# T13 — Correction type du défi oral (F09)

**Fait** : `src/components/CorrectionType.tsx`, sous la consigne du défi
oral : « Voir la correction type » affiche les 4 premières expressions de
base de la séance (décision Q-07, `config.correctionTypeNbFormules`) dans
les trois variantes ; « Masquer la correction type » les cache. Testé sur
**chaque séance du parcours** (critère de recette 3).

## Pourquoi

- Réutilise `ExpressionComparee` : les formules ont donc aussi leurs
  boutons d'écoute, utiles pour s'entraîner à l'oral.
- `key={seance.id}` : la correction se replie en passant à la séance
  suivante.

## Notions

- **`it.each`** (Jest) : un même test joué pour chaque élément d'une liste ;
  ici une fois par séance. Quand on ajoute un module, ses séances sont
  testées automatiquement.
