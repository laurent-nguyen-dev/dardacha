import * as Speech from 'expo-speech';
import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';
import { Alert } from 'react-native';

import { parcours } from '@/content/parcours';
import { config } from '@/config';
import { oublierVoix } from '@/services/audio';

const seance = parcours[0].seances[0];
const [supplementaire] = seance.supplementaires;

async function appuyer(element: Parameters<typeof fireEvent.press>[0]) {
  await act(async () => {
    fireEvent.press(element);
  });
}

beforeEach(() => {
  jest.clearAllMocks();
  oublierVoix();
});

describe('Écoute (F07)', () => {
  it('lit la forme dans la variante choisie, avec la voix et la vitesse prévues', async () => {
    jest
      .mocked(Speech.getAvailableVoicesAsync)
      .mockResolvedValue([
        { identifier: 'voix-maroc', name: 'Maroc', language: 'ar-MA', quality: 'Default' },
      ] as Speech.Voice[]);
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });

    await appuyer(
      screen.getByRole('button', { name: `Écouter en darija : ${supplementaire.formes.darija}` }),
    );

    expect(Speech.stop).toHaveBeenCalled();
    expect(Speech.speak).toHaveBeenCalledWith(expect.any(String), {
      language: 'ar-MA',
      voice: 'voix-maroc',
      rate: config.vitesseLecture,
    });
  });

  it('prévient sans planter quand aucune voix arabe n’est installée', async () => {
    jest
      .mocked(Speech.getAvailableVoicesAsync)
      .mockResolvedValue([
        { identifier: 'fr', name: 'Français', language: 'fr-FR', quality: 'Default' },
      ] as Speech.Voice[]);
    const alerte = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });

    await appuyer(screen.getAllByRole('button', { name: /^Écouter en MSA/ })[0]);

    expect(Speech.speak).not.toHaveBeenCalled();
    expect(alerte).toHaveBeenCalledWith('Pas de voix arabe', expect.stringContaining('Android'));
  });
});
