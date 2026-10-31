import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';

import { parcours } from '@/content/parcours';

const seance = parcours[0].seances[0];
const [bonjour, reponse] = seance.expressions;

async function appuyer(element: Parameters<typeof fireEvent.press>[0]) {
  await act(async () => {
    fireEvent.press(element);
  });
}

describe('Réponse libre (F10)', () => {
  it('demande un texte si la réponse est vide', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });
    await appuyer(screen.getByRole('button', { name: 'Corriger ma réponse' }));
    expect(
      screen.getByText("Écris d'abord ta réponse, puis touche « Corriger ma réponse »."),
    ).toBeVisible();
  });

  it('signale les expressions reconnues, propose les autres et rappelle les limites', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });
    await act(async () => {
      fireEvent.changeText(screen.getByLabelText('Ta réponse'), `${bonjour.formes.darija} !`);
    });
    await appuyer(screen.getByRole('button', { name: 'Corriger ma réponse' }));

    expect(screen.getByText(`✓ ${bonjour.sens} (darija)`)).toBeVisible();
    expect(screen.getByText('Tu pourrais aussi utiliser :')).toBeVisible();
    expect(screen.getAllByText(reponse.sens).length).toBeGreaterThan(0);
    expect(screen.getByText(/ne vérifie ni la grammaire/)).toBeVisible();
  });
});
