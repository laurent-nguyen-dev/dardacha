import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const sms: Module = {
  id: 'sms',
  icone: '📱',
  titre: 'SMS et WhatsApp',
  description: 'Écrire des messages courts, comprendre les chiffres du chat',
  reluParNatif: false,
  seances: [
    {
      id: 'sms-chiffres',
      titre: 'Lire les chiffres du chat',
      objectif: 'Reconnaître les chiffres qui remplacent des lettres arabes.',
      contexte:
        "Sur WhatsApp, on écrit l'arabe en lettres latines et on remplace par des chiffres les sons qui n'existent pas en français : 3, 7, 9… C'est la convention utilisée dans toute l'application. Les SMS se font surtout en darija ou en tounsi ; le MSA y est rare.",
      expressions: [
        {
          sens: 'Merci beaucoup',
          formes: {
            msa: 'choukran jazilan',
            darija: 'choukran bzaf',
            tounsi: 'ya3tik sa77a barcha',
          },
        },
        {
          sens: 'Bonne chance',
          formes: { msa: 'bi-ttawfi9', darija: 'lah ywaf9ek', tounsi: 'rabbi ywaf9ek' },
        },
        {
          sens: "S'il te plaît",
          formes: { msa: 'min fadlik', darija: '3afak', tounsi: '3aychek' },
        },
        {
          sens: "D'accord",
          formes: { msa: '7asanan', darija: 'wakha', tounsi: 'behi' },
        },
      ],
      supplementaires: [
        {
          sens: 'Mort de rire (mdr)',
          formes: { msa: null, darija: 'hhhh', tounsi: 'hhhh' },
        },
        {
          sens: 'Dieu merci (abrégé)',
          formes: { msa: 'al-7amdou lillah', darija: 'l7mdlh', tounsi: '7mdl' },
        },
        {
          sens: 'Inchallah (abrégé)',
          formes: { msa: 'in cha2a allah', darija: 'nchlh', tounsi: 'nchlh' },
        },
      ],
      defiOral:
        'Lis à voix haute : « choukran bzaf », « 3afak », « ya3tik sa77a ». Applique-toi sur le 3 et le 7.',
      aRetenir:
        '3 = ع (un « a » serré dans la gorge), 7 = ح (un « h » soufflé), 9 = ق (un « k » du fond de la gorge). On abrège beaucoup : « nchlh » pour inchallah, « hhhh » pour rire.',
      aToiDeJouer:
        "Écris un court message WhatsApp pour remercier quelqu'un, avec au moins un chiffre du chat.",
    },
    {
      id: 'sms-messages-courts',
      titre: 'Écrire un message court',
      objectif: "Envoyer un message simple : où es-tu, j'arrive, je suis en retard.",
      contexte:
        "Les messages sont courts et directs. Pour « où », la darija dit « fin » et le tounsi « win ». « J'arrive » s'accorde avec la personne qui écrit.",
      expressions: [
        {
          sens: 'Tu es où ?',
          formes: {
            msa: 'ayna anta ? (à un homme) / ayna anti ? (à une femme)',
            darija: 'fin nta ? (à un homme) / fin nti ? (à une femme)',
            tounsi: 'win enti ?',
          },
        },
        {
          sens: "J'arrive",
          formes: {
            msa: 'ana 9adim (homme) / ana 9adima (femme)',
            darija: 'ana jay (homme) / ana jaya (femme)',
            tounsi: 'ena jey (homme) / ena jeya (femme)',
          },
        },
        {
          sens: 'Je suis en retard',
          formes: {
            msa: 'ana mouta2a55ir (homme) / ana mouta2a55ira (femme)',
            darija: 't3a66elt',
            tounsi: 't2a55ert',
          },
        },
        {
          sens: 'Appelle-moi',
          formes: {
            msa: 'ittasil bi (à un homme) / ittasili bi (à une femme)',
            darija: '3ayyet liya',
            tounsi: 'kallamni',
          },
        },
      ],
      supplementaires: [
        {
          sens: "Je t'attends",
          formes: { msa: 'ana anta6irouk', darija: 'kantsennak', tounsi: 'nestannak' },
        },
        {
          sens: 'Tout de suite',
          formes: { msa: '7alan', darija: 'daba', tounsi: 'taw' },
        },
        {
          sens: "D'accord, à tout à l'heure",
          formes: {
            msa: '7asanan, ila al-li9a2',
            darija: 'wakha, nchoufek men b3d',
            tounsi: 'behi, nchoufek ba3d',
          },
        },
      ],
      defiOral:
        'Laisse un message vocal à un ami : demande-lui où il est et dis-lui que tu arrives tout de suite.',
      aRetenir:
        'Où : « fin » (darija), « win » (tounsi). Tout de suite : « daba » (darija), « taw » (tounsi).',
      aToiDeJouer:
        'Écris un SMS pour dire à un ami que tu es en retard et que tu arrives tout de suite.',
    },
    {
      id: 'sms-reagir',
      titre: 'Réagir dans une conversation',
      objectif: "Répondre vite : super, pas de souci, c'est vrai ?, félicitations.",
      contexte:
        "À l'écrit, on réagit en un ou deux mots. « Wakha » (darija) et « behi » (tounsi) veulent dire « d'accord » ; « behi » veut aussi dire « bien ».",
      expressions: [
        {
          sens: 'Super !',
          formes: { msa: 'moumtaz !', darija: 'zwin !', tounsi: 'mriguel !' },
        },
        {
          sens: 'Pas de souci',
          formes: {
            msa: 'la mouchkila',
            darija: 'ma kayn mouchkil',
            tounsi: 'ma famma 7atta mochkla',
          },
        },
        {
          sens: "C'est vrai ?",
          formes: { msa: 'hal hatha sa7i7 ?', darija: 'bse7 ?', tounsi: 'bel7a9 ?' },
        },
        {
          sens: 'Félicitations !',
          formes: { msa: 'mabrouk !', darija: 'mabrouk !', tounsi: 'mabrouk !' },
        },
      ],
      supplementaires: [
        {
          sens: "Je suis d'accord",
          formes: {
            msa: 'ana mouwafi9 (homme) / ana mouwafi9a (femme)',
            darija: 'ana mtafe9 (homme) / ana mtaf9a (femme)',
            tounsi: 'ena mouwafe9',
          },
        },
        {
          sens: 'Bravo !',
          formes: {
            msa: 'a7santa ! (à un homme) / a7santi ! (à une femme)',
            darija: 'tbarkellah 3lik !',
            tounsi: 'bravo 3lik !',
          },
        },
        {
          sens: 'Bon courage',
          formes: { msa: 'kana allah fi 3awnik', darija: 'lah y3awnek', tounsi: 'rabbi m3ak' },
        },
      ],
      defiOral:
        "Un ami t'annonce une bonne nouvelle : réagis de trois façons différentes, à voix haute.",
      aRetenir:
        '« Mabrouk ! » (félicitations) est commun aux trois variantes. Super : « zwin » (darija), « mriguel » (tounsi).',
      aToiDeJouer:
        "Un ami t'écrit qu'il a trouvé du travail : écris-lui une réponse de deux phrases.",
    },
  ],
};
