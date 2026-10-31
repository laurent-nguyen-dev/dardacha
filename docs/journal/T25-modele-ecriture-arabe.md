# T25 — Modèle et contrôle de l'écriture arabe

**Fait** : champ facultatif `arabe?: Partial<Record<Variante, string>>` sur
`Expression` ; règle `validerEcritureArabe` dans le contrôle automatique du
contenu (4 tests, écrits avant le code) ; section « Écriture arabe » du
guide [ajouter-un-module.md](../ajouter-un-module.md).

## Pourquoi

- **Facultatif** (`?` et `Partial`) : chaque module reçoit son écriture
  arabe quand elle est prête ; les autres continuent de fonctionner, et leurs
  fichiers n'ont pas à changer (décision de livraison module par module).
- **Un champ à côté de `formes`** plutôt que transformer chaque forme en
  objet `{ latin, arabe }` : aucun des 8 modules existants ni aucune règle
  (quiz, correcteur, révisions) n'est à réécrire.
- **Contrôles** : lettres arabes uniquement (une transcription latine collée
  par erreur est refusée), pas d'écriture arabe pour une variante vide, et
  même nombre d'alternatives « / » que la forme latine — c'est ce qui permet
  de rapprocher chaque forme latine de son écriture arabe.

## Notions

- **`Partial<Record<Variante, string>>`** : un objet dont chaque clé
  (`msa`, `darija`, `tounsi`) est autorisée mais facultative.
- **Caractères « communs »** : pour Unicode, la virgule arabe « ، » et le
  point d'interrogation « ؟ » n'appartiennent pas à l'écriture arabe mais
  aux caractères partagés ; l'expression régulière les autorise donc
  explicitement en plus de `\p{Script=Arabic}`.
