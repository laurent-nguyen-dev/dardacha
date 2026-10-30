# Document technique — Arabe au quotidien (application mobile)

Ce document décrit **comment** l'application est construite aujourd'hui. Il
est appelé à évoluer. Le « quoi » est dans [fonctionnel.md](fonctionnel.md).

## 1. Choix de la pile

| Domaine | Choix | Pourquoi |
| --- | --- | --- |
| Framework | **Expo SDK 58** (React Native 0.88) | Un seul code pour Android et iPhone ; compilation iOS dans le cloud (EAS Build), donc sans Mac ; proche du JavaScript de la version web. Versions vérifiées sur npm le 30 oct. 2026. |
| Langage | **TypeScript** (mode `strict`) | Le typage du contenu (modules, séances, expressions) attrape les erreurs de saisie dès la compilation. |
| Navigation | **expo-router** | Navigation par fichiers, gère le retour système Android et le geste retour iOS. |
| Voix | **expo-speech** | Utilise la synthèse vocale native (Android TTS, iOS AVSpeechSynthesizer). |
| Stockage local | **@react-native-async-storage/async-storage** | Stockage clé/valeur persistant, suffisant pour une liste de séances terminées. |
| Tests | **Jest** (preset `jest-expo`) + **React Native Testing Library** | Tests unitaires de la logique (quiz, correcteur, progression) et tests d'écrans. |
| Qualité | ESLint (config Expo) + Prettier + `tsc --noEmit` | Contrôlés en CI. |
| Distribution v1 | **Expo Go** + **EAS Build** (profil `preview`) | Développement et tests via Expo Go sur Android et iPhone ; APK Android via EAS Build ; build iPhone seulement si un compte Apple Developer est ouvert. |
| Identifiant d'application | `dev.laurentnguyen.dardacha` | Android `package` et iOS `bundleIdentifier`. Modifiable jusqu'à la première publication, définitif ensuite. |
| Nom, couleur | « Arabe au quotidien », #102a43 | Icône provisoire en attendant les icônes définitives. |

Choix arrêtés avec l'utilisateur le 30 oct. 2026 : Expo, parité avec la
version web, contenu réécrit, distribution de test uniquement.

## 2. Architecture prévue

```
app/                    écrans (expo-router)
  _layout.tsx           barre permanente + progression globale
  index.tsx             Menu (F01)
  module/[m].tsx        Page module (F02)
  seance/[m]/[s].tsx    Page séance (F03–F10)
  revisions.tsx         Révisions (F11)
  memo.tsx              Mémo SMS (F12)
src/
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
```

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

## 3. Correspondance avec la version web

| Version web | Version mobile |
| --- | --- |
| Synthèse vocale du navigateur (`speechSynthesis`) | expo-speech (moteur natif) |
| `localStorage` | AsyncStorage |
| Manifeste + service worker (F14, F15) | Application native, contenu embarqué dans le paquet |
| Un fichier HTML de 55 Ko | Projet Expo multi-fichiers |
| Seuil d'affichage 600 px | Mise en page fluide ; v1 en portrait téléphone |

## 4. Plateformes cibles

Minimums d'Expo SDK 58 (à confirmer à l'initialisation du projet et à noter
ici). Orientation portrait verrouillée (`orientation: "portrait"` dans
`app.json`).

## 5. Voix et langues

Codes de langue demandés : `ar` (MSA), `ar-MA` (darija), `ar-TN` (tounsi).
L'application liste les voix disponibles et choisit, dans l'ordre : la langue
exacte, puis `ar` / `ar-SA`, puis toute voix `ar-*` (fonctionnel §6.3). La disponibilité de `ar-MA` et
`ar-TN` varie selon les appareils ; à mesurer sur les téléphones de test.

## 6. Profil de risque

- **Entrées non fiables** : uniquement le texte saisi dans « À toi de
  jouer », traité localement, jamais exécuté ni envoyé. Seul risque : un
  texte très long. Limite de saisie : `reponse_longueur_max` = 1 000
  caractères.
- **Données sensibles** : aucune. La liste des séances terminées n'est pas
  sensible. Pas de compte, pas de secret, pas de réseau.
- **Triche / abus** : sans objet (aucun score partagé, aucun serveur).
- **Hygiène générale** : analyse des dépendances en CI (`npm audit`), aucune
  clé ni identifiant dans le dépôt (les identifiants EAS / Apple restent dans
  le compte Expo de l'utilisateur).

## 7. Licence et dépendances

- Projet sous **licence MIT** (fichier `LICENSE`), code ouvert.
- Toute nouvelle dépendance doit avoir une licence compatible (MIT, Apache-2.0,
  BSD, ISC…), vérifiée dans la PR qui l'ajoute.
- Dépendances à licence non permissive : **aucune** à ce jour.

## 8. Paramètres configurables internes

Tous les paramètres de `src/config.ts` sont listés dans le document
fonctionnel §7. Aucun paramètre interne caché à ce jour.

## 9. Intégration continue (prévue)

À chaque PR : `npm ci`, `tsc --noEmit`, ESLint, Jest, `npm audit
--audit-level=high`. Les builds EAS sont lancés à la main pour les jalons.
