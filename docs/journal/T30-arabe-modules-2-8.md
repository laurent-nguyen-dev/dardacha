# T30 — Écriture arabe des modules 2 à 8

**Fait** : champ `arabe` pour les 147 expressions des modules 2 à 8 (21 par
module), un commit par module. Avec T29, les 8 modules et le mini-dialogue
ont maintenant l'écriture arabe : **toute l'application** l'affiche, la lit
et l'accepte dans le correcteur. Premier jet, **non relu par un natif**.

Lancé à la demande de l'utilisateur sans attendre la relecture du module 1 :
si la relecture native change une convention d'orthographe, elle devra être
reportée sur les 8 modules.

## Comment

- Un petit script temporaire (hors du dépôt) insérait le champ `arabe`
  après les `formes` de chaque expression, repérée par son sens français ;
  le contrôle automatique du contenu (T25) vérifiait ensuite chaque module :
  lettres arabes uniquement, même nombre d'alternatives que la forme
  latine, pas d'écriture arabe sans forme latine.
- Conventions de T29 : MSA sans voyelles, darija et tounsi dans
  l'orthographe d'usage courant.
- **Emprunts au français** (module 4 surtout) écrits en lettres arabes comme
  dans l'usage : « بيرو », « الباطرون », « كونجي », « سبور », « ريونيون ».
- **Abréviations du chat** (module 3) : « الحمدلله », « انشالله », « هههه ».
- Les deux expressions sans forme MSA (« hhhh », « N'importe quoi ! ») n'ont
  pas d'écriture arabe en MSA.

## À relire (contenu)

L'orthographe darija et tounsi est la partie à valider en priorité,
surtout l'argot du module 6 (« مقلق », « متغشش », « مسطريسي »), les
emprunts au français du module 4, et les verbes au présent darija en
« كن… » (« كنخدم », « كنعس »).
