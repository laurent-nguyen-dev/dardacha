# Arabe au quotidien

Application mobile (Android et iPhone) pour apprendre en français l'arabe
parlé du quotidien, en comparant l'arabe littéraire moderne (MSA), la darija
marocaine et le tounsi tunisien.

**Reprendre le projet : lire [PROJECT_STATE.md](PROJECT_STATE.md) en premier.**

## Documentation

| Public       | Document                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| Tous         | [Cahier des charges](docs/cahier-des-charges.md)                                                       |
| Produit      | [Document fonctionnel](docs/fonctionnel.md) — ce que fait l'application                                |
| Développeurs | [Document technique](docs/technique.md), [backlog](docs/backlog.md), [journal](docs/journal/README.md) |
| Exploitation | [Installer et tester sur un téléphone](docs/exploitation.md)                                           |
| Utilisateurs | [Guide d'utilisation](docs/utilisateur.md)                                                             |

## Démarrer (développeurs)

Prérequis : Node.js 22 ou plus récent.

```sh
npm install
npm start          # lance le serveur Expo ; scanner le QR code avec Expo Go
```

Contrôles (les mêmes qu'en intégration continue) :

```sh
npm run typecheck     # vérification des types TypeScript
npm run lint          # analyse du code (ESLint)
npm run format:check  # mise en forme (Prettier) ; `npm run format` corrige
npm test              # tests (Jest)
npm run audit         # vulnérabilités des dépendances
```

Ajouter une dépendance : `npx expo install <paquet>` (choisit la version
compatible avec le SDK Expo), puis vérifier sa licence (docs/technique.md §7).

## Licence

MIT — voir [LICENSE](LICENSE).
