# T21 — Icône définitive

**Fait** : le logo Dardacha fourni par l'utilisateur devient l'icône de
l'application sur iOS et Android. Fichiers : `assets/logo-source.png`
(original), `scripts/generer-icones.py`, icônes régénérées dans `assets/`,
`app.json`, logo en tête du README.

## Pourquoi

- L'icône provisoire était celle du modèle Expo. Le logo dit ce qu'est
  l'application : trois bulles, une par variante (MSA en bleu, darija en
  vert, tounsi en orange, les couleurs de l'application), et le nom.
- **Un script plutôt que des retouches à la main** : si le logo change, une
  commande refait toutes les icônes de la même façon.

## Ce que fait le script

- Le logo source est une tuile aux coins arrondis sur fond blanc, avec une
  ombre. Une icône iOS doit être **carrée, pleine, sans transparence** :
  iOS arrondit lui-même les coins. Le script découpe la tuile et remplit
  les coins blancs avec les couleurs du bord (chaque pixel vide prend la
  moyenne de ses voisins, de proche en proche).
- **Icône adaptative Android** : deux couches de 108 dp, dont seuls les
  72 dp du centre sont visibles, découpés en cercle, carré arrondi ou
  goutte selon le téléphone. Le logo est réduit aux 72 dp du centre ; la
  marge prolonge ses bords, pour ne rien montrer de vide quand le lanceur
  anime l'icône. Le mot « Dardacha » et les bulles restent dans le cercle ;
  seuls les rayons du soleil et le bas de la ville sont rognés.
- **Icône monochrome** : Android 13 peut recolorer les icônes aux couleurs
  du fond d'écran (« icônes à thème »). Il lui faut une silhouette d'une
  seule couleur : le script garde le mot « Dardacha » et les trois points,
  repérés par leur bleu nuit.
- L'ancienne image de fond (`android-icon-background.png`) est remplacée par
  une couleur unie, le bleu ciel du haut du logo.

## Notions

- **Icône adaptative** (Android 8 et plus) : premier plan + fond + forme
  choisie par le lanceur. Expo la génère à partir d'`android.adaptiveIcon`
  dans `app.json` au moment du `prebuild`.
- **Zone de sécurité** : la partie de l'icône toujours visible quelle que
  soit la forme du lanceur (cercle de 66 dp au centre).

## Vérification

- Aperçus générés et contrôlés à l'œil : icône iOS arrondie, icône Android
  dans un cercle, silhouette monochrome.
- Sur le téléphone : l'icône apparaît dès l'installation de l'APK de test
  (après fusion sur `main`) ; sur certains lanceurs, il faut redémarrer le
  lanceur ou le téléphone pour que l'ancienne icône disparaisse du cache.
