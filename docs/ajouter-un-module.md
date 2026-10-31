# Ajouter un module

Ajouter un module ne demande **aucune modification des écrans ni de la
logique** : c'est uniquement du contenu (fonctionnel.md §3.6).

## Étapes

1. **Choisir un identifiant permanent** pour le module et pour chacune de ses
   séances : minuscules, chiffres et tirets (`sorties`, `sorties-proposer`).
   Un identifiant n'a aucun lien avec la position du module, n'est **jamais
   modifié** une fois publié, et **jamais réutilisé** pour autre chose : la
   progression des utilisateurs y est rattachée.
2. **Créer le fichier** `src/content/modules/<identifiant>.ts`, qui exporte un
   objet de type `Module` (`src/content/types.ts`). S'inspirer d'un module
   existant. Laisser `reluParNatif: false` tant qu'il n'a pas été relu par
   des locuteurs natifs.
3. **L'ajouter au registre** `src/content/parcours.ts`, à la place voulue
   dans la liste : l'ordre du registre est l'ordre d'affichage.
4. **Lancer `npm test`.** Le contrôle du contenu signale toute erreur de
   structure, en français, avec la séance concernée.

## Options

- `lienMemo: true` : les séances du module affichent un bouton vers le mémo
  des chiffres SMS (utilisé par le module « SMS et WhatsApp »).

## Règles vérifiées automatiquement

Les valeurs chiffrées viennent de `src/config.ts`.

- Identifiants bien formés et uniques sur tout le parcours (modules et
  séances confondus).
- Au moins une séance par module.
- Par séance : 3 à 5 expressions de base, exactement 3 supplémentaires, tous
  les textes remplis.
- Chaque expression a une forme dans au moins une variante.
- Les 2 premières expressions de base (reprises dans les révisions) ont une
  forme dans les trois variantes, qui ne commence pas par un chiffre.

## Conventions de rédaction

- Transcription latine avec les chiffres du chat : 2 = ء, 3 = ع, 5 = خ,
  6 = ط, 7 = ح, 9 = ق. Voyelles longues non marquées (« salam »).
- Variante absente : `null` (affichée « — »).
- Formes alternatives séparées par `/` ; précisions entre parenthèses, par
  ex. `labas 3lik (à un homme) / labas 3lik (à une femme)`.

## Retirer ou déplacer un module

Déplacer = changer sa place dans le registre (la progression est conservée).
Retirer = l'enlever du registre ; sa progression n'est plus comptée, et
revient s'il est remis sous le même identifiant.
