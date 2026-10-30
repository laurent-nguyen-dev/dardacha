# T08 — Page séance complète (sections 1 à 6)

**Fait** : la page séance affiche, dans l'ordre du fonctionnel §3.3 :
objectif, contexte et usage, expressions supplémentaires (trois variantes
chacune), défi oral (consigne), vocabulaire comparé (tableau), à retenir,
mini-dialogue. Mini-dialogue commun écrit dans `src/content/dialogue.ts`.
3 tests ajoutés.

## Pourquoi

- **Composants réutilisables** : `ExpressionComparee` (sens + une ligne par
  variante avec étiquette colorée) sert aux expressions supplémentaires et
  au dialogue ; il recevra le bouton d'écoute en T09, à un seul endroit.
- **Tableau dans un défilement horizontal** à colonnes de largeur fixe :
  quatre colonnes ne tiennent pas sur 360 pt ; le tableau défile au lieu
  de déborder ou d'écraser le texte (critère de recette 12).
- **Titres de section avec le rôle « en-tête »** : les lecteurs d'écran
  permettent de sauter de titre en titre ; le test vérifie l'ordre des
  sections par ce même rôle.
- Sections 7 (quiz) et 8 (réponse libre) au sprint 3 ; la correction type
  du défi oral (F09) aussi.

## Notions

- **`ScrollView horizontal`** : zone qui défile de gauche à droite ; son
  contenu peut être plus large que l'écran.
- **`key`** dans une liste React : identifiant stable de chaque élément,
  pour que React sache quel élément a changé entre deux affichages.
- **`children`** : le contenu placé entre les balises d'un composant
  (`<Section titre="…">contenu</Section>`).
