import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';

import { parcours } from '@/content/parcours';
import { genererQuiz } from '@/logic/quiz';

const [seance1, seance2] = parcours[0].seances;

async function appuyer(element: Parameters<typeof fireEvent.press>[0]) {
  await act(async () => {
    fireEvent.press(element);
  });
}

// Math.random figé : le quiz affiché est celui que genererQuiz produit avec
// le même tirage, ce qui permet de connaître les bonnes réponses.
beforeEach(() => {
  jest.spyOn(Math, 'random').mockReturnValue(0);
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe('Quiz de séance (F08)', () => {
  it('corrige chaque réponse, la verrouille, puis affiche le score', async () => {
    const quiz = genererQuiz(parcours, seance1.id, () => 0);
    await renderRouter('./src/app', { initialUrl: `/seance/${seance1.id}` });

    // Question 1 : bonne réponse. Question 2 : mauvaise. Autres : bonnes.
    for (const [index, question] of quiz.entries()) {
      const choix =
        index === 1
          ? question.choix.find((c) => c !== question.bonneReponse)!
          : question.bonneReponse;
      await appuyer(screen.getAllByRole('button', { name: choix })[0]);
    }

    expect(screen.getAllByText('✓ Bonne réponse !')).toHaveLength(quiz.length - 1);
    expect(screen.getByText(`✗ La bonne réponse était : ${quiz[1].bonneReponse}`)).toBeVisible();
    expect(screen.getByText(`Score : ${quiz.length - 1} / ${quiz.length}`)).toBeVisible();
    for (const choix of quiz[0].choix) {
      expect(screen.getAllByRole('button', { name: choix })[0]).toBeDisabled();
    }
  });

  it('propose de refaire avec un nouveau tirage', async () => {
    const quiz = genererQuiz(parcours, seance1.id, () => 0);
    await renderRouter('./src/app', { initialUrl: `/seance/${seance1.id}` });
    for (const question of quiz) {
      await appuyer(screen.getAllByRole('button', { name: question.bonneReponse })[0]);
    }

    await appuyer(screen.getByRole('button', { name: 'Refaire avec de nouvelles questions' }));

    expect(screen.queryByText(/^Score/)).toBeNull();
    expect(screen.queryByText('✓ Bonne réponse !')).toBeNull();
  });

  it('repart d’un quiz neuf à la séance suivante', async () => {
    const quiz = genererQuiz(parcours, seance1.id, () => 0);
    await renderRouter('./src/app', { initialUrl: `/seance/${seance1.id}` });
    await appuyer(screen.getAllByRole('button', { name: quiz[0].bonneReponse })[0]);

    await appuyer(screen.getByRole('button', { name: 'Séance suivante' }));

    expect(screen).toHavePathname(`/seance/${seance2.id}`);
    expect(screen.queryByText('✓ Bonne réponse !')).toBeNull();
    expect(
      screen.getByText(genererQuiz(parcours, seance2.id, () => 0)[0].enonce, { exact: false }),
    ).toBeVisible();
  });
});
