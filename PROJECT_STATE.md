# État du projet

À lire en premier avant toute session de travail.

- **Projet** : Dardacha (anciennement « Arabe au quotidien »), application mobile native (Android + iPhone),
  portage de la version web (PWA) existante.
- **Phase actuelle** : version 1.2 terminée : un mini-dialogue propre à chacune des 24 séances (sprint 6). Prochaine étape à choisir parmi les évolutions du fonctionnel §9.
- **Documents**
  - Fonctionnel : [docs/fonctionnel.md](docs/fonctionnel.md)
  - Technique : [docs/technique.md](docs/technique.md)
  - Questions ouvertes : [docs/questions-ouvertes.md](docs/questions-ouvertes.md)
  - Cahier des charges mobile (synthèse) : [docs/cahier-des-charges.md](docs/cahier-des-charges.md)
  - Cahier des charges de la version web (archive) : [docs/archives/cahier-des-charges-pwa.md](docs/archives/cahier-des-charges-pwa.md)
- **Règle** : le cahier des charges est une synthèse ; toute modification est
  reportée dans fonctionnel.md / technique.md dans le même commit, et inversement.
- **Ticket en cours** : aucun.
- **En attente de l'utilisateur** : relecture native du contenu, écriture arabe comprise (`src/content/`) ; choix de la prochaine évolution.
- **Versions** : numéro dans `app.json` (`node scripts/version.js X.Y.Z`), notes dans [docs/versions.md](docs/versions.md), publication par le workflow « Publier une version ».
- **Méthode** : un commit par ticket sur la branche de travail ; documents à jour dans le même commit.
- **Dernière entrée du journal** : [T33 — Versions numérotées](docs/journal/T33-versions.md)
