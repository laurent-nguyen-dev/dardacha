# Dardacha

[![CI](https://github.com/laurent-nguyen-dev/dardacha/actions/workflows/ci.yml/badge.svg)](https://github.com/laurent-nguyen-dev/dardacha/actions/workflows/ci.yml)
[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE)

**Apprendre l'arabe parlé du quotidien, en français, en comparant trois
variantes : l'arabe littéraire moderne (MSA), la darija marocaine et le
tounsi tunisien.**

« Dardacha » (دردشة) veut dire « la conversation, la causette ».

> _English summary: Dardacha is a free, open-source mobile app (Android and
> iPhone, built with Expo / React Native) that teaches everyday spoken Arabic
> to French speakers by comparing Modern Standard Arabic, Moroccan Darija and
> Tunisian Arabic side by side. The interface and documentation are in
> French. Contributions from native speakers are especially welcome._

## L'application

- **8 modules, 24 séances de 5 à 10 minutes** : salutations, prendre des
  nouvelles, SMS et WhatsApp, vie quotidienne, sorties, expressions
  familières, sentiments, conversations spontanées.
- **Chaque expression dans les trois variantes**, en transcription latine,
  avec sa traduction et un bouton d'écoute (voix de synthèse du téléphone).

  | Variante               | Couleur | Exemple : « Au revoir » |
  | ---------------------- | ------- | ----------------------- |
  | Arabe littéraire (MSA) | bleu    | ma3a as-salama          |
  | Darija (Maroc)         | vert    | bslama                  |
  | Tounsi (Tunisie)       | orange  | bislema                 |

- **Exercices** : quiz corrigé, défi oral avec correction type, réponse
  libre avec un correcteur qui repère les expressions de la séance.
- **Révisions** et **mémo des chiffres SMS** (le 3, le 7, le 9… de
  WhatsApp).
- **Hors ligne, sans compte, sans publicité, sans collecte de données** :
  la seule donnée conservée est la liste des séances terminées, sur le
  téléphone.

## État du projet

- **Version 1 terminée** : les 15 fonctions du
  [cahier des charges](docs/cahier-des-charges.md). Recette validée sur
  Android ; pas encore jouée sur iPhone.
- ⚠️ **Le contenu linguistique n'a pas encore été relu par des locuteurs
  natifs.** C'est un premier jet ; l'application l'indique sur son menu.
  Toute correction est bienvenue (voir « Contribuer »).
- La prononciation est approximative : la voix lit une transcription latine.
  L'ajout de l'écriture arabe est la prochaine évolution prévue.

## Installer

- **Android** : télécharger `dardacha.apk` depuis la
  [version de test](https://github.com/laurent-nguyen-dev/dardacha/releases/tag/apk-test),
  puis l'ouvrir sur le téléphone (Android demande d'autoriser l'installation
  la première fois). Détails : [exploitation.md](docs/exploitation.md).
- **iPhone** : pas encore de version installable ; on peut lancer
  l'application avec Expo Go depuis les sources (voir « Développer »).

Le son demande une voix arabe installée sur le téléphone ; l'application
explique comment en ajouter une si besoin.

## Contribuer

Les contributions sont les bienvenues, en particulier :

- **Relecture par des locuteurs natifs** (marocains et tunisiens surtout) :
  signaler une expression fausse ou peu naturelle avec le modèle d'issue
  « Correction de contenu », ou corriger directement le fichier du module
  dans [`src/content/modules/`](src/content/modules/).
- **Nouveaux modules** : un module est un simple fichier de contenu, sans
  code à écrire — voir [ajouter-un-module.md](docs/ajouter-un-module.md).
- **Code** : voir [CONTRIBUTING.md](CONTRIBUTING.md).

Toute participation suit le [code de conduite](CODE_OF_CONDUCT.md).

## Développer

Prérequis : Node.js 22 ou plus récent.

```sh
npm install
npm start          # serveur Expo ; scanner le QR code avec l'application Expo Go
```

Contrôles, les mêmes qu'en intégration continue :

```sh
npm run typecheck     # types TypeScript
npm run lint          # analyse du code (ESLint)
npm run format:check  # mise en forme (Prettier) ; `npm run format` corrige
npm test              # tests (Jest)
npm run audit         # vulnérabilités des dépendances
```

Organisation du code :

```
src/app/         écrans (expo-router : un fichier = un écran)
src/components/  composants d'affichage
src/content/     contenu pédagogique (un fichier par module) et son contrôle
src/logic/       règles (quiz, correcteur, parcours…), fonctions pures testées
src/services/    accès au téléphone (voix, stockage)
```

## Documentation

| Pour qui     | Document                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| Tous         | [Cahier des charges](docs/cahier-des-charges.md)                                                       |
| Produit      | [Document fonctionnel](docs/fonctionnel.md) — ce que fait l'application, règle par règle               |
| Développeurs | [Document technique](docs/technique.md), [backlog](docs/backlog.md), [journal](docs/journal/README.md) |
| Exploitation | [Installer et tester](docs/exploitation.md), [fiche de recette](docs/recette.md)                       |
| Utilisateurs | [Guide d'utilisation](docs/utilisateur.md)                                                             |
| Reprendre    | [PROJECT_STATE.md](PROJECT_STATE.md) — où en est le projet, à lire avant toute session de travail      |

Le projet est développé avec l'aide d'un assistant de programmation
(Claude Code) ; le [journal](docs/journal/README.md) explique, ticket par
ticket, ce qui a été fait et pourquoi.

## Licence

[MIT](LICENSE) © 2026 Laurent Nguyen.
