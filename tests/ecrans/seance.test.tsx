import { renderRouter, screen } from 'expo-router/testing-library';

import { miniDialogue } from '@/content/dialogue';
import { parcours } from '@/content/parcours';

const seance = parcours[0].seances[0];

describe('Page séance (F03)', () => {
  it('affiche les sections dans l’ordre du fonctionnel §3.3', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });
    const titres = screen.getAllByRole('header').map((element) => element.props.children);
    expect(titres).toEqual([
      'Objectif',
      'Contexte et usage',
      'Expressions supplémentaires',
      'Défi oral',
      'Vocabulaire comparé',
      'À retenir',
      'Mini-dialogue',
      'Vérifie ta compréhension',
      'À toi de jouer',
    ]);
  });

  it('affiche le contenu de la séance dans les trois variantes', async () => {
    await renderRouter('./src/app', { initialUrl: `/seance/${seance.id}` });
    const [supplementaire] = seance.supplementaires;
    const [base] = seance.expressions;
    for (const texte of [
      seance.objectif,
      seance.contexte,
      seance.defiOral,
      seance.aRetenir,
      supplementaire.sens,
      supplementaire.formes.msa!,
      supplementaire.formes.darija!,
      supplementaire.formes.tounsi!,
      base.sens,
      base.formes.msa!,
      (seance.dialogue ?? miniDialogue)[2].expression.formes.tounsi!,
    ]) {
      expect(screen.getAllByText(texte).length).toBeGreaterThan(0);
    }
  });
});
