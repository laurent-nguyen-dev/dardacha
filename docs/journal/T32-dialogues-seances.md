# T32 — Mini-dialogues des 24 séances

**Fait** : un mini-dialogue de 4 répliques pour chacune des 24 séances
(96 répliques), un commit par module. Chaque réplique a son sens en
français, ses trois formes et leur écriture arabe. Premier jet, **non relu
par un natif**.

## Choix de rédaction

- **Deux personnages fixes** : A = Karim (un homme), B = Sara (une femme).
  Les accords sont donc toujours déterminés : Karim s'adresse à une femme
  (MSA « kayfa 7alouki ? », darija « nti »), Sara à un homme (« wa
  anta ? », « nta ») et parle d'elle au féminin (« ana mout3aba »). En
  tounsi, « enti » sert pour les deux.
- **Chaque dialogue met en scène la situation de la séance** et réemploie
  ses expressions (règle du fonctionnel §3.8).
- Le dialogue commun reste dans le code : c'est le repli pour un futur
  module sans dialogue.

## Comment

Un script temporaire (hors du dépôt) insérait le champ `dialogue` dans
chaque séance, repérée par son identifiant ; le contrôle automatique (T31)
vérifiait chaque module : 3 à 6 répliques, A/B en alternance, trois
variantes et écriture arabe valides.

## À relire (contenu)

Les accords au féminin en darija (« kat5dmi », « t9dri t3awli », « rdi
balek »), quelques tournures ajoutées pour les besoins du dialogue (« De
rien » : « bla jmil » ; « J'ai raté mon train » ; « On fête ça »), et les
emprunts au français (« tomobil », « karhba », « examen »).
