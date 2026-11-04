import type { Expression } from '@/content/types';

import { formesActuelles, lienSignalement } from './signalement';

const DEPOT = 'https://github.com/laurent-nguyen-dev/dardacha';

const expression: Expression = {
  sens: 'Au revoir',
  formes: { msa: 'ma3a as-salama', darija: 'bslama', tounsi: null },
  arabe: { msa: 'مع السلامة', darija: 'بسلامة' },
};

function parametres(lien: string): Record<string, string> {
  const [, requete] = lien.split('?');
  return Object.fromEntries(
    requete.split('&').map((paire) => {
      const [cle, valeur] = paire.split('=');
      return [cle, decodeURIComponent(valeur)];
    }),
  );
}

describe('formesActuelles (F16)', () => {
  it('liste les trois variantes, avec l’écriture arabe et « — » si absente', () => {
    expect(formesActuelles(expression)).toBe(
      'MSA : ma3a as-salama (مع السلامة) · darija : bslama (بسلامة) · tounsi : —',
    );
  });
});

describe('lienSignalement (F16)', () => {
  it('ouvre le formulaire « correction de contenu » du dépôt', () => {
    const lien = lienSignalement({ lieu: 'Module 1 · Séance 1 · Saluer' });
    expect(lien.startsWith(`${DEPOT}/issues/new?`)).toBe(true);
    expect(parametres(lien).template).toBe('correction-contenu.yml');
  });

  it('préremplit le lieu, le sens, les formes actuelles et le titre', () => {
    const p = parametres(lienSignalement({ lieu: 'Module 1 · Séance 1 · Saluer', expression }));
    expect(p.seance).toBe('Module 1 · Séance 1 · Saluer');
    expect(p.expression).toBe('Au revoir');
    expect(p.actuelle).toBe(formesActuelles(expression));
    expect(p.title).toBe('Contenu : Au revoir');
  });

  it('sans expression, ne préremplit que le lieu', () => {
    const p = parametres(lienSignalement({ lieu: 'Mémo des chiffres SMS' }));
    expect(p.seance).toBe('Mémo des chiffres SMS');
    expect(p.title).toBe('Contenu : Mémo des chiffres SMS');
    expect(p.expression).toBeUndefined();
    expect(p.actuelle).toBeUndefined();
  });

  it('encode les caractères spéciaux (&, ?, #, espaces, arabe)', () => {
    const lien = lienSignalement({
      lieu: 'A & B ? #1',
      expression: { ...expression, sens: 'Ça va ? & toi' },
    });
    expect(lien).not.toMatch(/[ #]/);
    expect(parametres(lien).expression).toBe('Ça va ? & toi');
    expect(parametres(lien).seance).toBe('A & B ? #1');
  });
});

describe('formulaire GitHub (technique §2.4)', () => {
  it('a bien les champs préremplis par le lien', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { readFileSync } = require('fs') as {
      readFileSync: (chemin: string, codage: string) => string;
    };
    const formulaire = readFileSync('.github/ISSUE_TEMPLATE/correction-contenu.yml', 'utf8');
    for (const id of ['seance', 'expression', 'actuelle']) {
      expect(formulaire).toMatch(new RegExp(`^\\s+id: ${id}$`, 'm'));
    }
  });
});
