import AsyncStorage from '@react-native-async-storage/async-storage';
import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';
import { Alert, type AlertButton } from 'react-native';

import { parcours } from '@/content/parcours';
import { CLE_STOCKAGE } from '@/services/progression';

const premierModule = parcours[0];
const seance1 = premierModule.seances[0];
const totalSeances = parcours.reduce((total, module) => total + module.seances.length, 0);

async function appuyer(element: Parameters<typeof fireEvent.press>[0]) {
  await act(async () => {
    fireEvent.press(element);
  });
}

/** Simule le choix d'un bouton dans la prochaine boîte de dialogue. */
function repondreAuDialogue(libelle: string) {
  jest.spyOn(Alert, 'alert').mockImplementationOnce((_titre, _message, boutons?: AlertButton[]) => {
    boutons?.find((bouton) => bouton.text === libelle)?.onPress?.();
  });
}

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe('Progression (F05, F06, F13)', () => {
  it('marque une séance comme terminée et met à jour tous les affichages', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance1.id}` });

    await appuyer(screen.getByRole('button', { name: 'Marquer comme terminée' }));

    expect(screen.getByRole('button', { name: '✓ Séance terminée' })).toBeDisabled();
    expect(screen.getByText(`1 / ${totalSeances} séances terminées`)).toBeVisible();
    expect(JSON.parse((await AsyncStorage.getItem(CLE_STOCKAGE))!)).toEqual([seance1.id]);

    await appuyer(screen.getByRole('button', { name: 'Retour aux séances' }));
    expect(
      screen.getByRole('button', { name: `Séance 1, ${seance1.titre}, terminée` }),
    ).toBeVisible();
  });

  it('retrouve la progression enregistrée au démarrage', async () => {
    await AsyncStorage.setItem(CLE_STOCKAGE, JSON.stringify([seance1.id, 'module-retire-1']));
    await renderRouter('./src/app');
    expect(await screen.findByText(`1 / ${totalSeances} séances terminées`)).toBeVisible();
    expect(screen.getByText(`1 / ${premierModule.seances.length} séances · 33 %`)).toBeVisible();
  });

  it('réinitialise après confirmation et revient au menu', async () => {
    await AsyncStorage.setItem(CLE_STOCKAGE, JSON.stringify([seance1.id]));
    await renderRouter('./src/app', { initialUrl: `/seance/${seance1.id}` });
    await screen.findByText(`1 / ${totalSeances} séances terminées`);

    repondreAuDialogue('Réinitialiser');
    await appuyer(screen.getByRole('button', { name: 'Réinitialiser' }));

    expect(screen).toHavePathname('/');
    expect(screen.getByText(`0 / ${totalSeances} séances terminées`)).toBeVisible();
    expect(await AsyncStorage.getItem(CLE_STOCKAGE)).toBe('[]');
  });

  it('ne change rien si la réinitialisation est annulée', async () => {
    await AsyncStorage.setItem(CLE_STOCKAGE, JSON.stringify([seance1.id]));
    await renderRouter('./src/app', { initialUrl: `/seance/${seance1.id}` });
    await screen.findByText(`1 / ${totalSeances} séances terminées`);

    repondreAuDialogue('Annuler');
    await appuyer(screen.getByRole('button', { name: 'Réinitialiser' }));

    expect(screen).toHavePathname(`/seance/${seance1.id}`);
    expect(screen.getByText(`1 / ${totalSeances} séances terminées`)).toBeVisible();
  });
});
