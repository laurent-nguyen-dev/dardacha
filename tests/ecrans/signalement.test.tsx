import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';
import { Linking } from 'react-native';

import { parcours } from '@/content/parcours';

// F16 : signaler une erreur (fonctionnel §3.9).

const seance = parcours[1].seances[2];
const lieuSeance = `Module 2 · Séance 3 · ${seance.titre}`;

let ouvrir: jest.SpyInstance;
beforeEach(() => {
  ouvrir = jest.spyOn(Linking, 'openURL').mockResolvedValue(undefined);
});
afterEach(() => ouvrir.mockRestore());

function parametre(cle: string): string | undefined {
  const lien: string = ouvrir.mock.calls[0][0];
  const paire = lien
    .split('?')[1]
    .split('&')
    .find((p) => p.startsWith(`${cle}=`));
  return paire && decodeURIComponent(paire.slice(cle.length + 1));
}

describe('Signaler une erreur (F16)', () => {
  it('depuis une expression de la séance : lieu, sens et formes préremplis', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });
    const [supplementaire] = seance.supplementaires;
    await act(async () => {
      fireEvent.press(
        screen.getAllByRole('link', {
          name: `Signaler une erreur sur « ${supplementaire.sens} »`,
        })[0],
      );
    });

    expect(ouvrir).toHaveBeenCalledTimes(1);
    expect(ouvrir.mock.calls[0][0]).toMatch(
      /^https:\/\/github\.com\/laurent-nguyen-dev\/dardacha\/issues\/new\?/,
    );
    expect(parametre('seance')).toBe(lieuSeance);
    expect(parametre('expression')).toBe(supplementaire.sens);
    expect(parametre('actuelle')).toContain(`darija : ${supplementaire.formes.darija}`);
  });

  it('chaque expression de base du vocabulaire comparé a son lien', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });
    for (const expression of seance.expressions) {
      expect(
        screen.getAllByRole('link', { name: `Signaler une erreur sur « ${expression.sens} »` })
          .length,
      ).toBeGreaterThan(0);
    }
  });

  it('depuis le bas de la séance : signalement sur la page', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });
    await act(async () => {
      fireEvent.press(screen.getByRole('link', { name: 'Signaler une erreur sur cette page' }));
    });
    expect(parametre('seance')).toBe(lieuSeance);
    expect(parametre('expression')).toBeUndefined();
  });

  it('depuis le mémo', async () => {
    await renderRouter('./src/app', { initialUrl: '/memo' });
    await act(async () => {
      fireEvent.press(screen.getByRole('link', { name: 'Signaler une erreur sur cette page' }));
    });
    expect(parametre('seance')).toBe('Mémo des chiffres SMS');
  });

  it('depuis les révisions : le module est indiqué', async () => {
    await renderRouter('./src/app', { initialUrl: '/revisions' });
    const [premiere] = parcours[0].seances[0].expressions;
    await act(async () => {
      fireEvent.press(
        screen.getAllByRole('link', { name: `Signaler une erreur sur « ${premiere.sens} »` })[0],
      );
    });
    expect(parametre('seance')).toBe(`Révisions · Module 1 · ${parcours[0].titre}`);
  });
});
