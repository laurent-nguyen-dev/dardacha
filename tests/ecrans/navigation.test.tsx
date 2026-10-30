import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';

import { parcours } from '@/content/parcours';

// Parcours de navigation du sprint 1, sur le vrai contenu :
// Menu → Module → Séance → Séance suivante → Retour aux séances.
const premierModule = parcours[0];
const [seance1, seance2] = premierModule.seances;
// La navigation d'expo-router met à jour l'écran de façon asynchrone : on
// attend la fin de l'appui (act asynchrone) avant de vérifier l'écran.
async function appuyer(element: Parameters<typeof fireEvent.press>[0]) {
  await act(async () => {
    fireEvent.press(element);
  });
}

const totalSeances = parcours.reduce((total, module) => total + module.seances.length, 0);

describe('Navigation', () => {
  it('affiche un menu avec une carte par module et la progression globale', async () => {
    await renderRouter('./src/app');
    for (const module of parcours) {
      expect(screen.getByText(module.titre)).toBeVisible();
    }
    expect(screen.getByText(`0 / ${totalSeances} séances terminées`)).toBeVisible();
    expect(
      screen.getByText('Contenu en cours de relecture par des locuteurs natifs.'),
    ).toBeVisible();
  });

  it('ouvre un module puis une séance, enchaîne et revient aux séances', async () => {
    await renderRouter('./src/app');

    await appuyer(screen.getByText(premierModule.titre));
    expect(screen).toHavePathname(`/module/${premierModule.id}`);
    expect(screen.getByText(seance1.titre)).toBeVisible();

    await appuyer(screen.getByText(seance1.titre));
    expect(screen).toHavePathname(`/seance/${seance1.id}`);
    expect(screen.getByText(seance1.objectif)).toBeVisible();

    await appuyer(screen.getByText('Séance suivante'));
    expect(screen).toHavePathname(`/seance/${seance2.id}`);

    await appuyer(screen.getByText('Retour aux séances'));
    expect(screen).toHavePathname(`/module/${premierModule.id}`);
  });

  it('désactive « Séance suivante » sur la dernière séance du parcours', async () => {
    const derniere = parcours[parcours.length - 1].seances.at(-1)!;
    await renderRouter('./src/app', { initialUrl: `/seance/${derniere.id}` });
    expect(screen.getByRole('button', { name: 'Séance suivante' })).toBeDisabled();
  });

  it('revient au menu depuis la barre permanente', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance1.id}` });
    await appuyer(screen.getByRole('button', { name: /Menu/ }));
    expect(screen).toHavePathname('/');
  });

  it('signale une séance inexistante', async () => {
    await renderRouter('./src/app', { initialUrl: '/seance/inexistante' });
    expect(screen.getByText("Cette séance n'existe pas.")).toBeVisible();
  });
});
