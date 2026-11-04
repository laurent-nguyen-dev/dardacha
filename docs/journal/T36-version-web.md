# T36 — Version web (GitHub Pages)

**Fait** : l'application est aussi publiée comme site web, à chaque fusion
sur `main`, à l'adresse https://laurent-nguyen-dev.github.io/dardacha/
(technique §9.1).

## Pourquoi

- Les relecteurs sur iPhone n'ont pas d'APK. Une application iPhone de test
  (TestFlight) demande un compte Apple Developer à 99 $/an, et **Expo Go
  ne suffit plus** : il n'est plus publié sur l'App Store pour les SDK
  récents et, depuis mai 2026, n'ouvre que les projets de son propriétaire.
- **La version web est gratuite** : même code (Expo sait produire un site
  avec `react-native-web`), hébergé par GitHub Pages. Le relecteur ouvre un
  lien dans Safari, sans compte Apple ni installation.

## Fichiers

- `.github/workflows/web.yml` : export web, `404.html`, publication Pages.
- `app.json` : `web` (`output: "single"`, icône de l'onglet) et
  `experiments.baseUrl: "/dardacha"`.
- `package.json` : `react-native-web` ajouté ; `react-dom` épinglé à
  19.3.0, la version exacte de `react` (npm refusait sinon).

## Notions

- **Site statique** : des fichiers (HTML, JavaScript, images) servis tels
  quels ; aucun serveur à faire tourner, d'où la gratuité.
- **`baseUrl`** : le site n'est pas à la racine du domaine mais sous
  `/dardacha/` ; toutes les adresses internes doivent commencer par là.
- **Page de repli `404.html`** : GitHub Pages ne connaît pas
  `/dardacha/seance/…` (ce n'est pas un fichier) ; il sert sa page
  d'erreur, qui est une copie de l'application, et celle-ci affiche la
  séance demandée.

## Vérification

- Export web local, servi sous `/dardacha/` et parcouru avec un navigateur
  sans écran (format téléphone) : Menu, module, séance, écriture arabe,
  liens « Signaler » ; aucun message d'erreur.
- Le lien « Signaler » mène à GitHub, qui demande de se connecter puis
  renvoie vers le formulaire prérempli.
- Lien direct vers une séance avec la page de repli : la séance s'affiche.
- Non vérifié : la voix dans Safari sur iPhone (pas d'appareil).
- **Prérequis côté utilisateur** : activer GitHub Pages (Settings → Pages
  → Source « GitHub Actions »), une seule fois.
