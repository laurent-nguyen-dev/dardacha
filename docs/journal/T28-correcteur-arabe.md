# T28 — Correcteur : réponses en écriture arabe

**Fait** : le correcteur de réponse libre compare aussi les écritures arabes
des expressions ; `normaliser` unifie l'écriture arabe (voyelles et hamza
portée retirées, ـ retiré, ى → ي, ة → ه). 2 tests ajoutés (normalisation,
reconnaissance).

## Pourquoi

- On peut répondre en lettres latines ou arabes (fonctionnel §6.2) : un
  apprenant qui commence à écrire l'arabe ne doit pas être pénalisé.
- **Normalisation choisie pour les écarts de saisie courants** : un clavier
  arabe produit facilement « عسلامه » au lieu de « عسلامة », ou « اسمي » au
  lieu de « إسمي ». Ces écarts ne sont pas des erreurs de langue.
- **Une seule chaîne de normalisation** : la décomposition Unicode qui
  retirait déjà les accents français retire aussi les voyelles arabes et la
  hamza portée ; seuls ـ, ى et ة demandent une règle explicite.

## Notions

- **Décomposition Unicode (NFD) et arabe** : « أ » est stocké comme un seul
  caractère, mais NFD le décompose en « ا » + hamza ; la hamza étant une
  « marque » (`\p{M}`), elle disparaît avec les accents.
