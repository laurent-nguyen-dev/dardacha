# T04 — Logique de parcours

**Fait** : `src/logic/parcours.ts` — situer une séance (module, numéros,
rang global), situer un module, séance suivante (F04), progression d'un
module (F01) et globale (F06). 12 tests, écrits avant le code.

## Pourquoi

- **Fonctions pures, parcours en paramètre** : elles ne lisent pas le
  registre elles-mêmes. Les tests leur passent de petits parcours factices
  (`a`, `b`), et peuvent simuler l'insertion d'un module en tête pour
  vérifier que numéros et rang se recalculent et que la progression n'est
  pas perdue — exactement l'exigence d'évolutivité.
- **Séance suivante = aplatir puis avancer d'un cran** : on met toutes les
  séances bout à bout (`flatMap`) ; la suivante est simplement l'élément
  d'après. Le passage au module suivant et le cas d'un module vide sont
  alors gérés sans cas particulier.
- **Identifiants inconnus ignorés** dans les totaux : une séance terminée
  d'un module retiré ne fausse pas « N / T ».
- **Arrondi du pourcentage** : la spécification ne le précisait pas ; choisi
  « à l'entier le plus proche » et écrit dans le fonctionnel (F01).

## Notions

- **`flatMap`** : transforme chaque élément en liste puis met toutes les
  listes bout à bout. `modules.flatMap(m => m.seances)` = toutes les séances
  du parcours, dans l'ordre.
- **`ReadonlySet<string>`** : un ensemble d'identifiants. `has(id)` répond en
  temps constant, et `Readonly` garantit que la fonction ne le modifie pas.
- **`toMatchObject`** (Jest) : vérifie seulement les champs cités, quand le
  test ne s'intéresse qu'à une partie du résultat.
