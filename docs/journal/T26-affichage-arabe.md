# T26 — Affichage de l'écriture arabe

**Fait** : composant `TexteArabe` (de droite à gauche, un peu plus grand que
le latin, langue « ar » signalée aux lecteurs d'écran), utilisé sous la
transcription latine dans `ExpressionComparee` (expressions
supplémentaires, mini-dialogue, correction type, correction du quiz,
suggestions du correcteur, révisions) et dans le tableau de vocabulaire. Un
test d'écran, sur un parcours de test.

## Pourquoi

- **Deux composants modifiés, toute l'application servie** : toutes les
  sections qui affichent une forme passent déjà par `ExpressionComparee` ou
  le tableau ; aucun écran n'a eu à changer.
- **Rien ne change sans écriture arabe** : l'affichage est conditionnel ; un
  module sans le champ `arabe` s'affiche comme en version 1 (les 116 tests
  existants passent sans modification).
- **Parcours de test** plutôt que contenu réel : le test vérifie aussi le
  cas d'une écriture arabe partielle (une variante sans), qui n'existera
  peut-être jamais dans le vrai contenu.
- Les choix du quiz restent en latin (décision d'affichage, fonctionnel
  §3.7) : le quiz n'utilise pas ces composants pour ses choix.

## Notions

- **`writingDirection: 'rtl'`** : le texte est mis en page de droite à
  gauche (le point d'interrogation « ؟ » se place à gauche, comme il se
  doit en arabe).
- **`accessibilityLanguage="ar"`** : indique la langue du texte aux lecteurs
  d'écran, qui changent alors de voix.
- **`jest.mock` d'un module de l'application** : remplace le registre
  `parcours` par un parcours de test pour ce seul fichier de tests.
