# Cahier des charges — Arabe au quotidien

Oct 30, 2026 · @Emma

Arabe au quotidien est une application d'apprentissage en français de l'arabe parlé, qui compare l'arabe littéraire moderne (MSA), la darija marocaine et le tounsi tunisien, en 24 séances de 5 à 10 minutes.

## 1. Contexte et objectifs

L'application permet à un francophone d'apprendre en parallèle trois façons de parler l'arabe du quotidien, avec transcription latine, traduction française, audio et exercices corrigés.

**Objectifs**

- Comparer, expression par expression, l'arabe littéraire moderne (MSA), la darija marocaine et le tounsi tunisien.
- Fournir un parcours court et régulier : 8 modules, 3 séances par module, 5 à 10 minutes par séance.
- Faire pratiquer à l'écrit (quiz, réponse libre) et à l'oral (défi oral, audio).
- Expliquer l'écriture SMS avec chiffres (2, 3, 5, 6, 7, 9) utilisée sur WhatsApp.
- Fonctionner sur Android comme une application installée, y compris sans connexion.

## 2. Utilisateurs et périmètre

L'application s'adresse à un adulte francophone débutant, qui apprend seul, sur téléphone, par petites séances.

| Inclus dans la version actuelle | Exclu de la version actuelle |
| --- | --- |
| 8 modules et 24 séances de contenu | Alphabet arabe et lecture de l'écriture arabe (l'écriture est surtout latine) |
| Tableaux comparatifs MSA, darija, tounsi | Compte utilisateur, synchronisation entre appareils |
| Audio par synthèse vocale du navigateur | Enregistrements de voix humaines |
| Quiz généré avec correction, correcteur de réponse libre | Évaluation de la grammaire, répétition espacée |
| Révisions et mémo des chiffres SMS | Séance de révision dédiée (annoncée sur l'accueil, non réalisée) |
| Installation Android (PWA) et mode hors ligne | Fichier APK et publication sur le Play Store |

## 3. Contenu pédagogique

Le parcours compte 8 modules de 3 séances, soit 24 séances. Chaque séance contient de 3 à 5 expressions de base et 3 expressions supplémentaires, chacune donnée en MSA, en darija et en tounsi.

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
3. Expressions supplémentaires, avec bouton audio par variante.
4. Défi oral, avec bouton « Voir la correction type ».
5. Vocabulaire comparé : tableau français, MSA, darija, tounsi, avec traduction et audio.
6. À retenir et mini-dialogue de 3 répliques (identique dans toutes les séances).
7. Vérifie ta compréhension : quiz de 4 questions corrigées.
8. À toi de jouer : réponse libre avec bouton « Corriger ma réponse ».

La convention de couleur est fixe : bleu pour le MSA, vert pour la darija, orange pour le tounsi.

## 4. Spécifications fonctionnelles

L'application a 15 fonctions, réparties en navigation, apprentissage, exercices et suivi. Une barre d'outils permanente donne accès au menu, aux révisions, au mémo et à la réinitialisation.

| Réf. | Fonction | Description et comportement attendu |
| --- | --- | --- |
| F01 | Menu principal | Affiche les 8 modules sous forme de cartes : icône, titre, description, nombre de séances terminées sur 3 et pourcentage. Un clic ouvre le module. |
| F02 | Page module | Liste les 3 séances du module avec titre et objectif. Une séance terminée est marquée d'une coche et d'un fond vert. |
| F03 | Page séance | Affiche le contenu complet de la séance (voir section 3). Trois boutons en bas : retour aux séances du module, marquer comme terminée, séance suivante. |
| F04 | Séance suivante | Passe à la séance suivante du module, puis au module suivant après la 3e séance. Désactivé à la dernière séance du dernier module. |
| F05 | Marquer comme terminée | Enregistre la séance, met à jour la progression, désactive le bouton et affiche « Séance terminée ». |
| F06 | Progression globale | Barre et texte « N / 24 séances terminées », visibles sur toutes les pages. |
| F07 | Audio | Un bouton « 🔊 Écouter » par expression et par variante. Lecture à vitesse réduite (0,86). Si la synthèse vocale est absente, un message l'indique. |
| F08 | Quiz de séance | 4 questions à 3 choix. Au clic : bonne réponse en vert, erreur en rouge, correction avec les trois variantes. Score final et bouton pour refaire avec de nouvelles questions. |
| F09 | Correction type du défi oral | Bouton qui affiche ou masque 4 formules de la séance, chacune dans les trois variantes. |
| F10 | Correcteur de réponse libre | Analyse le texte saisi dans « À toi de jouer », liste les expressions de la séance reconnues (avec leur variante) et propose jusqu'à 3 expressions manquantes. |
| F11 | Révisions | Page de 48 fiches (2 expressions par séance) avec les trois variantes, la traduction et trois boutons audio. |
| F12 | Mémo des chiffres SMS | Tableau des chiffres 2, 3, 5, 6, 7, 9 : lettre arabe, son, prononciation, exemples avec audio en écriture arabe. Quiz de 5 questions corrigées. Lien d'accès aussi dans les séances du module 3. |
| F13 | Réinitialisation | Efface la progression après une confirmation, puis revient au menu. |
| F14 | Installation sur Android | Installable depuis Chrome (icône, plein écran, orientation portrait). |
| F15 | Mode hors ligne | Après la première ouverture, toute l'application fonctionne sans connexion. |

## 5. Règles de gestion

**Quiz de séance (F08)**

- Les questions sont générées à l'ouverture de la séance, à partir des expressions de base et supplémentaires de cette séance.
- Trois questions demandent « Comment dit-on … en MSA, darija ou tounsi ? » ; la variante tourne selon le numéro de la séance. La quatrième demande le sens français d'une expression.
- Chaque question a 3 choix, mélangés : 1 bonne réponse et 2 distracteurs pris d'abord dans la séance, puis dans l'ensemble du cours. Un distracteur ne peut pas être identique à la bonne réponse.
- Les expressions sans valeur dans une variante (« — ») ou commençant par un chiffre sont exclues des questions.
- Une fois répondue, une question est verrouillée. Le score s'affiche quand les 4 questions sont répondues.

**Correcteur de réponse libre (F10)**

- Le texte est normalisé : minuscules, accents et ponctuation retirés ; les chiffres et les lettres arabes sont conservés.
- Il est comparé aux 6 premières expressions de la séance, dans les trois variantes. Pour chaque expression, les alternatives séparées par « / » comptent, les parenthèses sont ignorées, et seules les formes d'au moins 3 caractères sont retenues.
- Le correcteur ne vérifie ni la grammaire ni l'accord au masculin ou au féminin ; il le rappelle dans son message.

**Audio (F07)**

- Langue demandée : arabe générique pour le MSA, arabe du Maroc pour la darija, arabe de Tunisie pour le tounsi. Si une voix correspondante est installée, elle est utilisée.
- Une nouvelle lecture interrompt la précédente.
- Dans les séances, le texte lu est la transcription latine. Dans le mémo, le texte lu est le mot en écriture arabe, pour une meilleure prononciation.

**Progression (F05, F06, F13)**

- Une séance terminée est identifiée par le couple module-séance et stockée dans le navigateur de l'appareil.
- Si le stockage est indisponible, l'application fonctionne mais ne conserve pas la progression.
- Terminer une séance est une action volontaire de l'utilisateur ; répondre au quiz ne la déclenche pas.

## 6. Exigences techniques et non fonctionnelles

| Domaine | Exigence |
| --- | --- |
| Architecture | Application web sans serveur : une page HTML unique d'environ 55 Ko (HTML, CSS et JavaScript), sans bibliothèque externe. |
| Plateformes | Chrome sur Android pour l'installation. Fonctionne aussi dans un navigateur récent sur ordinateur (Chrome, Edge, Safari). |
| Installation | Application web progressive : manifeste (nom, icônes 192 et 512 px, icône adaptative, plein écran, portrait, couleur #102a43) et hébergement HTTPS obligatoire. |
| Hors ligne | Service worker : réseau d'abord, cache en secours. Mise à jour en changeant le nom du cache dans le fichier sw.js. |
| Données personnelles | Aucune collecte, aucun compte, aucun appel réseau applicatif. La seule donnée stockée est la liste des séances terminées, sur l'appareil. |
| Affichage | Adapté au téléphone (seuil à 600 px). Les tableaux défilent horizontalement plutôt que de déborder. |
| Accessibilité | Contour de focus visible, boutons natifs, contrastes soignés. Pas d'audit formel : annonces vocales des corrections et sens de lecture de droite à gauche non traités. |
| Langue de l'interface | Français. |
| Audio | Dépend de l'API de synthèse vocale du navigateur et des voix arabes installées sur l'appareil. Absente de certains aperçus intégrés : message de repli prévu. |
| Livrables | Dossier de l'application : index.html, manifest.webmanifest, sw.js, 3 icônes, mode d'emploi de mise en ligne (archive arabe-pwa.zip). |

## 7. Limites connues et évolutions

Le contenu linguistique n'a pas été validé par un locuteur natif : c'est la première action à mener avant un usage sérieux.

| Limite actuelle | Évolution possible |
| --- | --- |
| Contenu non relu par un locuteur natif ; certaines entrées mélangent écriture latine et arabe (par exemple dans les séances 4 à 8) | Relecture par un locuteur marocain et un locuteur tunisien, puis écriture arabe cohérente |
| Audio lu sur la transcription latine, donc prononciation approximative | Ajouter l'écriture arabe à chaque expression, ou enregistrer des voix humaines |
| Les fiches de révision reprennent les deux premières expressions de chaque séance, y compris les entrées « 3 » et « 7 » du module 3 dont la colonne MSA est vide | Exclure ces entrées, ajouter filtres par module et répétition espacée |
| Mini-dialogue identique dans les 24 séances | Un dialogue propre à chaque séance |
| La séance de révision annoncée sur l'accueil n'existe pas ; la section « Écouter les trois variantes à la suite » est un texte, sans lecture enchaînée | Implémenter ces deux fonctions ou retirer les textes |
| Le correcteur ne juge pas la grammaire ni le genre | Correcteur par motifs, ou réponse à choix guidés |
| Progression locale à un navigateur ; effacée si les données du site sont supprimées | Export et import de la progression, ou compte avec synchronisation |
| Pas de fichier APK | Projet Android Studio (WebView) ou empaquetage pour le Play Store |

## 8. Critères de recette

L'application est réceptionnée quand les 12 contrôles suivants réussissent. Les contrôles 1 à 9 ont été joués dans un navigateur de test sur ordinateur ; les contrôles 10 à 12 restent à faire sur un téléphone Android.

- [x] 1\. Le menu affiche 8 modules ; chaque module ouvre ses 3 séances ; chaque séance s'affiche.
- [x] 2\. Les 24 séances affichent un quiz de 4 questions, dont chaque réponse produit une correction et un score final.
- [x] 3\. Le bouton « Voir la correction type » affiche et masque la correction dans chaque séance.
- [x] 4\. Le bouton « Corriger ma réponse » signale les expressions reconnues et manquantes, et demande de saisir un texte s'il est vide.
- [x] 5\. Marquer une séance comme terminée met à jour la barre, le module et la page des séances ; la réinitialisation remet tout à zéro après confirmation.
- [x] 6\. Le bouton « Séance suivante » enchaîne les séances et les modules, et est désactivé à la fin.
- [x] 7\. Les révisions s'affichent sans erreur.
- [x] 8\. Le mémo s'ouvre depuis la barre et depuis le module 3 ; son quiz corrige chaque réponse.
- [x] 9\. Sans synthèse vocale, un clic sur un bouton audio affiche un message et ne produit aucune erreur ; avec synthèse vocale, la lecture est lancée dans la bonne langue.
- [ ] 10\. Sur Android, Chrome propose d'installer l'application et son icône apparaît avec les autres applications.
- [ ] 11\. Après la première ouverture, l'application fonctionne en mode avion.
- [ ] 12\. Le son est audible dans les trois variantes, avec une voix arabe installée sur le téléphone.
