# T19 — APK Android fabriqué par GitHub Actions

**Fait** : workflow `.github/workflows/apk.yml`. À chaque envoi de code,
GitHub génère le projet Android, compile l'APK et le publie dans la Release
de test « apk-test », d'où l'utilisateur l'installe depuis son téléphone
(mode d'emploi : [exploitation.md](../exploitation.md)).

Avancé du sprint 4 à la demande de l'utilisateur, qui teste sur son
téléphone sans outil de développement sur son ordinateur.

## Pourquoi

- **Compilation sur GitHub plutôt qu'EAS Build** : pas de compte Expo, pas
  de jeton secret à configurer ; les serveurs GitHub ont déjà le SDK
  Android. EAS reste possible plus tard (notamment pour l'iPhone).
- **Release plutôt qu'artefact seul** : un artefact de build se télécharge
  en `.zip`, peu pratique sur téléphone ; une Release donne un lien direct
  vers le `.apk`. L'artefact est gardé en plus.
- **Version « release », pas « debug »** : un APK debug charge le code
  depuis l'ordinateur du développeur ; l'APK release l'embarque.
- **Signature de test** : vérifiée en générant le projet Android sur une
  copie : le modèle Expo signe la release avec `debug.keystore`, fichier
  fixe. Installable, et les mises à jour se remplacent.
- **`concurrency`** : deux envois rapprochés ne lancent pas deux
  compilations ; la plus ancienne est annulée.
- Ajout d'`expo-system-ui` (MIT), demandé par la génération Android pour
  appliquer le thème clair (`userInterfaceStyle`).
- Non vérifiable dans l'environnement de l'assistant (pas de SDK Android) :
  la première compilation réelle est celle de GitHub.

## Notions

- **Prebuild** : Expo écrit lui-même le projet Android natif à partir
  d'`app.json`. On ne le commite pas : on le régénère à chaque fois, ce qui
  évite de maintenir du code Android à la main.
- **Gradle** : l'outil de compilation d'Android ; `assembleRelease` produit
  l'APK de la version release.
- **Signature d'APK** : Android n'installe que des APK signés, et n'accepte
  une mise à jour que si elle est signée par la même clé que la version
  installée.
