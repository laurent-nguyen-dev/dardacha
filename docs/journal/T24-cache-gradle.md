# T24 — Cache Gradle pour la fabrication de l'APK

**Fait** : étape « Cache Gradle » (`actions/cache@v6`) dans
`.github/workflows/apk.yml`, placée après la génération du projet Android et
avant la compilation. Elle conserve `~/.gradle/caches` et `~/.gradle/wrapper`
d'une fabrication à l'autre.

## Pourquoi

- Chaque fabrication prenait 13 à 17 minutes : Gradle retéléchargeait à
  chaque fois toutes les dépendances Android et refaisait ses
  transformations.
- **`actions/cache` plutôt que l'option `cache: gradle` de setup-java** :
  cette option calcule sa clé à partir des fichiers Gradle du dépôt, qui
  n'existent pas encore au moment où elle s'exécute (ils sont générés par
  `expo prebuild`) ; c'est ce qui avait fait échouer la première version du
  workflow (T19). Ici la clé vient de `package-lock.json` et `app.json`, dont
  le projet Android est dérivé.
- **`restore-keys`** : quand les dépendances changent, on repart du dernier
  cache plutôt que de zéro ; Gradle ne retélécharge que ce qui manque.

## Ce qu'il faut en attendre

Un gain de quelques minutes à partir de la deuxième fabrication, pas une
division du temps : la compilation du code natif C++ de React Native n'est
pas couverte par ce cache. À mesurer sur les prochaines fabrications.

## Notions

- **Cache GitHub Actions** : un dossier sauvegardé à la fin d'un job sous
  une clé, et restauré au début des jobs suivants qui demandent la même clé.
  Les branches peuvent lire le cache de `main`, mais `main` ne lit pas celui
  d'une autre branche : le gain sur `main` apparaîtra à partir de sa
  deuxième fabrication.
