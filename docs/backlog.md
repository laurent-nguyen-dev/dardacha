# Backlog

Tickets de la version 1, groupés en sprints. Chaque ticket donne un commit
(ou une PR) qui explique le pourquoi, et une entrée dans le
[journal](journal/README.md). L'ordre suit les dépendances réelles, pas
l'ordre des chapitres de la spécification.

## Sprint 1 — Squelette navigable

**Jalon** : l'application s'ouvre dans Expo Go et l'on navigue Menu → Module →
Séance → Séance suivante sur un module de contenu réel.

| Ticket | Titre | Dépend de | État |
| --- | --- | --- | --- |
| T01 | Projet Expo (SDK 58, TypeScript strict, ESLint, Prettier, Jest) | — | à faire |
| T02 | Intégration continue (types, lint, tests, audit des dépendances) | T01 | à faire |
| T03 | Modèle de contenu, registre du parcours, contrôle automatique, guide « ajouter un module » | T01 | à faire |
| T04 | Logique de parcours : rang, séance suivante (F04), totaux | T03 | à faire |
| T05 | Navigation : Menu (F01), Module (F02), Séance (F03, squelette), barre permanente | T04 | à faire |
| T06 | Contenu du module 1 « Salutations et présentations » (premier jet, non relu) | T03 | à faire |

## Sprint 2 — Progression et écoute

| Ticket | Titre | Dépend de |
| --- | --- | --- |
| T07 | Service de progression (F05, F06, F13), stockage par identifiant | T04 |
| T08 | Page séance complète : sections 1 à 6 de la structure | T05 |
| T09 | Écoute (F07) : choix de voix, repli, message sans voix arabe | T08 |
| T10 | Contenu du module 2 | T03 |

## Sprint 3 — Exercices

| Ticket | Titre | Dépend de |
| --- | --- | --- |
| T11 | Normalisation de texte | — |
| T12 | Quiz de séance (F08), logique puis écran | T08 |
| T13 | Correction type du défi oral (F09) | T08 |
| T14 | Correcteur de réponse libre (F10) | T11, T08 |
| T15 | Contenu des modules 3 et 4 (+ données du mémo) | T03 |

## Sprint 4 — Révisions, mémo, livraison de test

| Ticket | Titre | Dépend de |
| --- | --- | --- |
| T16 | Révisions (F11) | T09 |
| T17 | Mémo des chiffres SMS et son quiz (F12) | T09, T15 |
| T18 | Contenu des modules 5 à 8 | T03 |
| T19 | Icône provisoire, configuration EAS, APK Android de test | — |
| T20 | Recette sur Android et iPhone (13 critères) | tout |
