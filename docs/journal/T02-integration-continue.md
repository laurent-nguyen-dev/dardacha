# T02 — Intégration continue

**Fait** : workflow GitHub Actions (`.github/workflows/ci.yml`) lancé à
chaque push et pull request : installation, types, analyse du code, mise en
forme, tests, audit des dépendances.

## Pourquoi

- **Les mêmes commandes qu'en local** (`npm run typecheck`, etc.) : si ça
  passe sur ta machine, ça passe en CI, et inversement. Aucune logique
  cachée dans le workflow.
- **`npm ci` plutôt que `npm install`** : installe exactement les versions
  du `package-lock.json`, sans le modifier. Deux installations donnent le
  même résultat.
- **`permissions: contents: read`** : le workflow ne peut que lire le dépôt.
  Principe du moindre privilège : s'il était compromis, il ne pourrait rien
  pousser.
- **Actions en v7** (dernière version majeure, vérifiée sur GitHub).
- Vérifié avant de pousser : la séquence complète a tourné sur une copie
  propre du dépôt (`git archive`).

## Notions

- **GitHub Actions** : GitHub lance une machine Linux neuve, récupère le
  code, et exécute les étapes du fichier YAML. Le résultat (vert/rouge)
  s'affiche sur chaque commit et chaque pull request.
- **`--ci`** (Jest) : en CI, Jest n'écrit jamais de nouveaux « snapshots » ;
  un snapshot manquant est une erreur au lieu d'être créé en silence.
