import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const sms: Module = {
  id: 'sms',
  icone: '📱',
  titre: 'SMS et WhatsApp',
  description: 'Écrire des messages courts, comprendre les chiffres du chat',
  reluParNatif: false,
  lienMemo: true,
  seances: [
    {
      id: 'sms-chiffres',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Merci beaucoup !',
            formes: {
              msa: 'choukran jazilan !',
              darija: 'choukran bzaf !',
              tounsi: 'ya3tik sa77a barcha !',
            },
            arabe: { msa: 'شكرا جزيلا!', darija: 'شكرا بزاف!', tounsi: 'يعطيك الصحة برشا!' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'De rien. Bonne chance demain !',
            formes: {
              msa: '3afwan. bi-ttawfi9 ghadan !',
              darija: 'bla jmil. lah ywaf9ek ghedda !',
              tounsi: 'bla jmil. rabbi ywaf9ek ghodwa !',
            },
            arabe: {
              msa: 'عفوا. بالتوفيق غدا!',
              darija: 'بلا جميل. الله يوفقك غدا!',
              tounsi: 'بلا جميل. ربي يوفقك غدوة!',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: "Inchallah. Tu m'envoies l'adresse, s'il te plaît ?",
            formes: {
              msa: 'in cha2a allah. toursilina li al-3inwan, min fadliki ?',
              darija: 'inchallah. tsifti liya l-adresse, 3afak ?',
              tounsi: 'inchallah. tab3athli l-adresse, 3aychek ?',
            },
            arabe: {
              msa: 'إن شاء الله. ترسلين لي العنوان، من فضلك؟',
              darija: 'إن شاء الله. تصيفطي ليا لادريس، عافاك؟',
              tounsi: 'إن شاء الله. تبعثلي لادريس، عيشك؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "D'accord !",
            formes: { msa: '7asanan !', darija: 'wakha !', tounsi: 'behi !' },
            arabe: { msa: 'حسنا!', darija: 'واخا!', tounsi: 'بهي!' },
          },
        },
      ],
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
          arabe: { msa: 'شكرا جزيلا', darija: 'شكرا بزاف', tounsi: 'يعطيك الصحة برشا' },
        },
        {
          sens: 'Bonne chance',
          formes: { msa: 'bi-ttawfi9', darija: 'lah ywaf9ek', tounsi: 'rabbi ywaf9ek' },
          arabe: { msa: 'بالتوفيق', darija: 'الله يوفقك', tounsi: 'ربي يوفقك' },
        },
        {
          sens: "S'il te plaît",
          formes: { msa: 'min fadlik', darija: '3afak', tounsi: '3aychek' },
          arabe: { msa: 'من فضلك', darija: 'عافاك', tounsi: 'عيشك' },
        },
        {
          sens: "D'accord",
          formes: { msa: '7asanan', darija: 'wakha', tounsi: 'behi' },
          arabe: { msa: 'حسنا', darija: 'واخا', tounsi: 'بهي' },
        },
      ],
      supplementaires: [
        {
          sens: 'Mort de rire (mdr)',
          formes: { msa: null, darija: 'hhhh', tounsi: 'hhhh' },
          arabe: { darija: 'هههه', tounsi: 'هههه' },
        },
        {
          sens: 'Dieu merci (abrégé)',
          formes: { msa: 'al-7amdou lillah', darija: 'l7mdlh', tounsi: '7mdl' },
          arabe: { msa: 'الحمد لله', darija: 'الحمدلله', tounsi: 'حمدل' },
        },
        {
          sens: 'Inchallah (abrégé)',
          formes: { msa: 'in cha2a allah', darija: 'nchlh', tounsi: 'nchlh' },
          arabe: { msa: 'إن شاء الله', darija: 'انشالله', tounsi: 'انشالله' },
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
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu es où ?',
            formes: { msa: 'ayna anti ?', darija: 'fin nti ?', tounsi: 'win enti ?' },
            arabe: { msa: 'أين أنت؟', darija: 'فين نتي؟', tounsi: 'وين انتي؟' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "Je suis en retard, j'arrive tout de suite !",
            formes: {
              msa: 'ana mouta2a55ira, ana 9adima 7alan !',
              darija: 't3a66elt, ana jaya daba !',
              tounsi: 't2a55ert, ena jeya taw !',
            },
            arabe: {
              msa: 'أنا متأخرة، أنا قادمة حالا!',
              darija: 'تعطلت، أنا جاية دابا!',
              tounsi: 'تأخرت، أنا جاية توا!',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: "Pas de souci, je t'attends.",
            formes: {
              msa: 'la mouchkila, ana anta6irouki.',
              darija: 'ma kayn mouchkil, kantsennak.',
              tounsi: 'ma famma 7atta mochkla, nestannak.',
            },
            arabe: {
              msa: 'لا مشكلة، أنا أنتظرك.',
              darija: 'ما كاين مشكل، كنتسناك.',
              tounsi: 'ما فما حتى مشكلة، نستناك.',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "D'accord, à tout à l'heure !",
            formes: {
              msa: '7asanan, ila al-li9a2 !',
              darija: 'wakha, nchoufek men b3d !',
              tounsi: 'behi, nchoufek ba3d !',
            },
            arabe: {
              msa: 'حسنا، إلى اللقاء!',
              darija: 'واخا، نشوفك من بعد!',
              tounsi: 'بهي، نشوفك بعد!',
            },
          },
        },
      ],
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
          arabe: { msa: 'أين أنت؟ / أين أنت؟', darija: 'فين نتا؟ / فين نتي؟', tounsi: 'وين انتي؟' },
        },
        {
          sens: "J'arrive",
          formes: {
            msa: 'ana 9adim (homme) / ana 9adima (femme)',
            darija: 'ana jay (homme) / ana jaya (femme)',
            tounsi: 'ena jey (homme) / ena jeya (femme)',
          },
          arabe: {
            msa: 'أنا قادم / أنا قادمة',
            darija: 'أنا جاي / أنا جاية',
            tounsi: 'أنا جاي / أنا جاية',
          },
        },
        {
          sens: 'Je suis en retard',
          formes: {
            msa: 'ana mouta2a55ir (homme) / ana mouta2a55ira (femme)',
            darija: 't3a66elt',
            tounsi: 't2a55ert',
          },
          arabe: { msa: 'أنا متأخر / أنا متأخرة', darija: 'تعطلت', tounsi: 'تأخرت' },
        },
        {
          sens: 'Appelle-moi',
          formes: {
            msa: 'ittasil bi (à un homme) / ittasili bi (à une femme)',
            darija: '3ayyet liya',
            tounsi: 'kallamni',
          },
          arabe: { msa: 'اتصل بي / اتصلي بي', darija: 'عيط ليا', tounsi: 'كلمني' },
        },
      ],
      supplementaires: [
        {
          sens: "Je t'attends",
          formes: { msa: 'ana anta6irouk', darija: 'kantsennak', tounsi: 'nestannak' },
          arabe: { msa: 'أنا أنتظرك', darija: 'كنتسناك', tounsi: 'نستناك' },
        },
        {
          sens: 'Tout de suite',
          formes: { msa: '7alan', darija: 'daba', tounsi: 'taw' },
          arabe: { msa: 'حالا', darija: 'دابا', tounsi: 'توا' },
        },
        {
          sens: "D'accord, à tout à l'heure",
          formes: {
            msa: '7asanan, ila al-li9a2',
            darija: 'wakha, nchoufek men b3d',
            tounsi: 'behi, nchoufek ba3d',
          },
          arabe: {
            msa: 'حسنا، إلى اللقاء',
            darija: 'واخا، نشوفك من بعد',
            tounsi: 'بهي، نشوفك بعد',
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
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: "J'ai trouvé du travail !",
            formes: { msa: 'wajadtou 3amalan !', darija: 'l9it l-5edma !', tounsi: 'l9it 5edma !' },
            arabe: { msa: 'وجدت عملا!', darija: 'لقيت الخدمة!', tounsi: 'لقيت خدمة!' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "C'est vrai ? Félicitations !",
            formes: {
              msa: 'hal hatha sa7i7 ? mabrouk !',
              darija: 'bse7 ? mabrouk !',
              tounsi: 'bel7a9 ? mabrouk !',
            },
            arabe: { msa: 'هل هذا صحيح؟ مبروك!', darija: 'بصح؟ مبروك!', tounsi: 'بالحق؟ مبروك!' },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Merci ! On fête ça ce soir ?',
            formes: {
              msa: 'choukran ! hal na7tafil hatha al-masa2 ?',
              darija: 'choukran ! n7tafloo had l-3chiya ?',
              tounsi: 'ya3tik sa77a ! n7tflou el-lila ?',
            },
            arabe: {
              msa: 'شكرا! هل نحتفل هذا المساء؟',
              darija: 'شكرا! نحتافلو هاد العشية؟',
              tounsi: 'يعطيك الصحة! نحتفلو الليلة؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "Super, je suis d'accord !",
            formes: {
              msa: 'moumtaz, ana mouwafi9a !',
              darija: 'zwin, ana mtaf9a !',
              tounsi: 'mriguel, ena mouwafe9a !',
            },
            arabe: {
              msa: 'ممتاز، أنا موافقة!',
              darija: 'زوين، أنا متافقة!',
              tounsi: 'مريقل، أنا موافقة!',
            },
          },
        },
      ],
      titre: 'Réagir dans une conversation',
      objectif: "Répondre vite : super, pas de souci, c'est vrai ?, félicitations.",
      contexte:
        "À l'écrit, on réagit en un ou deux mots. « Wakha » (darija) et « behi » (tounsi) veulent dire « d'accord » ; « behi » veut aussi dire « bien ».",
      expressions: [
        {
          sens: 'Super !',
          formes: { msa: 'moumtaz !', darija: 'zwin !', tounsi: 'mriguel !' },
          arabe: { msa: 'ممتاز!', darija: 'زوين!', tounsi: 'مريقل!' },
        },
        {
          sens: 'Pas de souci',
          formes: {
            msa: 'la mouchkila',
            darija: 'ma kayn mouchkil',
            tounsi: 'ma famma 7atta mochkla',
          },
          arabe: { msa: 'لا مشكلة', darija: 'ما كاين مشكل', tounsi: 'ما فما حتى مشكلة' },
        },
        {
          sens: "C'est vrai ?",
          formes: { msa: 'hal hatha sa7i7 ?', darija: 'bse7 ?', tounsi: 'bel7a9 ?' },
          arabe: { msa: 'هل هذا صحيح؟', darija: 'بصح؟', tounsi: 'بالحق؟' },
        },
        {
          sens: 'Félicitations !',
          formes: { msa: 'mabrouk !', darija: 'mabrouk !', tounsi: 'mabrouk !' },
          arabe: { msa: 'مبروك!', darija: 'مبروك!', tounsi: 'مبروك!' },
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
          arabe: {
            msa: 'أنا موافق / أنا موافقة',
            darija: 'أنا متافق / أنا متافقة',
            tounsi: 'أنا موافق',
          },
        },
        {
          sens: 'Bravo !',
          formes: {
            msa: 'a7santa ! (à un homme) / a7santi ! (à une femme)',
            darija: 'tbarkellah 3lik !',
            tounsi: 'bravo 3lik !',
          },
          arabe: { msa: 'أحسنت! / أحسنت!', darija: 'تبارك الله عليك!', tounsi: 'برافو عليك!' },
        },
        {
          sens: 'Bon courage',
          formes: { msa: 'kana allah fi 3awnik', darija: 'lah y3awnek', tounsi: 'rabbi m3ak' },
          arabe: { msa: 'كان الله في عونك', darija: 'الله يعاونك', tounsi: 'ربي معاك' },
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
