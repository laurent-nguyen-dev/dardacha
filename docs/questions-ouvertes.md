# Questions ouvertes

Liste unique de ce qui reste à décider. Chaque question a une **proposition
par défaut** : réponds « OK » ou corrige. Une question tranchée passe dans la
section « Tranchées », avec sa réponse, et le document concerné est mis à
jour dans le même commit.

## Bloque la version 1

### Contenu

- **Q-01 — Qui écrit le contenu des 24 séances ?** Il faut environ 24 × 6 à 8
  expressions × 3 variantes, plus contextes, défis, dialogues et consignes.
  *Proposition :* je rédige un premier jet module par module, tu le relis, et
  chaque module est marqué « non relu par un natif » tant qu'il ne l'a pas
  été. ⚠️ Je ne suis pas un locuteur natif : pour la darija et le tounsi en
  particulier, mon premier jet contiendra des erreurs. Une relecture native
  reste la priorité n°1 avant tout usage sérieux.
- **Q-02 — Avertissement dans l'application.** *Proposition :* une ligne sur
  le Menu : « Contenu en cours de relecture par des locuteurs natifs. »
- **Q-03 — Transcription latine.** Quelle convention ? *Proposition :*
  chiffres du chat (2 = ء, 3 = ع, 5 = خ, 7 = ح, 9 = ق, 6 = ط), cohérente avec
  le mémo SMS ; voyelles longues non marquées (« salam », pas « salâm »).
- **Q-07 — Formules de la correction type (F09).** Lesquelles ?
  *Proposition :* les 4 premières expressions de base de la séance (ou
  toutes s'il y en a moins de 4).
- **Q-08 — Mini-dialogue.** La version web a le même dialogue dans les 24
  séances. Comme le contenu est réécrit de toute façon, en écrire un par
  séance coûte peu. *Proposition :* parité pour la v1 (un dialogue commun) ;
  dialogues par séance en évolution n°3.
- **Q-09 — Fiches de révision dont une variante est vide** (cas « 3 » et
  « 7 » du module 3 en version web). *Proposition :* en réécrivant le
  contenu, s'assurer que les 2 premières expressions de base de chaque séance
  ont les trois variantes remplies : le défaut disparaît sans changer la
  règle.
- **Q-10 — Quiz du mémo (F12).** Format non précisé dans le cahier web.
  *Proposition :* 5 questions « Quelle lettre arabe remplace le chiffre X ? »,
  3 choix, chiffres tirés sans répétition parmi les 6.

### Règles imprécises du cahier web

- **Q-04 — Rotation des variantes dans le quiz.** *Proposition :* avec n = numéro
  global de la séance (1 à 24), la question 1 porte sur la variante
  `(n − 1) mod 3` dans l'ordre MSA, darija, tounsi, puis les deux suivantes
  dans l'ordre circulaire. Séance 1 : MSA, darija, tounsi ; séance 2 : darija,
  tounsi, MSA ; etc.
- **Q-05 — Question 4 (sens d'une expression).** Dans quelle variante est
  affichée la forme ? *Proposition :* une variante tirée au hasard parmi
  celles où la forme est éligible.
- **Q-06 — Choix des expressions interrogées.** *Proposition :* tirage au
  hasard parmi les éligibles, sans répétition dans un même quiz.
- **Q-11 — Ordre des « 6 premières expressions » du correcteur.**
  *Proposition :* expressions de base d'abord, puis supplémentaires.
- **Q-12 — Reconnaissance d'une forme dans le texte.** Sous-chaîne simple, ou
  mot entier ? *Proposition :* mot(s) entier(s) — « la » ne doit pas être
  reconnu dans « salam ». (La longueur min. de 3 limite déjà le problème, mais
  « bes » serait trouvé dans « besoin ».)
- **Q-13 — Repli de voix.** *Proposition :* darija : ar-MA → ar → toute voix
  arabe ; tounsi : ar-TN → ar → toute voix arabe ; MSA : ar / ar-SA → toute
  voix arabe. Pas de message quand on se replie, seulement quand il n'y a
  aucune voix arabe.

### Technique et distribution

- **Q-14 — Test sur iPhone.** Installer une application de test sur iPhone
  exige un compte Apple Developer (99 $/an), même hors App Store, sauf
  l'application Expo Go (gratuite, pour le développement). *Proposition :*
  développement et tests via **Expo Go** sur les deux téléphones ; APK
  Android installable dès le premier jalon ; compte Apple seulement si tu
  veux une vraie icône sur l'iPhone.
- **Q-15 — Longueur max de la réponse libre.** *Proposition :* 1 000
  caractères (paramètre configurable).
- **Q-16 — Mode sombre.** *Proposition :* non en v1 (clair uniquement).
- **Q-17 — Nom, icône, couleurs.** *Proposition :* nom « Arabe au
  quotidien », couleur principale #102a43 comme la version web. Les icônes de
  la version web peuvent-elles être reprises (il faudrait me les fournir) ?
  Sinon, j'en crée une provisoire.
- **Q-18 — Identifiant d'application.** Nécessaire pour Android et iOS.
  *Proposition :* `dev.laurentnguyen.dardacha` (modifiable avant toute
  publication, définitif ensuite).

### Parcours extensible

- **Q-19 — Nombre de séances par module.** Toujours 3, ou variable ?
  *Proposition :* variable (au moins 1), pour ne pas contraindre les futurs
  modules ; les 8 modules initiaux en ont 3. Le coût est nul si c'est prévu
  dès le départ.
- **Q-20 — Livraison des nouveaux modules.** *Proposition :* par mise à jour
  de l'application (nouveau build) en v1 ; téléchargement de contenu à la
  volée exclu (cela imposerait du réseau et un serveur, contraires au
  fonctionnement hors ligne et sans collecte).
- **Q-21 — Format des identifiants.** *Proposition :* un mot-clé lisible,
  sans lien avec la position : module `salutations`, séances
  `salutations-bonjour`, `salutations-se-presenter`… (plutôt que `m1-s2`, qui
  invite à renuméroter quand on insère un module).

## Bloque une version ultérieure

- Relecteurs natifs (marocain, tunisien) : qui ?
- Publication sur les magasins : fiches, captures, politique de
  confidentialité.

## Tranchées

| Date | Question | Décision |
| --- | --- | --- |
| 2026-10-30 | Technologie | Expo / React Native |
| 2026-10-30 | Source du contenu | Réécrit (le contenu de la version web n'est pas repris) |
| 2026-10-30 | Périmètre v1 | Parité fonctionnelle avec la version web |
| 2026-10-30 | Distribution v1 | Tests sur les téléphones de l'utilisateur, sans publication |
