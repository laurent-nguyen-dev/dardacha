# Backlog

Tickets de la version 1, groupés en sprints. Chaque ticket donne un commit
(ou une PR) qui explique le pourquoi, et une entrée dans le
[journal](journal/README.md). L'ordre suit les dépendances réelles, pas
l'ordre des chapitres de la spécification.

## Sprint 1 — Squelette navigable

**Terminé le 30 oct. 2026.** Reste à faire par l'utilisateur : essai sur
téléphone via Expo Go (docs/exploitation.md).

**Jalon** : l'application s'ouvre dans Expo Go et l'on navigue Menu → Module →
Séance → Séance suivante sur un module de contenu réel.

| Ticket | Titre                                                                                  | Dépend de | État |
| ------ | -------------------------------------------------------------------------------------- | --------- | ---- |
| T01    | Projet Expo (SDK 58, TypeScript strict, ESLint, Prettier, Jest)                        | —         | fait |
| T02    | Intégration continue (types, lint, tests, audit des dépendances)                       | T01       | fait |
| T03    | Modèle de contenu, contrôle automatique, guide « ajouter un module »                   | T01       | fait |
| T04    | Logique de parcours : rang, séance suivante (F04), totaux                              | T03       | fait |
| T05    | Navigation : Menu (F01), Module (F02), Séance (F03, squelette), barre permanente       | T04       | fait |
| T19    | APK Android de test fabriqué par GitHub Actions (avancé à la demande de l'utilisateur) | T01       | fait |
| T06    | Registre du parcours + contenu du module 1 (premier jet, non relu) — avancé avant T04  | T03       | fait |

## Sprint 2 — Progression et écoute

**Jalon** : on peut terminer des séances (progression conservée), lire une
séance complète jusqu'au mini-dialogue et écouter chaque expression ; deux
modules de contenu.

| Ticket | Titre                                                            | Dépend de | État    |
| ------ | ---------------------------------------------------------------- | --------- | ------- |
| T07    | Service de progression (F05, F06, F13), stockage par identifiant | T04       | fait    |
| T08    | Page séance complète : sections 1 à 6 de la structure            | T05       | fait    |
| T09    | Écoute (F07) : choix de voix, repli, message sans voix arabe     | T08       | à faire |
| T10    | Contenu du module 2 « Prendre des nouvelles »                    | T03       | à faire |

## Sprint 3 — Exercices

| Ticket | Titre                                          | Dépend de |
| ------ | ---------------------------------------------- | --------- |
| T11    | Normalisation de texte                         | —         |
| T12    | Quiz de séance (F08), logique puis écran       | T08       |
| T13    | Correction type du défi oral (F09)             | T08       |
| T14    | Correcteur de réponse libre (F10)              | T11, T08  |
| T15    | Contenu des modules 3 et 4 (+ données du mémo) | T03       |

## Sprint 4 — Révisions, mémo, livraison de test

| Ticket | Titre                                       | Dépend de |
| ------ | ------------------------------------------- | --------- |
| T16    | Révisions (F11)                             | T09       |
| T17    | Mémo des chiffres SMS et son quiz (F12)     | T09, T15  |
| T18    | Contenu des modules 5 à 8                   | T03       |
| T20    | Recette sur Android et iPhone (13 critères) | tout      |

## Plus tard

| Ticket | Titre                             |
| ------ | --------------------------------- |
| T21    | Icône définitive de l'application |
