import { contientEnMotsEntiers, formesRetenues, normaliser } from './normalisation';

describe('normaliser (fonctionnel §6.2)', () => {
  it('met en minuscules et retire accents et ponctuation', () => {
    expect(normaliser('Ça va, TRÈS bien !')).toBe('ca va tres bien');
  });

  it('conserve les chiffres du chat et les lettres arabes', () => {
    expect(normaliser('Sba7 el-5ir… مرحبا')).toBe('sba7 el 5ir مرحبا');
  });

  it('unifie l’écriture arabe : voyelles, hamza portée, ـ, ى/ي, ة/ه', () => {
    expect(normaliser('أَنَا مِنْ فَرَنْسَا')).toBe('انا من فرنسا');
    expect(normaliser('إسمي')).toBe('اسمي');
    expect(normaliser('آخر مسؤول قائد')).toBe('اخر مسوول قايد');
    expect(normaliser('السلامـــة')).toBe('السلامه');
    expect(normaliser('على مدرسة')).toBe('علي مدرسه');
  });

  it('réduit les espaces multiples', () => {
    expect(normaliser('  salam   3likoum \n ')).toBe('salam 3likoum');
  });
});

describe('formesRetenues', () => {
  it('sépare les alternatives, ignore les parenthèses, normalise', () => {
    expect(formesRetenues('w nta ? (à un homme) / w nti ? (à une femme)')).toEqual([
      'w nta',
      'w nti',
    ]);
  });

  it('ne garde que les formes de 3 caractères ou plus', () => {
    expect(formesRetenues('la / salam')).toEqual(['salam']);
  });

  it("n'a aucune forme pour une variante vide", () => {
    expect(formesRetenues(null)).toEqual([]);
  });
});

describe('contientEnMotsEntiers', () => {
  it('trouve une forme composée de mots entiers', () => {
    expect(contientEnMotsEntiers('ana bikhir w nta labas', 'w nta')).toBe(true);
  });

  it('ne trouve pas une forme au milieu d’un mot', () => {
    expect(contientEnMotsEntiers('j ai besoin', 'bes')).toBe(false);
    expect(contientEnMotsEntiers('salamat', 'salam')).toBe(false);
  });
});
