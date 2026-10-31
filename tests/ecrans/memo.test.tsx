import * as Speech from 'expo-speech';
import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';

import { memo } from '@/content/memo';
import { parcours } from '@/content/parcours';
import { genererQuizMemo } from '@/logic/quizMemo';
import { oublierVoix } from '@/services/audio';

async function appuyer(element: Parameters<typeof fireEvent.press>[0]) {
  await act(async () => {
    fireEvent.press(element);
  });
}

beforeEach(() => {
  jest.clearAllMocks();
  oublierVoix();
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe('Mémo des chiffres SMS (F12)', () => {
  it('s’ouvre depuis la barre et présente chaque chiffre', async () => {
    await renderRouter('./src/app');
    await appuyer(screen.getByRole('button', { name: 'Mémo' }));

    expect(screen).toHavePathname('/memo');
    for (const chiffre of memo) {
      expect(screen.getByText(chiffre.prononciation)).toBeVisible();
      expect(screen.getByText(chiffre.exemples[0].arabe)).toBeVisible();
    }
  });

  it('s’ouvre depuis une séance d’un module lié au mémo, et seulement de celles-là', async () => {
    const moduleSms = parcours.find((m) => m.lienMemo)!;
    await renderRouter('./src/app', { initialUrl: `/seance/${moduleSms.seances[0].id}` });
    await appuyer(screen.getByRole('button', { name: '🔢 Mémo des chiffres SMS' }));
    expect(screen).toHavePathname('/memo');

    const autre = parcours.find((m) => !m.lienMemo)!;
    await renderRouter('./src/app', { initialUrl: `/seance/${autre.seances[0].id}` });
    expect(screen.queryByRole('button', { name: '🔢 Mémo des chiffres SMS' })).toBeNull();
  });

  it('lit les exemples en écriture arabe', async () => {
    await renderRouter('./src/app', { initialUrl: '/memo' });
    const exemple = memo[0].exemples[0];
    await appuyer(screen.getByRole('button', { name: `Écouter en MSA : ${exemple.arabe}` }));
    expect(Speech.speak).toHaveBeenCalledWith(
      exemple.arabe,
      expect.objectContaining({ language: 'ar' }),
    );
  });

  it('corrige chaque réponse du quiz et affiche le score', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0);
    const quiz = genererQuizMemo(memo, () => 0);
    await renderRouter('./src/app', { initialUrl: '/memo' });

    for (const question of quiz) {
      // La même lettre apparaît dans plusieurs questions : on prend la
      // première encore active (les questions déjà répondues sont verrouillées).
      const bouton = screen
        .getAllByRole('button', { name: question.bonneReponse })
        .find((b) => !b.props.accessibilityState?.disabled)!;
      await appuyer(bouton);
    }

    expect(screen.getAllByText('✓ Bonne réponse !')).toHaveLength(quiz.length);
    expect(screen.getByText(`Score : ${quiz.length} / ${quiz.length}`)).toBeVisible();
  });
});
