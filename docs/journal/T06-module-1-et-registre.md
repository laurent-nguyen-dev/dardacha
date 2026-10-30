# T06 — Registre du parcours et module 1

**Fait** : registre `src/content/parcours.ts`, premier module
`src/content/modules/salutations.ts` (3 séances, premier jet **non relu par
un natif**), et test qui applique le contrôle de structure au vrai contenu.

Ticket avancé avant T04 et T05 : la logique de parcours et les écrans
seront testés sur du contenu réel plutôt que sur des données factices.

## Pourquoi

- **Registre = une liste ordonnée** : l'ordre du tableau est l'ordre
  d'affichage. Le numéro « Module 1 » n'est écrit nulle part ; il sera
  calculé (T04).
- **Identifiants lisibles** (`salutations-se-presenter`) : en lisant une
  progression enregistrée ou une adresse d'écran, on sait de quoi il s'agit,
  et rien n'invite à renuméroter si l'on insère un module.
- **Convention de transcription complétée** : « ou », « ch », « gh », « j »
  pour les sons qui ont une graphie française naturelle (spécification
  amendée, fonctionnel §3.5).

## À relire (contenu)

Points dont je suis le moins sûr, à vérifier en priorité par un natif :
« Bonne nuit » en darija et en tounsi, « Enchanté » (mtcharfin /
mitcharfin), « Je parle un peu arabe » en darija et en tounsi.

## Notions

- **`readonly Module[]`** : le registre ne peut pas être modifié par le
  reste du code (pas de `push` accidentel) ; seul ce fichier le définit.
