import { memo } from '@/content/memo';

import { genererQuizMemo } from './quizMemo';

function graine(valeur: number): () => number {
  let etat = valeur;
  return () => {
    etat = (etat + 0x6d2b79f5) | 0;
    let t = Math.imul(etat ^ (etat >>> 15), 1 | etat);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

describe('genererQuizMemo (F12, décision Q-10)', () => {
  it('pose 5 questions sur des chiffres tous différents', () => {
    for (let g = 0; g < 20; g++) {
      const quiz = genererQuizMemo(memo, graine(g));
      expect(quiz).toHaveLength(5);
      expect(new Set(quiz.map((q) => q.chiffre.chiffre)).size).toBe(5);
    }
  });

  it('demande la lettre arabe, parmi 3 lettres distinctes dont la bonne', () => {
    for (const question of genererQuizMemo(memo, graine(1))) {
      expect(question.enonce).toBe(
        `Quelle lettre arabe remplace le chiffre ${question.chiffre.chiffre} ?`,
      );
      expect(question.bonneReponse).toBe(question.chiffre.lettre);
      expect(question.choix).toHaveLength(3);
      expect(new Set(question.choix).size).toBe(3);
      expect(question.choix).toContain(question.bonneReponse);
      const lettres = memo.map((c) => c.lettre);
      expect(question.choix.every((choix) => lettres.includes(choix))).toBe(true);
    }
  });
});
