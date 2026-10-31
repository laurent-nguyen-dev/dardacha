# T27 — Écoute de l'écriture arabe

**Fait** : `BoutonEcouter` reçoit l'écriture arabe de la forme (`arabe`) et
la lit à la place de la transcription latine quand elle existe ;
`texteArabeALire` prépare le texte (alternatives séparées par « ، » pour une
pause, points de suspension retirés). 2 tests de logique, 1 test d'écran
(lecture en arabe pour le MSA, en latin pour la darija sans écriture arabe).

## Pourquoi

- **C'est l'objectif de l'évolution** : une voix arabe prononce
  correctement un texte en écriture arabe, alors qu'elle devine une
  transcription latine (fonctionnel §6.3).
- **Un seul mécanisme** : le mémo, qui lisait déjà l'écriture arabe via une
  option `ecritureArabe`, passe maintenant par le même paramètre `arabe` ;
  l'option est supprimée.
- **Repli automatique** : sans écriture arabe pour la variante, on garde la
  préparation du latin de la version 1 (chiffres du chat remplacés, etc.).
