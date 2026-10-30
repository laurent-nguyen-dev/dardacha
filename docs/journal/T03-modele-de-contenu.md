# T03 — Modèle de contenu et contrôle automatique

**Fait** : types du contenu (`src/content/types.ts`), paramètres
configurables (`src/config.ts`), contrôle de structure du contenu
(`src/content/validation.ts`, 10 tests), guide
[ajouter-un-module.md](../ajouter-un-module.md).

Le registre `parcours.ts` et le test qui contrôle le vrai contenu arrivent
avec le premier module (T06), pour qu'aucun commit ne contienne un parcours
vide qui ferait échouer la CI.

## Pourquoi

- **Contenu = donnée typée** : TypeScript refuse à la compilation un module
  auquel il manque un champ ou dont un champ a le mauvais type.
- **Mais les types ne suffisent pas** : « 3 à 5 expressions » ou « identifiant
  unique » ne s'expriment pas en types. D'où `validerParcours`, qui renvoie
  des messages en français prêts à lire, plutôt qu'un simple vrai/faux.
- **Écrit en test d'abord (TDD)** : les règles étaient entièrement connues
  par la spécification. Chaque test part d'un contenu valide et l'abîme d'une
  seule façon, pour vérifier une seule règle à la fois.
- **Absence de forme = `null`**, pas la chaîne « — » : « — » est un choix
  d'affichage ; dans les données, `null` dit sans ambiguïté « pas de forme ».

## Notions

- **`Record<Variante, string | null>`** : un objet qui a exactement une clé
  par variante (`msa`, `darija`, `tounsi`). Oublier une variante est une
  erreur de compilation.
- **`as const`** : fige un objet ou un tableau (lecture seule, types
  littéraux). Utilisé pour `config` et les listes de champs.
- **Prédicat de type** (`forme is string`) : une fonction qui renvoie un
  booléen et informe TypeScript du type quand elle renvoie vrai. Après
  `if (!aUneForme(forme)) … else …`, TypeScript sait que `forme` est une
  chaîne dans le `else`. Le prédicat doit dire la vérité : une première
  version disait « vide ⇒ null », faux pour la chaîne vide ; corrigé.
