# Contribuer à Dardacha

Merci de votre intérêt ! Les contributions sont bienvenues, en français.

## Corriger le contenu (locuteurs natifs)

C'est la contribution la plus utile aujourd'hui : le contenu est un premier
jet qui n'a pas encore été relu par des locuteurs natifs.

- **Signaler** : ouvrir une issue avec le modèle « Correction de contenu »
  (séance, expression, variante, forme proposée).
- **Corriger directement** : modifier le fichier du module dans
  `src/content/modules/` et ouvrir une pull request. Les conventions de
  transcription (chiffres du chat, « ou », « ch »…) sont dans
  [docs/ajouter-un-module.md](docs/ajouter-un-module.md).
- Une fois un module entièrement relu par un locuteur natif, passer son
  champ `reluParNatif` à `true`.

## Ajouter un module

Un module est un fichier de contenu, sans code : suivre
[docs/ajouter-un-module.md](docs/ajouter-un-module.md). `npm test` vérifie
automatiquement sa structure.

## Contribuer au code

1. Lire [PROJECT_STATE.md](PROJECT_STATE.md), puis le
   [document fonctionnel](docs/fonctionnel.md) (ce que fait l'application)
   et le [document technique](docs/technique.md) (comment elle est faite).
2. Une règle qui n'est pas écrite dans le document fonctionnel se discute
   d'abord dans une issue : on l'écrit dans la spécification avant de la
   coder.
3. Créer une branche, faire une modification ciblée, avec ses tests dans le
   même commit (logique dans `src/logic/`, testée sans téléphone).
4. Lancer les contrôles avant d'ouvrir la pull request :

   ```sh
   npm run typecheck && npm run lint && npm run format:check && npm test && npm run audit
   ```

5. Décrire dans la pull request **pourquoi** la modification est faite, pas
   seulement ce qu'elle fait.

Ajouter une dépendance : `npx expo install <paquet>`, puis vérifier que sa
licence est compatible avec la licence MIT du projet (docs/technique.md §7).

## Respect

Toute participation au projet suit le [code de conduite](CODE_OF_CONDUCT.md) :
échanges courtois et bienveillants, en particulier envers les personnes qui
débutent en arabe ou en programmation, et respect de toutes les variantes de
l'arabe.
