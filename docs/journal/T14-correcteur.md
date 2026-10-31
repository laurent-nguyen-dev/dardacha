# T14 — Correcteur de réponse libre (F10)

**Fait** : `src/logic/correcteur.ts` (7 tests, écrits avant le code) et
`src/components/ReponseLibre.tsx` (section « À toi de jouer », 2 tests
d'écran) : zone de saisie (1 000 caractères max), « Corriger ma réponse »,
expressions reconnues avec leur variante, jusqu'à 3 suggestions, rappel
des limites du correcteur.

## Pourquoi

- **S'appuie sur T11** : la normalisation, les formes retenues et la
  recherche en mots entiers sont déjà testées ; le correcteur se contente
  de les combiner selon le fonctionnel §6.2 (6 premières expressions, base
  puis supplémentaires ; variante de la première forme trouvée ;
  suggestions dans l'ordre).
- **Résultat en union** (`vide` / `analyse`) : l'écran ne peut pas oublier
  le cas « rien saisi ».
- **Saisie sans majuscule ni correction automatiques** : le correcteur du
  téléphone « corrigerait » les transcriptions (« labas » → « lavabo »).
- Limite de saisie `reponseLongueurMax` : borne le travail du correcteur
  (profil de risque, technique §6).

## Notions

- **`TextInput`** : champ de saisie ; `value` + `onChangeText` en font un
  champ « contrôlé » dont le texte vit dans l'état React.
- **Apostrophes dans le JSX** : la règle ESLint `react/no-unescaped-entities`
  refuse `'` en texte brut ; on écrit la phrase dans une chaîne `{"…"}`.
- **`act` en test** : toute action qui change l'état (saisie, appui) doit
  être attendue dans un `act` ; deux `act` qui se chevauchent faussent
  l'affichage vérifié.
