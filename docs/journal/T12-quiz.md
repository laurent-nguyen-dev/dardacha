# T12 — Quiz de séance (F08)

**Fait** : `src/logic/quiz.ts` (génération, 11 tests) et
`src/components/Quiz.tsx` (section « Vérifie ta compréhension », 3 tests
d'écran) : 4 questions à 3 choix, correction immédiate avec les trois
variantes, réponses verrouillées, score, « Refaire avec de nouvelles
questions ».

## Pourquoi

- **Hasard injecté** : `genererQuiz(parcours, seanceId, alea)`. En
  production `alea` vaut `Math.random` ; les tests passent un générateur à
  graine (mulberry32) : même graine, même quiz, donc des tests stables qui
  vérifient malgré tout le caractère aléatoire (graines différentes →
  tirages différents).
- **Règles du fonctionnel §6.1 testées une à une** : rotation des variantes
  selon le rang, énoncés, 3 choix distincts contenant la bonne réponse,
  aucune expression interrogée deux fois, distracteurs pris dans la séance
  puis dans le cours, exclusion des formes vides ou commençant par un
  chiffre.
- **Moins de questions plutôt qu'une répétition** : si une séance n'a pas
  assez d'expressions éligibles, on pose moins de questions. Cas
  impossible avec le contenu actuel (3 à 5 expressions + 3), mais le code
  ne plante pas pour autant.
- **`key={seance.id}`** sur le quiz : « Séance suivante » réutilise le même
  écran ; sans clé, React garderait les réponses de la séance précédente.
  Un test le vérifie.
- Nombre de questions et de choix lus dans `config`.

## Notions

- **Mélange de Fisher-Yates** : on parcourt la liste de la fin vers le
  début et on échange chaque élément avec un élément tiré au hasard avant
  lui. Chaque ordre a la même probabilité (contrairement au tri par
  `Math.random() - 0.5`, biaisé).
- **`useState(() => …)`** : la fonction n'est appelée qu'au premier
  affichage ; le quiz n'est pas regénéré à chaque réaffichage.
- **`key` d'un composant** : changer la clé fait démonter puis remonter le
  composant, avec un état neuf.
