# Questions ouvertes

Liste unique de ce qui reste à décider. Chaque question a une **proposition
par défaut**. Une question tranchée passe dans « Tranchées », et le document
concerné est mis à jour dans le même commit.

## Bloque la version 1

Aucune.

## Bloque une version ultérieure

- Relecteurs natifs (marocain, tunisien) : qui ?
- Publication sur les magasins : fiches, captures, politique de
  confidentialité, compte Apple Developer.
- Icônes définitives (celles de la version web, ou nouvelles).
- Recette sur iPhone : pas d'appareil disponible. À jouer avant toute
  publication sur l'App Store (Expo Go suffit, ou un build iOS de test).

## Avant l'ouverture en open source

- Code de conduite (Contributor Covenant) : en ajouter un ?

## Tranchées

| Date       | Réf. | Question                            | Décision                                                                                                           | Reportée dans                      |
| ---------- | ---- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| 2026-10-30 | —    | Technologie                         | Expo / React Native                                                                                                | technique §1                       |
| 2026-10-30 | —    | Source du contenu                   | Réécrit, celui de la version web n'est pas repris                                                                  | fonctionnel §3.5                   |
| 2026-10-30 | —    | Périmètre v1                        | Parité fonctionnelle avec la version web                                                                           | fonctionnel                        |
| 2026-10-30 | —    | Distribution v1                     | Tests sur les téléphones de l'utilisateur, sans publication                                                        | technique §1                       |
| 2026-10-30 | Q-01 | Rédaction du contenu                | Premier jet par l'assistant, module par module, relu par l'utilisateur ; état « non relu par un natif » par module | fonctionnel §3.5                   |
| 2026-10-30 | Q-02 | Avertissement                       | Ligne sur le Menu tant qu'un module n'est pas relu                                                                 | fonctionnel §3.5                   |
| 2026-10-30 | Q-03 | Transcription                       | Chiffres du chat, voyelles longues non marquées                                                                    | fonctionnel §3.5                   |
| 2026-10-30 | Q-04 | Rotation des variantes du quiz      | Question 1 = variante `(r − 1) mod 3`, puis ordre circulaire                                                       | fonctionnel §6.1                   |
| 2026-10-30 | Q-05 | Variante de la question 4           | Tirée au hasard parmi les éligibles                                                                                | fonctionnel §6.1                   |
| 2026-10-30 | Q-06 | Choix des expressions interrogées   | Hasard, sans répétition dans un quiz                                                                               | fonctionnel §6.1                   |
| 2026-10-30 | Q-07 | Formules de la correction type      | 4 premières expressions de base                                                                                    | fonctionnel F09                    |
| 2026-10-30 | Q-08 | Mini-dialogue                       | Commun aux séances en v1 ; par séance en évolution                                                                 | fonctionnel §3.3                   |
| 2026-10-30 | Q-09 | Fiches de révision à variante vide  | Règle de contenu : 2 premières expressions de base complètes                                                       | fonctionnel §3.5                   |
| 2026-10-30 | Q-10 | Quiz du mémo                        | « Quelle lettre remplace X ? », 3 choix, sans répétition                                                           | fonctionnel F12                    |
| 2026-10-30 | Q-11 | Ordre des expressions du correcteur | Base, puis supplémentaires                                                                                         | fonctionnel §6.2                   |
| 2026-10-30 | Q-12 | Reconnaissance dans le correcteur   | Mots entiers                                                                                                       | fonctionnel §6.2                   |
| 2026-10-30 | Q-13 | Repli de voix                       | Langue exacte → arabe standard → toute voix arabe, silencieux                                                      | fonctionnel §6.3                   |
| 2026-10-30 | Q-14 | Tests iPhone                        | Expo Go ; compte Apple seulement si besoin                                                                         | technique §1                       |
| 2026-10-30 | Q-15 | Longueur max réponse libre          | 1 000 caractères, configurable                                                                                     | fonctionnel §7                     |
| 2026-10-30 | Q-16 | Mode sombre                         | Non en v1                                                                                                          | fonctionnel §2                     |
| 2026-10-30 | Q-17 | Nom, couleur, icône                 | « Arabe au quotidien », #102a43, icône provisoire                                                                  | technique §1                       |
| 2026-10-30 | Q-18 | Identifiant d'application           | `dev.laurentnguyen.dardacha`                                                                                       | technique §1                       |
| 2026-10-30 | Q-19 | Séances par module                  | Variable (au moins 1) ; 3 pour les modules initiaux                                                                | fonctionnel §3.1                   |
| 2026-10-30 | Q-20 | Livraison des nouveaux modules      | Mise à jour de l'application, pas de téléchargement                                                                | fonctionnel §3.6                   |
| 2026-10-30 | Q-21 | Format des identifiants             | Mots-clés lisibles sans lien avec la position                                                                      | technique §2.1                     |
| 2026-10-30 | —    | Nom de l'application                | « Dardacha » remplace « Arabe au quotidien » (Q-17)                                                                | technique §1, app.json             |
| 2026-10-31 | —    | Recette v1                          | Validée sur Android ; iPhone reporté faute d'appareil                                                              | recette.md                         |
| 2026-10-31 | —    | Licence du contenu pédagogique      | MIT, comme le code                                                                                                 | LICENSE, README                    |
| 2026-10-31 | —    | Auteure du cahier des charges web   | Mention « @Emma » remplacée par « Marie-Emmanuelle Pichard »                                                       | archives/cahier-des-charges-pwa.md |
