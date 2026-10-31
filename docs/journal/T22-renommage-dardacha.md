# T22 — L'application s'appelle Dardacha

**Fait** : nom affiché « Dardacha » (titre du menu, nom sous l'icône du
téléphone), `slug` et `scheme` Expo, nom du paquet npm, fichier APK
`dardacha.apk`, et documents (cahier des charges, fonctionnel, technique,
utilisateur, exploitation, README).

## Pourquoi / ce qui ne change pas

- Demande de l'utilisateur. Le nom vient de « dardacha » (دردشة), la
  conversation.
- **L'identifiant Android/iOS reste `dev.laurentnguyen.dardacha`** : c'est
  lui qui identifie l'application sur le téléphone. L'APK renommé s'installe
  donc par-dessus l'ancien, sans perdre la progression.
- **Traces historiques laissées telles quelles** : archive du cahier des
  charges web, entrées précédentes du journal, décision Q-17. Le changement
  est ajouté comme nouvelle décision dans `questions-ouvertes.md`.

## Notions

- **Nom affiché / slug / identifiant** : le nom (`name`) est ce que voit
  l'utilisateur ; le `slug` sert aux outils Expo ; l'identifiant
  (`package` Android, `bundleIdentifier` iOS) est l'identité de
  l'application pour le téléphone et les magasins : il ne doit plus changer
  une fois l'application publiée.
