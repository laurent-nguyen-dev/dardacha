# Fiche de recette — version 1

Les 13 critères du [document fonctionnel](fonctionnel.md#10-critères-de-recette-version-1),
à jouer sur un **téléphone Android** (APK de la page Releases) et sur un
**iPhone** (application Expo Go, voir [exploitation.md](exploitation.md)).
Cocher chaque case une fois le contrôle réussi ; noter tout écart dans
« Remarques ».

La colonne « Tests automatiques » indique ce qui est déjà vérifié à chaque
modification par l'intégration continue : la recette sur téléphone vérifie
le reste (vrai écran, vraie voix, vrai stockage, mode avion).

| N°  | Contrôle        | Comment faire                                                                                                            | Résultat attendu                                                                                                                           | Tests automatiques                           | Android | iPhone |
| --- | --------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------- | ------ |
| 1   | Navigation      | Ouvrir chaque module, puis chaque séance                                                                                 | 8 modules ; 3 séances par module ; les 24 séances s'affichent                                                                              | `navigation`, `correction-type` (24 séances) | ☐       | ☐      |
| 2   | Quiz            | Répondre aux 4 questions d'une séance (une fausse exprès), puis « Refaire »                                              | Vert / rouge, correction dans les 3 variantes, score, nouveau tirage                                                                       | `quiz`, `logic/quiz`                         | ☐       | ☐      |
| 3   | Correction type | « Voir la correction type » puis « Masquer »                                                                             | Les formules apparaissent puis disparaissent                                                                                               | `correction-type` (24 séances)               | ☐       | ☐      |
| 4   | Correcteur      | « Corriger ma réponse » à vide, puis avec « salam 3likoum »                                                              | Demande un texte ; puis expression reconnue (darija) + suggestions + rappel des limites                                                    | `reponse-libre`, `logic/correcteur`          | ☐       | ☐      |
| 5   | Progression     | Terminer une séance ; fermer complètement l'application ; la rouvrir ; « Réinitialiser » → Annuler, puis → Réinitialiser | Barre, carte et page du module à jour ; progression conservée après fermeture ; rien ne change sur Annuler ; tout à zéro sur Réinitialiser | `progression` (sauf la fermeture réelle)     | ☐       | ☐      |
| 6   | Séance suivante | Enchaîner depuis la 3e séance d'un module ; aller à la dernière séance                                                   | Passe au module suivant ; bouton désactivé à la 24e séance                                                                                 | `navigation`                                 | ☐       | ☐      |
| 7   | Révisions       | Barre → Révisions, faire défiler                                                                                         | 48 fiches groupées par module, sans erreur                                                                                                 | `revisions`, `logic/revisions`               | ☐       | ☐      |
| 8   | Mémo            | Barre → Mémo ; puis bouton du mémo dans une séance « SMS et WhatsApp » ; répondre au quiz                                | Le mémo s'ouvre des deux façons ; chaque réponse est corrigée                                                                              | `memo`, `logic/quizMemo`                     | ☐       | ☐      |
| 9   | Écoute          | Toucher 🔊 en MSA, darija, tounsi ; puis sur un exemple du mémo. Refaire sans voix arabe installée (si possible)         | Son audible dans les 3 variantes ; sans voix arabe : message d'aide, pas de plantage                                                       | `ecoute`, `logic/audio` (simulés)            | ☐       | ☐      |
| 10  | Hors ligne      | Mode avion, puis ouvrir l'application et parcourir toutes les fonctions                                                  | Tout fonctionne, y compris à la première ouverture                                                                                         | —                                            | ☐       | ☐      |
| 11  | Retour          | Bouton / geste « retour » du téléphone depuis une séance, un module, les révisions                                       | Revient à l'écran précédent                                                                                                                | —                                            | ☐       | ☐      |
| 12  | Lisibilité      | Agrandir la taille du texte dans les réglages du téléphone ; ouvrir une séance                                           | Texte lisible ; le tableau de vocabulaire défile horizontalement                                                                           | —                                            | ☐       | ☐      |
| 13  | Évolutivité     | Vérifié par construction (voir remarque)                                                                                 | Un module ajouté apparaît partout ; la progression est conservée                                                                           | `logic/parcours`, `parcours`                 | ☐       | ☐      |

**Remarque sur le critère 13** : les modules 2 à 8 ont été ajoutés un à un
pendant le développement, en ne modifiant que le contenu et le registre ;
les tests de `logic/parcours` vérifient en plus l'insertion d'un module au
milieu du parcours sans perte de progression. Sur téléphone, il suffit de
vérifier qu'une progression faite avec un ancien APK est toujours là après
installation du nouveau.

## Résultats

| Date       | Plateforme                | Résultat                                                                                                              |
| ---------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 2026-10-31 | Android (APK du sprint 4) | Validé par l'utilisateur : « ça marche bien ». Aucun écart signalé. Le détail critère par critère n'a pas été relevé. |
| —          | iPhone                    | **Non jouée** : pas d'iPhone disponible. Reportée (voir questions-ouvertes.md).                                       |

## Remarques

_(Écarts constatés, avec le téléphone, le modèle et la version du système.)_
