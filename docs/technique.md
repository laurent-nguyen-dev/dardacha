# Document technique — Dardacha (application mobile)

Ce document décrit **comment** l'application est construite aujourd'hui. Il
est appelé à évoluer. Le « quoi » est dans [fonctionnel.md](fonctionnel.md).

## 1. Choix de la pile

| Domaine                   | Choix                                                             | Pourquoi                                                                                                                                                                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework                 | **Expo SDK 58** (React Native 0.88)                               | Un seul code pour Android et iPhone ; compilation iOS dans le cloud (EAS Build), donc sans Mac ; proche du JavaScript de la version web. Versions vérifiées sur npm le 30 oct. 2026.                                                                                                        |
| Langage                   | **TypeScript** (mode `strict`)                                    | Le typage du contenu (modules, séances, expressions) attrape les erreurs de saisie dès la compilation.                                                                                                                                                                                      |
| Navigation                | **expo-router**                                                   | Navigation par fichiers, gère le retour système Android et le geste retour iOS.                                                                                                                                                                                                             |
| Voix                      | **expo-speech**                                                   | Utilise la synthèse vocale native (Android TTS, iOS AVSpeechSynthesizer).                                                                                                                                                                                                                   |
| Stockage local            | **@react-native-async-storage/async-storage**                     | Stockage clé/valeur persistant, suffisant pour une liste de séances terminées.                                                                                                                                                                                                              |
| Tests                     | **Jest** (preset `jest-expo`) + **React Native Testing Library**  | Tests unitaires de la logique (quiz, correcteur, progression) et tests d'écrans.                                                                                                                                                                                                            |
| Qualité                   | ESLint (config Expo) + Prettier + `tsc --noEmit`                  | Contrôlés en CI.                                                                                                                                                                                                                                                                            |
| Distribution v1           | **APK fabriqué par GitHub Actions** (`.github/workflows/apk.yml`) | À chaque push : `expo prebuild` puis `gradlew assembleRelease` sur un serveur GitHub ; sur `main`, l'APK est publié dans la Release de test `apk-test` (artefact de build sur les autres branches). Aucun compte Expo ni outil Android sur l'ordinateur de l'utilisateur. iPhone : Expo Go. |
| Identifiant d'application | `dev.laurentnguyen.dardacha`                                      | Android `package` et iOS `bundleIdentifier`. Modifiable jusqu'à la première publication, définitif ensuite.                                                                                                                                                                                 |
| Nom, couleur              | « Dardacha », #102a43                                             | Icône provisoire en attendant les icônes définitives.                                                                                                                                                                                                                                       |

Choix arrêtés avec l'utilisateur le 30 oct. 2026 : Expo, parité avec la
version web, contenu réécrit, distribution de test uniquement.

### 1.1 Versions installées (T01) et écarts justifiés

Versions alignées sur `expo/bundledNativeModules.json` (la liste officielle
des versions compatibles avec le SDK), installées par `expo install`.

- **Expo 58.0, React Native 0.88.1, React 19.3.0, TypeScript 6.0.**
- **react-dom 19.3.0** : épinglé explicitement. expo-router embarque un
  composant d'onglets web dont la dépendance `react-dom` se résolvait
  sinon en 19.3.1, incompatible avec react 19.3.0. Inutilisé sur mobile.
- **ESLint 9** (et non 10, dernière version) : `eslint-config-expo` 58
  regroupe des plugins pas encore garantis sous ESLint 10. À réévaluer à la
  prochaine version d'Expo.
- **TypeScript 6** ne charge plus automatiquement les paquets `@types/*` :
  `tsconfig.json` déclare `"types": ["jest"]`.

### 1.2 Travailler sans accès aux serveurs d'Expo

Dans un environnement au réseau filtré où le registre npm est accessible
mais pas les serveurs d'Expo (api.expo.dev, docs.expo.dev) — c'était le cas
de l'environnement de développement de la version 1 —, lancer
`expo install` avec `EXPO_OFFLINE=1` : il prend alors les versions de
`bundledNativeModules.json`, c'est-à-dire exactement les versions
compatibles avec le SDK. Les API se vérifient alors dans le code source
des paquets installés (`node_modules/…/build/*.d.ts`).

## 2. Architecture prévue

```
src/
  app/                  écrans (expo-router) — chaque fichier est une route
    _layout.tsx         pile d'écrans + barre permanente + progression
    index.tsx           Menu (F01)
    module/[moduleId].tsx   Page module (F02)
    seance/[seanceId].tsx   Page séance (F03–F10)
    revisions.tsx       Révisions (F11)
    memo.tsx            Mémo SMS (F12)
  content/              contenu pédagogique, données pures typées
    types.ts
    modules/            un fichier par module
    memo.ts
  config.ts             paramètres configurables (fonctionnel §7)
  logic/                logique pure, sans React, testée unitairement
    quiz.ts             F08
    correcteur.ts       F10
    normalisation.ts
    navigation.ts       F04 (séance suivante)
    revisions.ts        F11
  services/
    progression.ts      F05, F06, F13 (AsyncStorage)
    audio.ts            F07 (expo-speech)
  components/           composants d'affichage réutilisables
  theme.ts              couleurs
tests/
  ecrans/               tests d'écrans (hors de src/app, sinon expo-router
                        les prendrait pour des routes)
scripts/
  audit.js              audit des dépendances avec liste d'exceptions
```

Les tests de logique sont placés à côté du code testé (`quiz.test.ts` à côté
de `quiz.ts`). Les routes utilisent les identifiants permanents (§2.1) :
`/seance/salutations-bonjour`, jamais `/module/1/seance/2`. L'alias `@/`
désigne `src/` (tsconfig et Jest).

Principe : **la logique est séparée de l'affichage**. Tout ce qui a une règle
(fonctionnel §6) vit dans `src/logic/` en fonctions pures, testables sans
téléphone. Les écrans ne font qu'afficher et appeler.

Le tirage aléatoire du quiz reçoit son générateur en paramètre, pour que les
tests soient reproductibles.

### 2.1 Parcours extensible (ajout de modules)

Exigence : ajouter un module = ajouter du contenu, sans toucher aux écrans ni
à `src/logic/` (fonctionnel §3.6).

- **Un fichier par module** dans `src/content/modules/`, conforme au type
  `Module` de `src/content/types.ts`.
- **Un registre unique**, `src/content/parcours.ts`, liste les modules dans
  l'ordre d'affichage. Ajouter un module = créer son fichier + l'ajouter au
  registre. Rien d'autre.
- **Identifiants permanents** : chaque module et chaque séance porte un champ
  `id` textuel, choisi à la création et jamais modifié ni réutilisé
  (mot-clé lisible sans lien avec la position : module `salutations`,
  séances `salutations-bonjour`, `salutations-se-presenter`…). La position (numéro affiché « Module 3 ») est
  calculée à partir de l'ordre du registre, jamais stockée.
- **Rien n'est figé dans le code** : nombre de modules, de séances, total
  « N / T », nombre de fiches, rang de séance pour la rotation du quiz — tout
  est dérivé du registre.
- **Progression** : AsyncStorage conserve la liste des `id` de séances
  terminées, sous une clé versionnée (`progression:v1`). Les `id` inconnus du
  contenu courant sont ignorés à l'affichage mais conservés (une séance
  retirée puis remise retrouve sa progression).
- **Contrôle automatique du contenu** : un test Jest parcourt le registre et
  vérifie, pour chaque module : champs obligatoires, 3 à 5 expressions de
  base et 3 supplémentaires par séance, identifiants uniques sur tout le
  parcours, au moins une variante remplie par expression. Un module mal formé
  fait échouer la CI.
- **Guide développeur** : `docs/ajouter-un-module.md`, écrit dans le ticket
  qui crée le registre.
- **Livraison** : un nouveau module nécessite un nouveau build (contenu
  embarqué). Option ultérieure : EAS Update, qui pousse du contenu JavaScript
  sans repasser par un build complet ni par les magasins.

### 2.2 Écriture arabe (version 1.1, fonctionnel §3.7)

- **Modèle** : champ facultatif `arabe?: Partial<Record<Variante, string>>`
  sur `Expression`, à côté de `formes`. Facultatif pour que chaque module
  puisse l'ajouter à son rythme sans casser les autres.
- **Contrôle automatique** (`validation.ts`) : une écriture arabe n'existe
  que pour une variante qui a une forme latine ; elle ne contient que des
  lettres arabes, des espaces, « / », « … » et la ponctuation (؟ ، . ! ?) ;
  elle a autant d'alternatives « / » que la forme latine ; pas de
  parenthèses.
- **Affichage** : `Text` avec `writingDirection: 'rtl'`, police système (les
  polices d'Android et d'iOS contiennent l'arabe ; aucune police à
  embarquer).
- **Écoute** : `BoutonEcouter` lit l'écriture arabe quand elle existe
  (« / » remplacé par « ، » pour une pause), sinon la transcription latine
  préparée par `texteALire`.
- **Correcteur** : `normaliser` unifie aussi l'écriture arabe (voyelles et
  hamza portée retirées par la décomposition Unicode, ـ retiré, ى → ي,
  ة → ه) ; les formes arabes passent par les mêmes `formesRetenues`.

### 2.3 Mini-dialogue de séance (version 1.2, fonctionnel §3.8)

- **Modèle** : champ facultatif `dialogue?: Replique[]` sur `Seance` ; la
  page séance affiche `seance.dialogue ?? miniDialogue` (dialogue commun).
- **Contrôle automatique** : nombre de répliques entre
  `config.dialogueRepliquesMin` et `config.dialogueRepliquesMax`, locuteurs
  A et B en alternance en commençant par A, formes et écriture arabe
  présentes dans les trois variantes, écriture arabe valide (§2.2).

## 3. Correspondance avec la version web

| Version web                                       | Version mobile                                      |
| ------------------------------------------------- | --------------------------------------------------- |
| Synthèse vocale du navigateur (`speechSynthesis`) | expo-speech (moteur natif)                          |
| `localStorage`                                    | AsyncStorage                                        |
| Manifeste + service worker (F14, F15)             | Application native, contenu embarqué dans le paquet |
| Un fichier HTML de 55 Ko                          | Projet Expo multi-fichiers                          |
| Seuil d'affichage 600 px                          | Mise en page fluide ; v1 en portrait téléphone      |

## 4. Plateformes cibles

- **Android 7.0** (API 24) minimum, cible API 36 (React Native 0.88).
- **iOS 16.4** minimum (Expo SDK 58, `Expo.podspec`).
- Téléphones uniquement (`supportsTablet: false`). Orientation portrait verrouillée (`orientation: "portrait"` dans
  `app.json`).

## 5. Voix et langues

Codes de langue demandés : `ar` (MSA), `ar-MA` (darija), `ar-TN` (tounsi).
L'application liste les voix disponibles et choisit, dans l'ordre : la langue
exacte, puis `ar` / `ar-SA`, puis toute voix `ar-*` (fonctionnel §6.3). La disponibilité de `ar-MA` et
`ar-TN` varie selon les appareils ; à mesurer sur les téléphones de test.

Implémentation : `logic/audio.ts` (choix de la voix, texte à lire —
fonctions pures) et `services/audio.ts` (appel à expo-speech). Les codes de
langue sont comparés après normalisation (`ar_MA` sur Android, `ar-MA` sur
iOS → `ar-ma`). La liste des voix est gardée en mémoire après le premier
appel, sauf si elle est vide (moteur Android pas encore prêt).

## 6. Profil de risque

- **Entrées non fiables** : uniquement le texte saisi dans « À toi de
  jouer », traité localement, jamais exécuté ni envoyé. Seul risque : un
  texte très long. Limite de saisie : `reponse_longueur_max` = 1 000
  caractères.
- **Données sensibles** : aucune. La liste des séances terminées n'est pas
  sensible. Pas de compte, pas de secret, pas de réseau.
- **Triche / abus** : sans objet (aucun score partagé, aucun serveur).
- **Hygiène générale** : analyse des dépendances en CI (`npm run audit`),
  aucune clé ni identifiant dans le dépôt (les identifiants EAS / Apple
  restent dans le compte Expo de l'utilisateur).
- **Vulnérabilités acceptées** : listées et justifiées une à une dans
  `audit-allowlist.json`, revues à chaque montée de version d'Expo. À ce
  jour : `zod` (GHSA-mrhx-c7xc-m3w5), utilisé seulement par l'outil Expo au
  moment du build pour valider notre propre configuration, absent de
  l'application livrée.

## 7. Licence et dépendances

- Projet sous **licence MIT** (fichier `LICENSE`), code ouvert.
- Toute nouvelle dépendance doit avoir une licence compatible (MIT, Apache-2.0,
  BSD, ISC…), vérifiée dans la PR qui l'ajoute.
- Dépendances à licence non entièrement permissive (relevé du 30 oct. 2026,
  arbre complet) :
  - `node-forge` : « BSD-3-Clause OR GPL-2.0 » — on retient BSD-3-Clause.
  - `lightningcss` : MPL-2.0 (copyleft faible, par fichier). Outil de build
    CSS pour le web, tiré par Expo ; non livré dans l'application mobile et
    non modifié : aucune obligation pour nous.
  - `@csstools/color-helpers` : MIT-0 (permissive, sans attribution).

## 8. Paramètres configurables internes

Tous les paramètres de `src/config.ts` sont listés dans le document
fonctionnel §7. Aucun paramètre interne caché à ce jour.

## 9. Fabrication de l'APK

- `npx expo prebuild --platform android` génère le projet Android natif
  (dossier `android/`, ignoré par git) à partir d'`app.json`.
- `./gradlew assembleRelease` compile un APK qui **embarque** le code
  JavaScript (fonctionne sans ordinateur ni réseau), pour les processeurs
  `arm64-v8a` et `armeabi-v7a` (la quasi-totalité des téléphones ; les
  émulateurs x86 sont exclus pour réduire le temps de compilation).
- **Signature** : le projet généré signe la version « release » avec la clé
  de test `debug.keystore` fournie par le modèle Expo, identique à chaque
  génération. L'APK s'installe donc directement et chaque nouvelle version
  remplace la précédente. Une publication sur Google Play exigera une vraie
  clé, gardée en secret (évolution n°8).
- **Cache Gradle** (`actions/cache`) : dépendances Android, distribution
  Gradle et transformations, gardées entre deux fabrications ; clé calculée
  sur `package-lock.json` et `app.json`. Ne couvre pas la compilation du code
  natif C++ de React Native, qui reste refaite à chaque fois. GitHub partage
  les caches de `main` avec les autres branches, pas l'inverse.
- **Numéro de version** : `app.json` (`version`, `android.versionCode`) et
  `package.json`, mis à jour ensemble par `scripts/version.js` ;
  `versionCode` = majeur × 10 000 + mineur × 100 + correctif, pour qu'une
  version plus récente ait toujours un numéro plus grand (exigence
  d'Android pour installer une mise à jour).
- **Versions numérotées** : workflow `release.yml`, lancé à la main
  (`workflow_dispatch`) avec un numéro et un commit ; il fabrique l'APK de ce
  commit avec ce numéro et crée la release `vX.Y.Z` (tag sur ce commit).
  Le workflow vient toujours de `main`, le code fabriqué du commit choisi :
  on peut donc publier une version passée. Refus si la release existe déjà.
- **Publication** : sur `main` uniquement, Release GitHub `apk-test`
  (pré-version), supprimée et recréée à chaque fabrication. Sur toute
  branche, l'APK est conservé en artefact du build, ce qui permet d'essayer
  une branche sans écraser la version proposée au public. Le workflow a la
  permission d'écrire dans le dépôt (Releases) uniquement pour cela.

## 10. Intégration continue

À chaque push et PR : `npm ci`, `npm run typecheck`, `npm run lint`,
`npm run format:check`, `npm test`, `npm run audit`. Les builds EAS sont
lancés à la main pour les jalons.
