import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';

import { parcours } from '@/content/parcours';

describe('Révisions (F11)', () => {
  it('s’ouvre depuis la barre et affiche les fiches de chaque module', async () => {
    await renderRouter('./src/app');
    await act(async () => {
      fireEvent.press(screen.getByRole('button', { name: 'Révisions' }));
    });

    expect(screen).toHavePathname('/revisions');
    for (const [index, module] of parcours.entries()) {
      expect(
        screen.getByText(`${module.icone} Module ${index + 1} · ${module.titre}`),
      ).toBeVisible();
      const [premiere] = module.seances[0].expressions;
      expect(screen.getAllByText(premiere.sens).length).toBeGreaterThan(0);
      expect(
        screen.getAllByRole('button', { name: `Écouter en darija : ${premiere.formes.darija}` })
          .length,
      ).toBeGreaterThan(0);
    }
  });
});
