# T31 — Mini-dialogue de séance : modèle, contrôle, affichage

**Fait** : champ facultatif `dialogue?: Replique[]` sur `Seance` ;
paramètres `dialogueRepliquesMin` (3) et `dialogueRepliquesMax` (6) ;
règle `validerDialogue` dans le contrôle du contenu (4 tests, écrits avant
le code) ; la page séance affiche `seance.dialogue ?? miniDialogue` (2 tests
d'écran sur un parcours de test) ; section du guide d'ajout de module.

## Pourquoi

- **Facultatif avec repli** : aucune séance n'est cassée tant que son
  dialogue n'est pas écrit (T32), et un futur module peut être ajouté sans
  dialogue.
- **Contrôles** : nombre de répliques, alternance A/B en commençant par A,
  formes et écriture arabe dans les trois variantes ; la validité de
  l'écriture arabe réutilise la règle de T25.
- **Une seule ligne d'affichage changée** : le rendu des répliques existait
  déjà (`ExpressionComparee`, avec écriture arabe et écoute).

## Notions

- **Opérateur `??`** (« coalescence des nuls ») : `a ?? b` vaut `a` si `a`
  existe, sinon `b`. Ici : le dialogue de la séance, ou à défaut le dialogue
  commun.
