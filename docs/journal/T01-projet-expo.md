# T01 — Projet Expo

**Fait** : squelette de l'application avec Expo SDK 58, TypeScript strict,
expo-router, ESLint, Prettier, Jest, et un script d'audit des dépendances.
L'application affiche un écran « Arabe au quotidien ».

## Pourquoi ces choix

- **Modèle de départ « blank-typescript »** plutôt que le modèle par défaut :
  ce dernier contient des onglets, un thème sombre et des animations qu'il
  aurait fallu supprimer. On est parti du minimum et on a ajouté expo-router.
- **Versions** : toutes alignées sur la liste officielle d'Expo
  (`bundledNativeModules.json`). Les écarts sont justifiés dans
  docs/technique.md §1.1.
- **Audit des dépendances avec liste d'exceptions** plutôt qu'un seuil
  abaissé : une vulnérabilité « high » (zod, dans l'outil Expo) n'a pas de
  correctif compatible. Plutôt que de faire taire tout l'audit, on accepte
  cette vulnérabilité-là, par écrit, avec sa raison
  (`audit-allowlist.json`). Toute nouvelle vulnérabilité fera échouer la CI.

## Notions

- **Expo / React Native** : on écrit l'interface en TypeScript avec des
  composants (`View`, `Text`…) que React Native traduit en vrais composants
  Android et iOS. Expo ajoute l'outillage (serveur de développement, Expo Go,
  builds dans le cloud).
- **Expo Go** : application installée sur le téléphone qui charge notre code
  depuis l'ordinateur. Pas besoin de compiler une application pour tester.
- **expo-router** : la navigation suit les fichiers. `src/app/index.tsx` est
  l'écran d'accueil ; `src/app/seance/[seanceId].tsx` sera l'écran d'une
  séance, `[seanceId]` étant un paramètre. `_layout.tsx` définit la « pile »
  d'écrans : ouvrir un écran l'empile, « retour » le dépile.
- **Conséquence** : un fichier de test placé dans `src/app/` deviendrait un
  écran. Les tests d'écrans vont donc dans `tests/ecrans/`.
- **`renderRouter`** (expo-router/testing-library) monte l'application
  complète en mémoire pour un test, avec sa navigation. Il est asynchrone :
  on l'attend avec `await`.
- **Alias `@/`** : `import { couleurs } from '@/theme'` désigne
  `src/theme.ts`, quel que soit l'emplacement du fichier qui importe.
