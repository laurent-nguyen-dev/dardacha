# T33 — Versions numérotées et releases par version

**Fait** : `scripts/version.js` (numéro de version et `versionCode`
Android), version passée à **1.2.0** dans `app.json` et `package.json`,
workflow `.github/workflows/release.yml` « Publier une version », notes de
version `docs/versions.md`, mode d'emploi dans `docs/exploitation.md`.

## Pourquoi

- L'utilisateur cherchait la release de la version 1.0 : il n'y en avait
  pas. Le workflow APK ne publie qu'une release, « apk-test », **remplacée**
  à chaque fusion sur `main` ; les versions 1.0 et 1.1 n'existaient que dans
  la documentation, et l'application affichait toujours `0.1.0`.
- **Une release par version**, qui reste : on peut retrouver, télécharger
  et comparer chaque version. La version de test reste pour le dernier état
  de `main`.
- **`versionCode` calculé** : Android n'installe une mise à jour que si son
  `versionCode` est supérieur ou égal à celui de la version installée. Il
  était bloqué à 1 ; 1.2.0 → 10200, 1.3.0 → 10300, etc. Les APK déjà
  installés (versionCode 1) seront remplacés sans problème.
- **Publication de versions passées** : le workflow vient de `main` mais
  fabrique le commit demandé ; v1.0.0 et v1.1.0 peuvent donc être
  reconstruites à partir des commits où elles ont été fusionnées.

## Notions

- **`workflow_dispatch` avec `inputs`** : un workflow lancé à la main depuis
  l'onglet Actions, avec un petit formulaire (ici : numéro de version et
  commit).
- **Tag git** : une étiquette fixe sur un commit (`v1.2.0`). La release
  GitHub est attachée à ce tag.

## Publication des trois versions

`v1.1.0` et `v1.2.0` ont été publiées du premier coup. `v1.0.0` a échoué à
la création de la release (HTTP 403) : le tag devait viser un commit dont
`apk.yml` différait de celui de `main`, ce que GitHub interdit au jeton des
workflows. Contournement documenté dans technique §9 : un commit qui
reprend exactement le code de `9d98733` avec les workflows actuels, puis
nouvelle publication depuis ce commit.
