# T15 — Modules 3 et 4, données du mémo

**Fait** : `src/content/modules/sms.ts` (« SMS et WhatsApp » : lire les
chiffres du chat, écrire un message court, réagir dans une conversation),
`src/content/modules/quotidien.ts` (« Vie quotidienne » : raconter sa
journée, parler de son travail, de ses habitudes), ajoutés au registre ;
`src/content/memo.ts` : les 6 chiffres du chat (2, 3, 5, 6, 7, 9), leur
lettre arabe, leur son, une indication de prononciation et deux exemples
en écriture arabe chacun. Premiers jets, **non relus par un natif**.

## Pourquoi / ce que ça vérifie

- **Deuxième et troisième ajouts de modules** : seulement des fichiers de
  contenu et deux lignes du registre. Les tests par séance (`it.each`) et le
  contrôle de structure couvrent automatiquement les 12 séances.
- **Expressions sans MSA** (« hhhh ») ou commençant par un chiffre
  (« 3afak », « l7mdlh ») : autorisées hors des 2 premières expressions de
  base ; le quiz les écarte des questions de la variante concernée, comme
  le prévoit le fonctionnel §6.1.
- **Mémo contrôlé** : le test du contenu vérifie les 6 chiffres, des
  lettres et exemples réellement en écriture arabe, et que chaque exemple
  contient bien son chiffre.
- L'écran du mémo et le lien depuis le module 3 viennent au ticket T17.

## À relire (contenu)

Points les plus incertains : « Je suis en retard » (t3a66elt / t2a55ert),
« Super ! » en tounsi (mriguel), « Je me couche tard », « Le travail est
fatigant » en darija, « Jamais » (3emmerni ma / 3omri ma), et la
prononciation proposée pour chaque chiffre du mémo.

## Notions

- **`\p{Script=Arabic}`** : dans une expression régulière avec le drapeau
  `u`, « tout caractère de l'écriture arabe ». Sert à vérifier que la
  colonne « arabe » du mémo ne contient pas, par erreur, une transcription
  latine.
