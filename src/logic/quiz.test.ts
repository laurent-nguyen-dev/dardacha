import type { Expression, Module, Seance } from '@/content/types';

import { genererQuiz } from './quiz';

/** Générateur pseudo-aléatoire reproductible (mulberry32) : même graine, même quiz. */
function graine(valeur: number): () => number {
  let etat = valeur;
  return () => {
    etat = (etat + 0x6d2b79f5) | 0;
    let t = Math.imul(etat ^ (etat >>> 15), 1 | etat);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function expression(sens: string, formes?: Partial<Expression['formes']>): Expression {
  return {
    sens,
    formes: { msa: `${sens}-msa`, darija: `${sens}-darija`, tounsi: `${sens}-tounsi`, ...formes },
  };
}

function seance(id: string, sens: string[]): Seance {
  return {
    id,
    titre: id,
    objectif: '',
    contexte: '',
    expressions: sens.slice(0, 3).map((s) => expression(s)),
    supplementaires: sens.slice(3).map((s) => expression(s)),
    defiOral: '',
    aRetenir: '',
    aToiDeJouer: '',
  };
}

const s1 = seance('s1', ['a', 'b', 'c', 'd', 'e', 'f']);
const s2 = seance('s2', ['g', 'h', 'i', 'j', 'k', 'l']);
const parcours: Module[] = [
  { id: 'm', icone: '', titre: '', description: '', reluParNatif: false, seances: [s1, s2] },
];

describe('genererQuiz (F08, fonctionnel §6.1)', () => {
  it('pose 4 questions : 3 sur les variantes, la 4e sur le sens', () => {
    const quiz = genererQuiz(parcours, 's1', graine(1));
    expect(quiz.map((q) => q.type)).toEqual(['variante', 'variante', 'variante', 'sens']);
  });

  it('fait tourner les variantes selon le rang de la séance', () => {
    expect(
      genererQuiz(parcours, 's1', graine(1))
        .map((q) => q.variante)
        .slice(0, 3),
    ).toEqual(['msa', 'darija', 'tounsi']);
    expect(
      genererQuiz(parcours, 's2', graine(1))
        .map((q) => q.variante)
        .slice(0, 3),
    ).toEqual(['darija', 'tounsi', 'msa']);
  });

  it('formule les énoncés et place la bonne réponse parmi 3 choix distincts', () => {
    const quiz = genererQuiz(parcours, 's1', graine(2));
    for (const question of quiz) {
      expect(question.choix).toHaveLength(3);
      expect(new Set(question.choix).size).toBe(3);
      expect(question.choix).toContain(question.bonneReponse);
    }
    const [premiere, , , derniere] = quiz;
    expect(premiere.enonce).toBe(`Comment dit-on « ${premiere.expression.sens} » en MSA ?`);
    expect(premiere.bonneReponse).toBe(premiere.expression.formes.msa);
    expect(derniere.bonneReponse).toBe(derniere.expression.sens);
    expect(derniere.enonce).toBe(
      `Que signifie « ${derniere.expression.formes[derniere.variante]} » ?`,
    );
  });

  it("n'interroge jamais deux fois la même expression", () => {
    for (let i = 0; i < 20; i++) {
      const sens = genererQuiz(parcours, 's1', graine(i)).map((q) => q.expression.sens);
      expect(new Set(sens).size).toBe(4);
    }
  });

  it('prend les distracteurs dans la séance quand elle en fournit assez', () => {
    for (let i = 0; i < 20; i++) {
      for (const question of genererQuiz(parcours, 's1', graine(i))) {
        for (const choix of question.choix) {
          expect(choix).toMatch(/^[a-f]/);
        }
      }
    }
  });

  it('complète avec le reste du cours quand la séance ne suffit pas', () => {
    // Seule « a » a une forme en MSA dans la séance : les distracteurs de la
    // question MSA doivent venir de l'autre séance.
    const petite = seance('petite', ['a', 'b', 'c', 'd']);
    for (const e of [...petite.expressions, ...petite.supplementaires].slice(1)) {
      e.formes.msa = null;
    }
    const autre = seance('autre', ['x', 'y', 'z']);
    const quiz = genererQuiz([{ ...parcours[0], seances: [petite, autre] }], 'petite', graine(3));
    const questionMsa = quiz.find((q) => q.type === 'variante' && q.variante === 'msa')!;
    expect(questionMsa.bonneReponse).toBe('a-msa');
    expect(questionMsa.choix.filter((c) => /^[xyz]-msa$/.test(c))).toHaveLength(2);
  });

  it('pose moins de questions plutôt que de répéter une expression', () => {
    const quiz = genererQuiz(
      [{ ...parcours[0], seances: [seance('trois', ['a', 'b', 'c'])] }],
      'trois',
      graine(3),
    );
    expect(quiz).toHaveLength(3);
  });

  it('exclut les formes vides ou commençant par un chiffre', () => {
    const s = seance('s', ['a', 'b', 'c', 'd', 'e', 'f']);
    for (const e of [...s.expressions, ...s.supplementaires].slice(0, 5)) {
      e.formes.msa = e.sens === 'a' ? null : `3${e.sens}`;
    }
    const quiz = genererQuiz([{ ...parcours[0], seances: [s] }], 's', graine(4));
    const questionMsa = quiz.find((q) => q.type === 'variante' && q.variante === 'msa')!;
    expect(questionMsa.expression.sens).toBe('f');
    expect(questionMsa.choix.every((c) => !/^\d/.test(c))).toBe(true);
  });

  it('donne le même quiz avec la même graine, un autre avec une autre graine', () => {
    expect(genererQuiz(parcours, 's1', graine(5))).toEqual(genererQuiz(parcours, 's1', graine(5)));
    const tirages = new Set(
      [6, 7, 8, 9, 10].map((g) =>
        JSON.stringify(genererQuiz(parcours, 's1', graine(g)).map((q) => q.choix)),
      ),
    );
    expect(tirages.size).toBeGreaterThan(1);
  });

  it('renvoie un quiz vide pour une séance inconnue', () => {
    expect(genererQuiz(parcours, 'inconnue', graine(1))).toEqual([]);
  });
});
