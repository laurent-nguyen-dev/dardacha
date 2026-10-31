# Document fonctionnel — Dardacha (application mobile)

Ce document décrit **ce que fait** l'application, indépendamment de la façon
dont elle est construite. Il doit permettre de reconstruire le même produit
avec n'importe quelle technologie. Le « comment » est dans
[technique.md](technique.md). Les points encore non tranchés renvoient à
[questions-ouvertes.md](questions-ouvertes.md) (références `Q-xx`).

Origine : ce document détaille le [cahier des charges mobile](cahier-des-charges.md),
lui-même issu du [cahier des charges de la version web](archives/cahier-des-charges-pwa.md)
(30 oct. 2026), adapté à une application installée sur téléphone Android et
iPhone. Le périmètre de la version 1 est la **parité fonctionnelle** avec la
version web ; les améliorations viennent ensuite (section 9).

---

## 1. Objet

Le nom vient du mot « dardacha » (دردشة) : la conversation, la causette.
La version web s'appelait « Arabe au quotidien ».

Dardacha apprend à un adulte francophone débutant l'arabe parlé du
quotidien, en comparant expression par expression trois variantes :

| Variante                 | Nom affiché | Couleur |
| ------------------------ | ----------- | ------- |
| Arabe littéraire moderne | MSA         | bleu    |
| Arabe marocain           | darija      | vert    |
| Arabe tunisien           | tounsi      | orange  |

La convention de couleur est fixe dans toute l'application.

**Objectifs**

- Comparer les trois variantes sur chaque expression.
- Proposer un parcours court et régulier : 8 modules au départ, 3 séances par
  module, 5 à 10 minutes par séance.
- Pouvoir enrichir le parcours de nouveaux modules au fil du temps (3.6).
- Faire pratiquer à l'écrit (quiz, réponse libre) et à l'oral (défi oral,
  écoute).
- Expliquer l'écriture SMS avec chiffres (2, 3, 5, 6, 7, 9).
- Fonctionner entièrement sans connexion, dès l'installation.

## 2. Utilisateur et périmètre

Adulte francophone débutant, qui apprend seul, sur téléphone, par petites
séances. Interface entièrement en français.

| Inclus (version 1)                                   | Exclu (version 1)                                   |
| ---------------------------------------------------- | --------------------------------------------------- |
| 8 modules initiaux (24 séances), parcours extensible | Alphabet et lecture de l'écriture arabe             |
| Tableaux comparatifs MSA / darija / tounsi           | Compte utilisateur, synchronisation entre appareils |
| Écoute par voix de synthèse de l'appareil            | Enregistrements de voix humaines                    |
| Quiz corrigé, correcteur de réponse libre            | Évaluation de la grammaire, répétition espacée      |
| Révisions, mémo des chiffres SMS                     | Séance de révision dédiée                           |
| Installation sur Android et iPhone (version de test) | Publication sur les magasins d'applications         |
| Fonctionnement hors ligne complet                    | Mode sombre                                         |

## 3. Contenu pédagogique

### 3.1 Parcours

Parcours initial (version 1). Le nombre de modules n'est pas figé : voir 3.6.

| N°  | Module                       | Objectif                                                    |
| --- | ---------------------------- | ----------------------------------------------------------- |
| 1   | Salutations et présentations | Dire bonjour, se présenter, faire connaissance              |
| 2   | Prendre des nouvelles        | Demander comment va quelqu'un et répondre                   |
| 3   | SMS et WhatsApp              | Écrire des messages courts, comprendre les chiffres du chat |
| 4   | Vie quotidienne              | Parler de ses habitudes, de son travail, de ses journées    |
| 5   | Amis et sorties              | Proposer, accepter, refuser, fixer un rendez-vous           |
| 6   | Expressions familières       | Réagir, plaisanter, exprimer ses émotions                   |
| 7   | Relations et sentiments      | Parler d'amitié et d'affection avec tact                    |
| 8   | Conversations spontanées     | Enchaîner les sujets, demander de répéter                   |

Chaque module a une icône, un titre, une description courte et des séances
(au moins 1 ; 3 pour les modules initiaux). Chaque séance a un titre et un
objectif.

### 3.2 Expression

Une **expression** est l'unité de contenu. Elle comporte :

- un sens en français ;
- une forme par variante (MSA, darija, tounsi), en transcription latine ;
- éventuellement aucune forme dans une variante (notée « — ») ;
- éventuellement plusieurs formes alternatives dans une variante, séparées
  par « / » ;
- éventuellement des précisions entre parenthèses, qui ne font pas partie de
  la forme (ex. genre de l'interlocuteur) ;
- **éventuellement, pour chaque variante qui a une forme, son écriture
  arabe** (version 1.1, voir 3.7). Elle reprend les mêmes alternatives, dans
  le même ordre, séparées par « / », sans les précisions entre parenthèses.

Chaque séance contient **3 à 5 expressions de base** et **3 expressions
supplémentaires**.

### 3.3 Structure d'une séance (ordre d'affichage)

1. **Objectif** de la séance.
2. **Contexte et usage** : un conseil sur les variantes et le genre de
   l'interlocuteur.
3. **Expressions supplémentaires**, avec un bouton d'écoute par variante.
4. **Défi oral** : une consigne, et un bouton « Voir la correction type »
   (voir F09).
5. **Vocabulaire comparé** : tableau français / MSA / darija / tounsi des
   expressions de base, avec bouton d'écoute par variante.
6. **À retenir** et **mini-dialogue** : le dialogue propre à la séance s'il
   existe (version 1.2, voir 3.8), sinon le dialogue commun de 3 répliques.
7. **Vérifie ta compréhension** : quiz de 4 questions (F08).
8. **À toi de jouer** : consigne de réponse libre, zone de saisie et bouton
   « Corriger ma réponse » (F10).

Dans les séances d'un module marqué comme lié au mémo (aujourd'hui « SMS et
WhatsApp »), un bouton ouvre le mémo des chiffres SMS. Le lien est une
propriété du module, pas de sa position : il suit le module si l'ordre du
parcours change.

### 3.4 Mémo des chiffres SMS

Pour chaque chiffre 2, 3, 5, 6, 7, 9 : la lettre arabe qu'il remplace, le son,
une indication de prononciation et des exemples (transcription, écriture
arabe, sens) avec bouton d'écoute.

### 3.5 Rédaction du contenu

Le contenu de la version 1 est **réécrit** (celui de la version web n'est pas
repris), module par module : premier jet rédigé avec l'assistant, relu par
l'auteur du projet. Chaque module porte un état de relecture native
(« non relu » / « relu »).

Tant qu'au moins un module n'est pas relu par un locuteur natif, le Menu
affiche : « Contenu en cours de relecture par des locuteurs natifs. »

**Transcription latine** : chiffres du chat pour les sons sans équivalent
français (2 = ء, 3 = ع, 5 = خ, 6 = ط, 7 = ح, 9 = ق), cohérents avec le mémo
SMS ; voyelles longues non marquées (« salam », pas « salâm »).

**Règle de contenu** : les 2 premières expressions de base de chaque séance
(reprises dans les révisions) ont obligatoirement une forme dans les trois
variantes, qui ne commence pas par un chiffre.

### 3.7 Écriture arabe (version 1.1)

L'écriture arabe complète la transcription latine ; elle ne la remplace pas.
L'apprentissage de l'alphabet reste hors périmètre.

- **Facultative, module par module** : un module sans écriture arabe
  s'affiche et fonctionne exactement comme en version 1. Une expression peut
  avoir l'écriture arabe pour certaines variantes seulement.
- **Affichage** : partout où une forme est affichée (expressions
  supplémentaires, vocabulaire comparé, mini-dialogue, correction type,
  correction du quiz, suggestions du correcteur, révisions), son écriture
  arabe apparaît **sous** la transcription latine, de droite à gauche. Les
  choix du quiz restent en transcription latine.
- **MSA sans voyelles** (sans harakat), comme dans l'usage courant et comme
  la darija et le tounsi.
- **Darija et tounsi : orthographe d'usage courant**, telle que les
  locuteurs l'écrivent le plus souvent, en gardant l'orthographe du MSA pour
  les mots communs (« بسلامة », « عسلامة »). Aucune orthographe officielle
  n'existe : la relecture native tranche.
- L'écriture arabe est relue par des natifs comme le reste du contenu
  (3.5) : l'état « relu » d'un module couvre les deux écritures.

### 3.8 Mini-dialogue de séance (version 1.2)

- **Facultatif, séance par séance** : une séance peut avoir son propre
  mini-dialogue ; sinon elle affiche le dialogue commun (version 1). Un
  nouveau module peut donc être ajouté sans dialogue.
- **3 à 6 répliques** (paramètres `dialogue_repliques_min` et
  `dialogue_repliques_max`), dites par **A et B en alternance**, en
  commençant par A.
- **Chaque réplique est complète** : un sens en français, une forme dans
  chacune des trois variantes et son écriture arabe (3.7). Les répliques
  s'écoutent comme les autres expressions.
- **Règle de rédaction** (non vérifiée automatiquement) : le dialogue met en
  scène la situation de la séance et réemploie ses expressions.

### 3.6 Évolution du parcours

L'application doit permettre d'ajouter des modules plus tard **sans modifier
ses fonctions** : un nouveau module est uniquement du contenu.

- Le nombre de modules n'est pas fixé. Tous les écrans, totaux et
  pourcentages se calculent à partir du contenu présent (aucun « 8 » ni
  « 24 » figé).
- Chaque module et chaque séance a un **identifiant permanent**, distinct de
  sa position dans le parcours. Un identifiant n'est jamais modifié ni
  réutilisé. L'ordre d'affichage est défini séparément et peut changer.
- La progression se rattache à ces identifiants : ajouter, insérer ou
  réordonner des modules ne fait perdre ni ne décale aucune séance terminée.
- À l'ajout d'un module, le total augmente : un utilisateur à « 24 / 24 »
  passe à « 24 / 27 » et voit le nouveau module à 0 %.
- Si un module ou une séance est retiré, sa progression n'est plus comptée
  ni affichée ; elle est réutilisée si le contenu revient sous le même
  identifiant.
- Un nouveau module respecte la même structure de séance (3.3) et les mêmes
  règles de contenu (3.2) que les modules initiaux.
- Les nouveaux modules arrivent par une mise à jour de l'application. Aucun
  téléchargement de contenu à la volée (fonctionnement hors ligne, sans
  réseau).

## 4. Navigation

Écrans : **Menu**, **Module**, **Séance**, **Révisions**, **Mémo SMS**.

Une barre permanente, présente sur tous les écrans, donne accès à : Menu,
Révisions, Mémo, Réinitialiser. La progression globale (F06) est visible sur
tous les écrans.

Le retour système (bouton ou geste « retour » du téléphone) revient à l'écran
précédent ; depuis le Menu, il quitte l'application selon le comportement
habituel du téléphone.

## 5. Fonctions

| Réf. | Fonction                     | Comportement attendu                                                                                                                                                                                                                                       |
| ---- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F01  | Menu principal               | Affiche tous les modules du parcours, dans l'ordre défini, en cartes : icône, titre, description, « N / S séances » terminées (S = séances du module) et pourcentage arrondi à l'entier le plus proche (1 / 3 → 33 %). Toucher une carte ouvre le module.  |
| F02  | Page module                  | Liste les séances du module (titre, objectif). Une séance terminée est marquée d'une coche et d'un fond vert.                                                                                                                                              |
| F03  | Page séance                  | Affiche la séance complète (3.3). En bas, trois boutons : « Retour aux séances », « Marquer comme terminée », « Séance suivante ».                                                                                                                         |
| F04  | Séance suivante              | Ouvre la séance suivante du module, puis la 1re séance du module suivant après la 3e. Désactivé sur la dernière séance du dernier module.                                                                                                                  |
| F05  | Marquer comme terminée       | Enregistre la séance comme terminée, met à jour la progression, désactive le bouton et affiche « Séance terminée ». Une séance déjà terminée s'ouvre avec ce bouton déjà désactivé.                                                                        |
| F06  | Progression globale          | Barre et texte « N / T séances terminées », T étant le nombre total de séances du parcours (24 avec le contenu initial).                                                                                                                                   |
| F07  | Écoute                       | Bouton « 🔊 Écouter » par expression et par variante. Voir règles 6.3.                                                                                                                                                                                     |
| F08  | Quiz de séance               | 4 questions à 3 choix. Au toucher : bonne réponse en vert, choix erroné en rouge, correction affichant l'expression dans les trois variantes. Score final, et bouton « Refaire avec de nouvelles questions ». Voir règles 6.1.                             |
| F09  | Correction type du défi oral | Le bouton affiche ou masque les 4 premières expressions de base de la séance (toutes s'il y en a moins), chacune dans les trois variantes.                                                                                                                 |
| F10  | Correcteur de réponse libre  | Analyse le texte saisi ; liste les expressions de la séance reconnues (avec la variante reconnue) ; propose jusqu'à 3 expressions non utilisées. Texte vide : demande de saisir un texte. Voir règles 6.2.                                                 |
| F11  | Révisions                    | Les 2 premières expressions de base de chaque séance (48 fiches avec le contenu initial), groupées par module, avec les trois variantes, le sens et un bouton d'écoute par variante.                                                                       |
| F12  | Mémo des chiffres SMS        | Tableau (3.4) et quiz de 5 questions « Quelle lettre arabe remplace le chiffre X ? », 3 choix, chiffres tirés sans répétition parmi les 6 ; chaque réponse est corrigée. Accessible depuis la barre et depuis les séances des modules liés au mémo (§3.3). |
| F13  | Réinitialisation             | Demande confirmation ; si confirmé, efface toute la progression et revient au Menu. Si annulé, rien ne change.                                                                                                                                             |
| F14  | Installation                 | L'application s'installe sur Android et iPhone comme toute application, avec son nom et son icône. Affichage en orientation portrait uniquement.                                                                                                           |
| F15  | Hors ligne                   | Tout le contenu est embarqué : aucune fonction ne nécessite de connexion, y compris à la première ouverture.                                                                                                                                               |

## 6. Règles de gestion

### 6.1 Quiz de séance (F08)

- Les questions sont tirées à l'ouverture de la séance, et à nouveau à chaque
  « Refaire ».
- **Expressions éligibles** : expressions de base et supplémentaires de la
  séance. Pour une question portant sur une variante, une expression est
  exclue si sa forme dans cette variante est vide (« — ») ou commence par un
  chiffre.
- **Questions 1 à 3** : « Comment dit-on « _sens_ » en _variante_ ? ». Les trois
  questions couvrent chacune une variante différente. Avec r = rang de la
  séance dans le parcours (1 pour la première séance du premier module), la
  question 1 porte sur la variante d'indice `(r − 1) mod 3` dans l'ordre
  MSA, darija, tounsi, et les questions 2 et 3 sur les suivantes dans l'ordre
  circulaire. Ex. : r = 1 → MSA, darija, tounsi ; r = 2 → darija, tounsi,
  MSA.
- **Question 4** : « Que signifie « _forme_ » ? » ; la forme est affichée
  dans une variante tirée au hasard parmi celles où elle est éligible ; les
  choix sont des sens en français.
- Les expressions interrogées sont tirées au hasard parmi les éligibles ; une
  même expression n'est pas interrogée deux fois dans le même quiz.
- **Choix** : 3 choix mélangés, 1 bonne réponse et 2 distracteurs. Les
  distracteurs sont pris d'abord parmi les autres expressions de la séance,
  puis dans tout le cours si la séance n'en fournit pas assez. Aucun
  distracteur n'est identique (même texte) à la bonne réponse ni à l'autre
  distracteur.
- Une question répondue est verrouillée. Le score « X / 4 » s'affiche dès que
  les 4 questions sont répondues.
- Répondre au quiz ne marque pas la séance comme terminée.

### 6.2 Correcteur de réponse libre (F10)

- **Normalisation** du texte saisi et des formes de référence : minuscules,
  accents retirés, ponctuation retirée, espaces multiples réduits ; les
  chiffres et les lettres arabes sont conservés.
- **Expressions comparées** : les 6 premières expressions de la séance, dans
  l'ordre : expressions de base, puis supplémentaires.
- Pour chaque expression et chaque variante : les alternatives « / » comptent
  séparément, le texte entre parenthèses est ignoré, seules les formes de
  **3 caractères ou plus** (après normalisation) sont retenues.
- Les formes en **écriture arabe** (3.7) sont comparées aussi, selon les
  mêmes règles : on peut répondre en lettres latines ou arabes. Pour
  l'écriture arabe, la normalisation retire aussi les voyelles et la
  hamza portée (أ إ آ → ا, ؤ → و, ئ → ي), le trait d'allongement (ـ), et
  confond ى avec ي et ة avec ه, variations fréquentes à la saisie.
- Une expression est **reconnue** si l'une de ses formes retenues apparaît
  dans le texte normalisé **en mots entiers** (« bes » n'est pas reconnu dans
  « besoin »). La variante affichée est celle de la forme trouvée.
- La saisie est limitée à `reponse_longueur_max` caractères.
- **Suggestions** : jusqu'à 3 expressions non reconnues, dans l'ordre des
  expressions comparées.
- Le message rappelle toujours que la grammaire et l'accord masculin/féminin
  ne sont pas vérifiés.

### 6.3 Écoute (F07)

- Langue demandée : arabe standard pour le MSA, arabe du Maroc pour la darija,
  arabe de Tunisie pour le tounsi. Ordre de repli : darija → arabe du Maroc,
  puis arabe standard, puis toute voix arabe ; tounsi → arabe de Tunisie,
  puis arabe standard, puis toute voix arabe ; MSA → arabe standard (ou
  d'Arabie saoudite), puis toute voix arabe. Le repli est silencieux.
- Vitesse de lecture réduite (paramètre `vitesse_lecture`, section 7).
- Une nouvelle lecture interrompt la précédente.
- **Texte lu** : l'écriture arabe de la forme quand elle existe (3.7), pour
  une meilleure prononciation ; sinon la transcription latine. Dans le mémo,
  toujours le mot en écriture arabe. Les alternatives en écriture arabe sont
  lues à la suite, avec une pause.
- Avant lecture d'une transcription latine : les précisions entre
  parenthèses sont retirées, les alternatives « / » sont lues à la suite
  avec une pause, et les chiffres du chat sont remplacés par des lettres
  proches (2 → rien, 3 → a, 5 → kh, 6 → t, 7 → h, 9 → q) ; sinon une voix
  arabe lirait « 7 » comme le nombre sept.
- Si le téléphone ne fournit pas la liste de ses voix, la lecture est
  demandée dans la langue de la variante, et le téléphone choisit la voix.
- Si aucune voix arabe n'est disponible sur l'appareil, un message l'indique
  et explique comment en installer une ; l'application ne plante pas.

### 6.4 Progression (F05, F06, F13)

- Une séance terminée est identifiée par l'identifiant permanent de la séance
  (3.6), jamais par sa position.
- La progression est conservée sur l'appareil uniquement, et survit à la
  fermeture et au redémarrage de l'application.
- Si la conservation échoue, l'application reste utilisable ; la progression
  de la session en cours reste affichée.
- Terminer une séance est uniquement une action volontaire de l'utilisateur.

## 7. Paramètres configurables

Ces valeurs sont des **réglages par défaut**, modifiables sans toucher à la
logique de l'application.

| Paramètre                     | Valeur par défaut | Rôle                                           |
| ----------------------------- | ----------------- | ---------------------------------------------- |
| `vitesse_lecture`             | 0,86              | Vitesse de la voix (1 = normale)               |
| `quiz_seance_nb_questions`    | 4                 | Questions par quiz de séance                   |
| `quiz_nb_choix`               | 3                 | Choix par question                             |
| `correction_type_nb_formules` | 4                 | Formules affichées par F09                     |
| `correcteur_nb_expressions`   | 6                 | Expressions comparées par F10                  |
| `correcteur_longueur_min`     | 3                 | Longueur minimale d'une forme retenue          |
| `correcteur_nb_suggestions`   | 3                 | Suggestions maximum par F10                    |
| `revisions_par_seance`        | 2                 | Fiches de révision par séance                  |
| `quiz_memo_nb_questions`      | 5                 | Questions du quiz du mémo                      |
| `reponse_longueur_max`        | 1 000             | Caractères maximum de la réponse libre         |
| `dialogue_repliques_min`      | 3                 | Répliques minimum d'un mini-dialogue de séance |
| `dialogue_repliques_max`      | 6                 | Répliques maximum d'un mini-dialogue de séance |
| `contenu_expressions_base`    | 3 à 5             | Expressions de base par séance                 |
| `contenu_supplementaires`     | 3                 | Expressions supplémentaires par séance         |

## 8. Données personnelles

Aucune collecte, aucun compte, aucune publicité, aucune mesure d'audience,
aucun échange réseau. La seule donnée conservée est la liste des séances
terminées, sur l'appareil.

## 9. Évolutions envisagées (après la version 1)

Par ordre de priorité proposé :

1. Relecture du contenu par un locuteur marocain et un locuteur tunisien.
2. Écriture arabe pour chaque expression, et écoute lue sur l'écriture
   arabe — **fait en version 1.1 (§3.7)**, à relire par des natifs.
3. Un mini-dialogue propre à chaque séance — **en cours (version 1.2, §3.8)**.
4. Séance de révision et lecture enchaînée des trois variantes.
5. Filtres par module et répétition espacée dans les révisions.
6. Correcteur plus fin (motifs, choix guidés).
7. Export / import de la progression.
8. Publication sur Google Play et l'App Store.

## 10. Critères de recette (version 1)

Chaque contrôle est joué sur un téléphone Android **et** sur un iPhone.

1. Le menu affiche les 8 modules initiaux ; chaque module ouvre ses 3
   séances ; les 24 séances s'affichent sans erreur.
2. Chaque séance affiche un quiz de 4 questions ; chaque réponse produit une
   correction ; le score s'affiche ; « Refaire » génère un nouveau tirage.
3. « Voir la correction type » affiche puis masque la correction dans chaque
   séance.
4. « Corriger ma réponse » signale expressions reconnues et suggestions, et
   demande un texte si la zone est vide.
5. Marquer une séance comme terminée met à jour la barre, la carte du module
   et la page du module ; la progression survit à la fermeture de
   l'application ; la réinitialisation remet tout à zéro après confirmation,
   et ne fait rien si on annule.
6. « Séance suivante » enchaîne séances et modules, et est désactivé à la fin.
7. Les révisions affichent 48 fiches (contenu initial) sans erreur.
8. Le mémo s'ouvre depuis la barre et depuis les séances du module « SMS et
   WhatsApp » ; son quiz corrige
   chaque réponse.
9. Avec une voix arabe installée, le son est audible dans les trois variantes ;
   sans voix arabe, un message s'affiche et rien ne plante.
10. En mode avion, dès la première ouverture, toutes les fonctions marchent.
11. Le bouton/geste retour du téléphone revient à l'écran précédent.
12. L'affichage reste lisible sur un petit écran (≈ 360 pt de large) et avec
    une taille de texte système agrandie ; les tableaux défilent
    horizontalement plutôt que de déborder.
13. Évolutivité : l'ajout d'un module de test (contenu seul, aucune autre
    modification) le fait apparaître dans le menu, les révisions et
    l'enchaînement « Séance suivante » ; les totaux se mettent à jour ; la
    progression existante est conservée, y compris si le module est inséré
    au milieu du parcours.
