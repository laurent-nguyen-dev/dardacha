# T17 — Mémo des chiffres SMS (F12)

**Fait** : écran `src/app/memo.tsx` — une fiche par chiffre (chiffre =
lettre arabe, son, prononciation, exemples en transcription et en écriture
arabe, écoute de l'écriture arabe), puis un quiz de 5 questions
(`src/logic/quizMemo.ts`, 2 tests). Accès par l'entrée **Mémo** de la barre
et par un bouton dans les séances du module « SMS et WhatsApp ». 4 tests
d'écran.

## Pourquoi

- **Lien porté par le module** (`lienMemo: true`), pas par sa position :
  la spécification disait « module 3 » ; si l'on insère un module avant, le
  lien suit quand même le bon module. Spécification amendée en ce sens
  (fonctionnel §3.3 et F12).
- **Quiz rendu générique** : `Quiz` accepte maintenant n'importe quelles
  questions à choix (`generer`) et une correction à afficher (`correction`).
  Le quiz de séance et celui du mémo partagent le même affichage (couleurs,
  verrouillage, score, « Refaire ») sans code dupliqué ; les tests du quiz
  de séance sont restés verts après la transformation.
- **Outils de hasard partagés** (`logic/hasard.ts`) : `tirer` et `melanger`
  servent aux deux quiz.
- **Écoute de l'écriture arabe** : `BoutonEcouter` accepte
  `ecritureArabe` ; le texte est alors lu tel quel (fonctionnel §6.3), avec
  la voix d'arabe standard.
- Fiches plutôt qu'un tableau à colonnes : sur 360 pt, un tableau à six
  colonnes aurait obligé à défiler horizontalement pour lire chaque ligne.

## Notions

- **Composant générique** (`Quiz<Q extends QuestionAChoix>`) : le type des
  questions est un paramètre. TypeScript vérifie que la fonction de
  correction reçoit bien le type de question produit par `generer` (une
  `Question` de séance d'un côté, une `QuestionMemo` de l'autre).
- **`useState(generer)`** : passer la fonction elle-même (sans l'appeler)
  à `useState` la fait exécuter une seule fois, au premier affichage.
