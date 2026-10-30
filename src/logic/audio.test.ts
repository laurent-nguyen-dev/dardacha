import { choisirVoix, texteALire, type VoixDisponible } from './audio';

function voix(identifier: string, language: string): VoixDisponible {
  return { identifier, language };
}

describe('choisirVoix (fonctionnel §6.3)', () => {
  const marocaine = voix('maroc', 'ar-MA');
  const tunisienne = voix('tunisie', 'ar_TN');
  const standard = voix('standard', 'ar');
  const saoudienne = voix('saoudienne', 'ar-SA');
  const egyptienne = voix('egypte', 'ar-EG');
  const francaise = voix('france', 'fr-FR');

  it('prend la langue exacte de la variante', () => {
    const toutes = [francaise, standard, marocaine, tunisienne];
    expect(choisirVoix('darija', toutes)).toEqual({ statut: 'voix', voix: marocaine });
    expect(choisirVoix('tounsi', toutes)).toEqual({ statut: 'voix', voix: tunisienne });
    expect(choisirVoix('msa', toutes)).toEqual({ statut: 'voix', voix: standard });
  });

  it("se replie sur l'arabe standard, puis sur toute voix arabe", () => {
    expect(choisirVoix('darija', [egyptienne, saoudienne])).toEqual({
      statut: 'voix',
      voix: saoudienne,
    });
    expect(choisirVoix('tounsi', [francaise, egyptienne])).toEqual({
      statut: 'voix',
      voix: egyptienne,
    });
  });

  it("signale l'absence de voix arabe", () => {
    expect(choisirVoix('msa', [francaise])).toEqual({ statut: 'aucune' });
  });

  it('laisse le téléphone choisir quand il ne fournit pas la liste des voix', () => {
    expect(choisirVoix('darija', [])).toEqual({ statut: 'langue' });
  });
});

describe('texteALire', () => {
  it('retire les précisions entre parenthèses et sépare les alternatives par une pause', () => {
    expect(texteALire('w nta ? (à un homme) / w nti ? (à une femme)')).toBe('w nta ?, w nti ?');
  });

  it('remplace les chiffres du chat par des lettres', () => {
    expect(texteALire('sba7 el-5ir')).toBe('sbah el-khir');
    expect(texteALire('masa2 al-5ayr')).toBe('masa al-khayr');
    expect(texteALire('3aslema, ya3tik sa77a, 9alilan, 6alib')).toBe(
      'aaslema, yaatik sahha, qalilan, talib',
    );
  });
});
