# T23 — Préparation à l'ouverture en open source

**Fait** :

- **README réécrit pour un visiteur** : ce qu'est l'application, ses
  fonctions, son état (contenu non relu par des natifs, signalé en
  évidence), comment l'installer, comment contribuer, puis la partie
  développeurs ; résumé en anglais pour être trouvé hors de la francophonie.
- **CONTRIBUTING.md** : priorité à la relecture du contenu par des natifs,
  ajout de modules sans code, règles pour le code (spécification d'abord,
  tests dans le même commit, contrôles avant la pull request).
- **Modèles d'issue** : « Correction de contenu » (séance, expression,
  variante, forme proposée, locuteur natif ou non) et « Bogue ».
- **SECURITY.md** : signalement privé des vulnérabilités.
- **CODE_OF_CONDUCT.md** : adaptation française et courte du Contributor
  Covenant 2.1 (attribution CC BY 4.0 incluse), avec une règle propre au
  projet : aucune variante de l'arabe ni aucune région n'est dénigrée.
- **Workflow APK** : la version de test publique n'est plus publiée que
  depuis `main` ; les autres branches gardent leur APK en artefact de
  build. Sans cela, n'importe quelle branche de contribution aurait
  remplacé l'APK proposé au public.
- **Formulations internes retirées** : AGENTS.md et technique §1.2
  décrivaient l'environnement de l'assistant ; ils décrivent maintenant le
  cas général (réseau filtré, `EXPO_OFFLINE=1`).
- **package.json** : description, dépôt et auteur (`private: true` reste :
  il empêche une publication accidentelle sur npm).

## Vérifié

Aucun secret dans les fichiers ni dans l'historique git. Points laissés à
la décision de l'auteur : voir le message de la session et
`questions-ouvertes.md`.

## Notions

- **Modèles d'issue en YAML** (`.github/ISSUE_TEMPLATE/*.yml`) : GitHub en
  fait un formulaire avec champs obligatoires, ce qui donne des
  signalements complets et comparables.
- **`if: github.ref == 'refs/heads/main'`** : une étape de workflow qui ne
  s'exécute que sur la branche principale.
