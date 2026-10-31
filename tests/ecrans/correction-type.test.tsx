import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';

import { config } from '@/config';
import { parcours } from '@/content/parcours';

async function appuyer(element: Parameters<typeof fireEvent.press>[0]) {
  await act(async () => {
    fireEvent.press(element);
  });
}

describe('Correction type du défi oral (F09)', () => {
  // Critère de recette 3 : dans chaque séance du parcours.
  const seances = parcours.flatMap((module) => module.seances);

  it.each(seances.map((s) => [s.id, s] as const))(
    'affiche puis masque les formules de la séance %s',
    async (_id, seance) => {
      const formules = seance.expressions.slice(0, config.correctionTypeNbFormules);
      // Une formule qui n'est pas aussi dans le tableau ou une autre section.
      const temoin = `${formules[0].sens}`;
      await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });
      const avant = screen.getAllByText(temoin).length;

      await appuyer(screen.getByRole('button', { name: 'Voir la correction type' }));
      expect(screen.getAllByText(temoin)).toHaveLength(avant + 1);
      for (const formule of formules) {
        expect(screen.getAllByText(formule.formes.tounsi ?? '—').length).toBeGreaterThan(0);
      }

      await appuyer(screen.getByRole('button', { name: 'Masquer la correction type' }));
      expect(screen.getAllByText(temoin)).toHaveLength(avant);
    },
  );
});
