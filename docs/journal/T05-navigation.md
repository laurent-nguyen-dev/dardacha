# T05 — Navigation et premiers écrans

**Fait** : Menu (F01), page Module (F02), page Séance en squelette (F03 :
titre, objectif, contexte, « Retour aux séances », « Séance suivante »),
progression globale (F06) et barre permanente (entrée Menu) sous tous les
écrans, écran « introuvable » pour une adresse inconnue. 5 tests de
navigation sur le vrai contenu.

## Pourquoi

- **Adresses par identifiant** : `/module/salutations`,
  `/seance/salutations-bonjour`. Insérer un module ne change l'adresse
  d'aucune séance.
- **Progression et barre dans le layout racine** : écrites une fois,
  visibles sur tous les écrans, comme l'exige le fonctionnel §4.
- **Hook `useSeancesTerminees`** qui renvoie un ensemble vide pour
  l'instant : les écrans lisent déjà la progression par lui ; T07 branchera
  le stockage sans toucher aux écrans.
- **« Séance suivante » remplace l'écran** (`router.replace`) au lieu
  d'empiler : après plusieurs séances enchaînées, « retour » ramène à la
  page du module, pas à travers toutes les séances vues.
- **« Retour aux séances » et « Menu » utilisent `router.dismissTo`** :
  dépile jusqu'à l'écran visé, ou le remplace s'il n'est pas dans
  l'historique (cas d'une séance ouverte directement).
- **Pas de bouton « Marquer comme terminée » factice** : il arrive avec son
  comportement réel (T07), plutôt qu'un bouton qui ne fait rien.
- **`typedRoutes` désactivé** : ses types sont générés au lancement du
  serveur Expo, donc absents en CI, où `tsc` échouerait.
- **Vérification hors tests** : `expo export` produit les bundles Android et
  iOS sans erreur (2,5 Mo chacun). L'essai sur téléphone, via Expo Go,
  reste à faire par l'utilisateur.

## Notions

- **`useLocalSearchParams`** : lit les paramètres de l'adresse. Pour
  `src/app/seance/[seanceId].tsx` ouvert sur `/seance/salutations-bonjour`,
  il renvoie `{ seanceId: 'salutations-bonjour' }`.
- **`<Stack.Screen options={…} />`** placé dans un écran : règle le titre de
  la barre du haut pour cet écran.
- **Accessibilité** : `accessibilityRole="button"`, `accessibilityState`
  (désactivé) et `accessibilityLabel` font lire aux lecteurs d'écran
  (TalkBack, VoiceOver) une phrase utile, par ex. « Module 1, Salutations
  et présentations, 0 sur 3 séances terminées ». Les tests retrouvent les
  boutons par ce même rôle et ce même nom (`getByRole('button', { name })`)
  : si un test les trouve, un lecteur d'écran aussi.
- **`act` asynchrone** : la navigation met l'écran à jour en différé. Les
  tests attendent la fin de l'appui (`await act(async () => …)`) avant de
  vérifier l'adresse.
