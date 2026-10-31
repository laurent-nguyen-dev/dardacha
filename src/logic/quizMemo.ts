// Quiz du mémo des chiffres SMS (F12, décision Q-10) : « Quelle lettre arabe
// remplace le chiffre X ? », 3 choix, chiffres tirés sans répétition.
import { config } from '@/config';
import type { ChiffreMemo } from '@/content/types';

import { melanger } from './hasard';

export interface QuestionMemo {
  enonce: string;
  chiffre: ChiffreMemo;
  choix: string[];
  bonneReponse: string;
}

export function genererQuizMemo(
  memo: readonly ChiffreMemo[],
  alea: () => number = Math.random,
): QuestionMemo[] {
  return melanger(memo, alea)
    .slice(0, config.quizMemoNbQuestions)
    .map((chiffre) => {
      const autres = melanger(
        memo.filter((c) => c !== chiffre).map((c) => c.lettre),
        alea,
      ).slice(0, config.quizNbChoix - 1);
      return {
        enonce: `Quelle lettre arabe remplace le chiffre ${chiffre.chiffre} ?`,
        chiffre,
        bonneReponse: chiffre.lettre,
        choix: melanger([chiffre.lettre, ...autres], alea),
      };
    });
}
