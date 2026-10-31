# T11 — Normalisation de texte

**Fait** : `src/logic/normalisation.ts` — `normaliser` (minuscules, sans
accents ni ponctuation, chiffres et lettres arabes conservés),
`formesRetenues` (formes d'une variante prises en compte par le
correcteur) et `contientEnMotsEntiers`. 8 tests, écrits avant le code.

## Pourquoi

- **Une seule normalisation pour les deux côtés** : le texte saisi et les
  formes de référence passent par la même fonction ; « Sba7 el-5ir ! » et
  « sba7 el-5ir » deviennent tous deux « sba7 el 5ir ».
- **Mots entiers** (décision Q-12) : on entoure texte et forme d'espaces
  avant de chercher ; « bes » n'est pas trouvé dans « besoin ».
- **Longueur minimale** lue dans `config` (`correcteurLongueurMin`, 3).

## Notions

- **`normalize('NFD')`** : décompose chaque lettre accentuée en lettre +
  accent séparé (« é » → « e » + « ´ ») ; `\p{M}` (« marque ») désigne
  ensuite ces accents, qu'on retire.
- **`\p{L}` et `\p{N}`** avec le drapeau `u` : « toute lettre » et « tout
  chiffre », dans tous les alphabets — c'est ce qui garde les lettres
  arabes, que `[a-z]` aurait supprimées.
