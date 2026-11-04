# T34-T35 — Relecture par l'application

**Fait** : un lien « ⚑ Signaler » sous chaque expression, et « ⚑ Signaler
une erreur dans cette page » en bas des séances et du mémo (F16,
fonctionnel §3.9) ; guide du relecteur `docs/relecture.md` ; version
**1.3.0**.

## Pourquoi

- L'utilisateur ne peut pas organiser une relecture sur document (tableur,
  fichiers) : l'application doit être prête et se relire en étant
  distribuée.
- **Relire là où l'on apprend** : le natif voit l'expression dans son
  contexte (séance, dialogue) et signale d'un geste. Le formulaire arrive
  rempli : il ne reste qu'à choisir la variante et écrire la correction.
- **GitHub plutôt que l'e-mail** (choix de l'utilisateur) : chaque
  signalement devient une issue avec l'étiquette « contenu », qu'on suit et
  qu'on ferme quand la correction est publiée. Contrepartie : il faut un
  compte GitHub.
- **APK des releases** pour la distribution : déjà en place, gratuit ;
  Google Play et l'iPhone attendront.

## Fichiers

- `src/logic/signalement.ts` (+ tests) : URL du formulaire prérempli.
- `src/components/Signaler.tsx` : `BoutonSignaler` et le contexte
  `LieuSignalement`.
- Branchement : `Variantes.tsx` (toutes les cartes d'expression),
  `TableauVocabulaire.tsx`, pages séance, révisions et mémo ; texte de
  l'avertissement du Menu.
- `tests/ecrans/signalement.test.tsx` : lien depuis une expression, depuis
  le vocabulaire comparé, depuis le bas de la séance, le mémo et les
  révisions.
- `src/config.ts` : `depot`, l'adresse du dépôt.

## Notions

- **Préremplir un formulaire d'issue GitHub** : l'URL
  `…/issues/new?template=correction-contenu.yml&seance=…` remplit le champ
  dont l'`id` est `seance`. Un test vérifie que le formulaire a toujours les
  `id` utilisés par l'application.
- **Contexte React** (`createContext` / `useContext`) : la page séance
  « dépose » le lieu une fois ; chaque bouton « Signaler », même au fond
  d'un quiz, le lit sans qu'on le transmette de composant en composant.
- **`Linking.openURL`** : demande au téléphone d'ouvrir une adresse web
  dans le navigateur. L'application elle-même n'envoie rien.

## Vérification

- Types, lint, mise en forme et tests verts (138 tests).
- Pas de vérification visuelle hors téléphone (pas de version web dans le
  projet) : à regarder dans l'APK de la branche ou de la release.
