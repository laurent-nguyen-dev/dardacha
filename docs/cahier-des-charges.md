# Cahier des charges — Arabe au quotidien (applications mobiles)

Oct 30, 2026 · Laurent Nguyen

Arabe au quotidien est une application mobile, pour Android et iPhone, qui apprend en français l'arabe parlé. Elle compare l'arabe littéraire moderne (MSA), la darija marocaine et le tounsi tunisien, en 24 séances de 5 à 10 minutes.

> Ce cahier des charges remplace, pour les applications mobiles, celui de la version web (PWA), archivé dans [archives/cahier-des-charges-pwa.md](archives/cahier-des-charges-pwa.md). Les règles détaillées sont dans le [document fonctionnel](fonctionnel.md), les choix d'implémentation dans le [document technique](technique.md), et les points non tranchés dans les [questions ouvertes](questions-ouvertes.md) (références `Q-xx`). Toute modification de ce cahier se reporte dans ces documents dans le même commit, et inversement.

## 1. Contexte et objectifs

Une version web installable (PWA) existe déjà. Le projet consiste à proposer la même application sous forme d'**applications natives Android et iPhone**, installées comme n'importe quelle autre application et utilisables entièrement sans connexion.

L'application permet à un francophone d'apprendre en parallèle trois façons de parler l'arabe du quotidien, avec transcription latine, traduction française, écoute et exercices corrigés.

**Objectifs**

- Comparer, expression par expression, l'arabe littéraire moderne (MSA), la darija marocaine et le tounsi tunisien.
- Fournir un parcours court et régulier : 8 modules au départ, 3 séances par module, 5 à 10 minutes par séance.
- Permettre d'ajouter des modules plus tard, sans modifier les fonctions de l'application.
- Faire pratiquer à l'écrit (quiz, réponse libre) et à l'oral (défi oral, écoute).
- Expliquer l'écriture SMS avec chiffres (2, 3, 5, 6, 7, 9) utilisée sur WhatsApp.
- Fonctionner sur Android et sur iPhone comme une application native, sans connexion, dès la première ouverture.

## 2. Utilisateurs et périmètre

L'application s'adresse à un adulte francophone débutant, qui apprend seul, sur téléphone, par petites séances.

La version 1 vise la **parité fonctionnelle** avec la version web. Le contenu pédagogique est **réécrit** : celui de la version web n'est pas repris.

| Inclus dans la version 1 | Exclu de la version 1 |
| --- | --- |
| 8 modules initiaux (24 séances), parcours extensible | Alphabet arabe et lecture de l'écriture arabe (l'écriture est surtout latine) |
| Tableaux comparatifs MSA, darija, tounsi | Compte utilisateur, synchronisation entre appareils |
| Écoute par la voix de synthèse du téléphone | Enregistrements de voix humaines |
| Quiz généré avec correction, correcteur de réponse libre | Évaluation de la grammaire, répétition espacée |
| Révisions et mémo des chiffres SMS | Séance de révision dédiée |
| Applications Android et iPhone installées en version de test | Publication sur Google Play et l'App Store |
| Fonctionnement hors ligne complet | Mode sombre, affichage tablette et paysage |

## 3. Contenu pédagogique

Le parcours initial compte 8 modules de 3 séances, soit 24 séances. Il est conçu pour s'enrichir : de nouveaux modules pourront être ajoutés plus tard (voir « Évolution du parcours » ci-dessous). Chaque séance contient de 3 à 5 expressions de base et 3 expressions supplémentaires, chacune donnée en MSA, en darija et en tounsi. Le contenu étant réécrit, il est marqué « non relu par un locuteur natif » tant qu'il ne l'a pas été (Q-01, Q-02).

| N° | Module | Objectif |
| --- | --- | --- |
| 1 | Salutations et présentations | Dire bonjour, se présenter, faire connaissance |
| 2 | Prendre des nouvelles | Demander comment va quelqu'un et répondre |
| 3 | SMS et WhatsApp | Écrire des messages courts, comprendre les chiffres du chat |
| 4 | Vie quotidienne | Parler de ses habitudes, de son travail, de ses journées |
| 5 | Amis et sorties | Proposer, accepter, refuser, fixer un rendez-vous |
| 6 | Expressions familières | Réagir, plaisanter, exprimer ses émotions |
| 7 | Relations et sentiments | Parler d'amitié et d'affection avec tact |
| 8 | Conversations spontanées | Enchaîner les sujets, demander de répéter |

**Structure d'une séance, dans l'ordre d'affichage**

1. Objectif de la séance.
2. Contexte et usage : un conseil sur les variantes et le genre de l'interlocuteur.
3. Expressions supplémentaires, avec un bouton d'écoute par variante.
4. Défi oral, avec bouton « Voir la correction type ».
5. Vocabulaire comparé : tableau français, MSA, darija, tounsi, avec traduction et écoute.
6. À retenir et mini-dialogue de 3 répliques (identique dans toutes les séances en version 1, Q-08).
7. Vérifie ta compréhension : quiz de 4 questions corrigées.
8. À toi de jouer : réponse libre avec bouton « Corriger ma réponse ».

La convention de couleur est fixe : bleu pour le MSA, vert pour la darija, orange pour le tounsi.

**Évolution du parcours**

- Ajouter un module consiste uniquement à ajouter du contenu : aucun écran ni aucune règle n'est modifié. Tous les totaux et pourcentages se calculent à partir du contenu présent.
- Chaque module et chaque séance a un identifiant permanent, distinct de sa position. La progression s'y rattache : ajouter, insérer ou réordonner des modules ne fait perdre aucune séance terminée.
- À l'ajout d'un module, le total augmente (« 24 / 24 » devient « 24 / 27 ») et le nouveau module apparaît à 0 %.
- Un nouveau module suit la même structure de séance que les modules initiaux. Il est livré par une mise à jour de l'application (Q-20).

## 4. Spécifications fonctionnelles

L'application a 15 fonctions, réparties en navigation, apprentissage, exercices et suivi. Une barre permanente donne accès au menu, aux révisions, au mémo et à la réinitialisation. Le bouton ou le geste « retour » du téléphone revient à l'écran précédent.

| Réf. | Fonction | Description et comportement attendu |
| --- | --- | --- |
| F01 | Menu principal | Affiche tous les modules du parcours sous forme de cartes : icône, titre, description, nombre de séances terminées sur le nombre de séances du module, et pourcentage. Toucher une carte ouvre le module. |
| F02 | Page module | Liste les séances du module avec titre et objectif. Une séance terminée est marquée d'une coche et d'un fond vert. |
| F03 | Page séance | Affiche le contenu complet de la séance (voir section 3). Trois boutons en bas : retour aux séances du module, marquer comme terminée, séance suivante. |
| F04 | Séance suivante | Passe à la séance suivante du module, puis au module suivant après la dernière séance. Désactivé à la dernière séance du dernier module. |
| F05 | Marquer comme terminée | Enregistre la séance, met à jour la progression, désactive le bouton et affiche « Séance terminée ». Une séance déjà terminée s'ouvre avec le bouton désactivé. |
| F06 | Progression globale | Barre et texte « N / T séances terminées » (T = total des séances du parcours, 24 au départ), visibles sur tous les écrans. |
| F07 | Écoute | Un bouton « 🔊 Écouter » par expression et par variante. Lecture à vitesse réduite (0,86 par défaut). Si aucune voix arabe n'est installée sur le téléphone, un message l'indique et explique comment en installer une. |
| F08 | Quiz de séance | 4 questions à 3 choix. Au toucher : bonne réponse en vert, erreur en rouge, correction avec les trois variantes. Score final et bouton pour refaire avec de nouvelles questions. |
| F09 | Correction type du défi oral | Bouton qui affiche ou masque 4 formules de la séance, chacune dans les trois variantes. |
| F10 | Correcteur de réponse libre | Analyse le texte saisi dans « À toi de jouer », liste les expressions de la séance reconnues (avec leur variante) et propose jusqu'à 3 expressions manquantes. |
| F11 | Révisions | Écran de fiches, 2 expressions par séance (48 fiches au départ), avec les trois variantes, la traduction et trois boutons d'écoute. |
| F12 | Mémo des chiffres SMS | Tableau des chiffres 2, 3, 5, 6, 7, 9 : lettre arabe, son, prononciation, exemples avec écoute en écriture arabe. Quiz de 5 questions corrigées. Accès aussi depuis les séances du module 3. |
| F13 | Réinitialisation | Efface la progression après une confirmation, puis revient au menu. |
| F14 | Installation | L'application s'installe sur Android et sur iPhone avec son nom et son icône, s'ouvre en plein écran, en orientation portrait. |
| F15 | Hors ligne | Tout le contenu est embarqué dans l'application : aucune fonction ne nécessite de connexion, y compris à la première ouverture. |

## 5. Règles de gestion

Les règles complètes, et les précisions apportées aux points flous de la version web, sont dans le [document fonctionnel](fonctionnel.md#6-règles-de-gestion), section 6.

**Quiz de séance (F08)**

- Les questions sont générées à l'ouverture de la séance, à partir des expressions de base et supplémentaires de cette séance.
- Trois questions demandent « Comment dit-on … en MSA, darija ou tounsi ? », une variante différente par question ; l'ordre des variantes tourne selon le rang de la séance dans le parcours (Q-04). La quatrième demande le sens français d'une expression.
- Chaque question a 3 choix, mélangés : 1 bonne réponse et 2 distracteurs pris d'abord dans la séance, puis dans l'ensemble du cours. Un distracteur ne peut pas être identique à la bonne réponse.
- Les expressions sans valeur dans une variante (« — ») ou commençant par un chiffre sont exclues des questions.
- Une fois répondue, une question est verrouillée. Le score s'affiche quand les 4 questions sont répondues.

**Correcteur de réponse libre (F10)**

- Le texte est normalisé : minuscules, accents et ponctuation retirés ; les chiffres et les lettres arabes sont conservés.
- Il est comparé aux 6 premières expressions de la séance, dans les trois variantes. Pour chaque expression, les alternatives séparées par « / » comptent, les parenthèses sont ignorées, et seules les formes d'au moins 3 caractères sont retenues.
- Le correcteur ne vérifie ni la grammaire ni l'accord au masculin ou au féminin ; il le rappelle dans son message.

**Écoute (F07)**

- Langue demandée : arabe standard pour le MSA, arabe du Maroc pour la darija, arabe de Tunisie pour le tounsi. Si la voix correspondante n'est pas installée, une autre voix arabe du téléphone est utilisée (Q-13).
- Une nouvelle lecture interrompt la précédente.
- Dans les séances, le texte lu est la transcription latine. Dans le mémo, le texte lu est le mot en écriture arabe, pour une meilleure prononciation.

**Progression (F05, F06, F13)**

- Une séance terminée est identifiée par l'identifiant permanent de la séance (jamais par sa position) et conservée sur le téléphone. Elle survit à la fermeture et au redémarrage de l'application.
- Si la conservation échoue, l'application reste utilisable mais ne garde pas la progression après fermeture.
- Terminer une séance est une action volontaire de l'utilisateur ; répondre au quiz ne la déclenche pas.

## 6. Exigences techniques et non fonctionnelles

Le détail et la justification des choix sont dans le [document technique](technique.md).

| Domaine | Exigence |
| --- | --- |
| Architecture | Application mobile multiplateforme sans serveur : un seul code source pour Android et iPhone (Expo / React Native, TypeScript). Logique (quiz, correcteur, progression) séparée de l'affichage et couverte par des tests automatiques. |
| Plateformes | Android et iOS, téléphones, versions minimales imposées par la version d'Expo utilisée. Orientation portrait. |
| Installation | Version 1 : installation de test (APK Android ; Expo Go ou build interne sur iPhone, Q-14). Pas de publication sur les magasins. |
| Évolutivité | Le contenu est séparé du code, un module par fichier de données. Ajouter un module ne demande aucune modification des écrans ni de la logique ; un contrôle automatique vérifie la structure de chaque module (champs obligatoires, nombre d'expressions, identifiants uniques). |
| Hors ligne | Contenu embarqué dans l'application. Aucun appel réseau. |
| Données personnelles | Aucune collecte, aucun compte, aucune publicité ni mesure d'audience. La seule donnée stockée est la liste des séances terminées, sur le téléphone. |
| Affichage | Adapté aux petits écrans (≈ 360 pt de large) et à une taille de texte système agrandie. Les tableaux défilent horizontalement plutôt que de déborder. Respect des zones sûres (encoche, barre de navigation). |
| Accessibilité | Boutons natifs, libellés lisibles par les lecteurs d'écran (TalkBack, VoiceOver), contrastes soignés, zones tactiles d'au moins 44 pt. Pas d'audit formel en version 1. |
| Langue de l'interface | Français. |
| Audio | Dépend du moteur de synthèse vocale du téléphone et des voix arabes installées. Message de repli si aucune voix arabe n'est disponible. |
| Paramètres | Les valeurs chiffrées (vitesse de lecture, nombre de questions, de formules, de fiches…) sont des réglages par défaut modifiables sans toucher à la logique (document fonctionnel, section 7). |
| Qualité | Intégration continue sur chaque modification : vérification des types, analyse du code, tests, audit de sécurité des dépendances. |
| Licence | Code sous licence MIT ; dépendances à licence permissive uniquement. |
| Livrables | Dépôt du code source, documentation (fonctionnelle, technique, journal de développement), APK Android de test, build iPhone de test. |

## 7. Limites connues et évolutions

Le contenu linguistique n'est pas validé par un locuteur natif : c'est la première action à mener avant un usage sérieux.

| Limite de la version 1 | Évolution possible |
| --- | --- |
| Contenu réécrit, non relu par un locuteur natif | Relecture par un locuteur marocain et un locuteur tunisien |
| Écoute lue sur la transcription latine, donc prononciation approximative | Ajouter l'écriture arabe à chaque expression, ou enregistrer des voix humaines |
| Voix arabe marocaine ou tunisienne souvent absente des téléphones | Voix humaines enregistrées, embarquées dans l'application |
| Mini-dialogue identique dans les 24 séances | Un dialogue propre à chaque séance |
| Pas de séance de révision ni de lecture enchaînée des trois variantes | Implémenter ces deux fonctions |
| Révisions sans filtre ni répétition espacée | Filtres par module et répétition espacée |
| Le correcteur ne juge pas la grammaire ni le genre | Correcteur par motifs, ou réponse à choix guidés |
| Progression locale à un téléphone ; perdue si l'application est désinstallée | Export et import de la progression, ou compte avec synchronisation |
| Pas de publication | Publication sur Google Play et l'App Store |

## 8. Critères de recette

L'application est réceptionnée quand les 13 contrôles suivants réussissent, chacun joué sur un téléphone Android **et** sur un iPhone.

- [ ] 1\. Le menu affiche les 8 modules initiaux ; chaque module ouvre ses 3 séances ; chaque séance s'affiche.
- [ ] 2\. Les 24 séances affichent un quiz de 4 questions, dont chaque réponse produit une correction et un score final ; « refaire » génère de nouvelles questions.
- [ ] 3\. Le bouton « Voir la correction type » affiche et masque la correction dans chaque séance.
- [ ] 4\. Le bouton « Corriger ma réponse » signale les expressions reconnues et manquantes, et demande de saisir un texte s'il est vide.
- [ ] 5\. Marquer une séance comme terminée met à jour la barre, le module et la page des séances ; la progression est conservée après fermeture de l'application ; la réinitialisation remet tout à zéro après confirmation.
- [ ] 6\. Le bouton « Séance suivante » enchaîne les séances et les modules, et est désactivé à la fin.
- [ ] 7\. Les 48 fiches de révision initiales s'affichent sans erreur.
- [ ] 8\. Le mémo s'ouvre depuis la barre et depuis le module 3 ; son quiz corrige chaque réponse.
- [ ] 9\. Avec une voix arabe installée, le son est audible dans les trois variantes ; sans voix arabe, un message s'affiche et rien ne plante.
- [ ] 10\. L'application s'installe et apparaît avec son icône parmi les autres applications.
- [ ] 11\. En mode avion, dès la première ouverture, toutes les fonctions marchent.
- [ ] 12\. Le bouton ou geste « retour » revient à l'écran précédent, et l'affichage reste lisible sur petit écran avec une taille de texte agrandie.
- [ ] 13\. L'ajout d'un module de test (contenu seul) le fait apparaître dans le menu, les révisions et l'enchaînement des séances ; les totaux se mettent à jour et la progression existante est conservée, même si le module est inséré au milieu du parcours.
