import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const sentiments: Module = {
  id: 'sentiments',
  icone: '💛',
  titre: 'Relations et sentiments',
  description: "Parler d'amitié et d'affection avec tact",
  reluParNatif: false,
  seances: [
    {
      id: 'sentiments-amitie',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: "Tu m'as manqué !",
            formes: { msa: 'ichta9tou ilayki !', darija: 'twe77echtek !', tounsi: 'twa7chtek !' },
            arabe: { msa: 'اشتقت إليك!', darija: 'توحشتك!', tounsi: 'توحشتك!' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Toi aussi ! On se connaît depuis longtemps.',
            formes: {
              msa: 'wa anta aydan ! nata3arafou mounthou zaman.',
              darija: '7ta nta ! kan3erfo ba3diyatna chhal hadi.',
              tounsi: 'enti zeda ! na3arfou b3adhna men zman.',
            },
            arabe: {
              msa: 'وأنت أيضا! نتعارف منذ زمان.',
              darija: 'حتى نتا! كنعرفو بعضياتنا شحال هادي.',
              tounsi: 'انتي زادة! نعرفو بعضنا من زمان.',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu es ma meilleure amie. Tu peux compter sur moi.',
            formes: {
              msa: 'anti sadi9ati al-mou9arraba. youmkinouki al-i3timad 3alayya.',
              darija: 'nti a7san sa7bti. t9dri t3awli 3liya.',
              tounsi: 'enti a7sen sa7bti. tnajjem t3awel 3liya.',
            },
            arabe: {
              msa: 'أنت صديقتي المقربة. يمكنك الاعتماد علي.',
              darija: 'نتي أحسن صاحبتي. تقدري تعولي عليا.',
              tounsi: 'انتي أحسن صاحبتي. تنجم تعول عليا.',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "Merci d'être là.",
            formes: {
              msa: 'choukran li-woujoudik.',
              darija: 'choukran 3la wjoudek.',
              tounsi: 'ya3tik sa77a 3la wjoudek.',
            },
            arabe: {
              msa: 'شكرا لوجودك.',
              darija: 'شكرا على وجودك.',
              tounsi: 'يعطيك الصحة على وجودك.',
            },
          },
        },
      ],
      titre: "Parler d'amitié",
      objectif: "Dire qu'on apprécie quelqu'un, présenter un ami.",
      contexte:
        '« Sa7bi / sa7bti » (mon ami / mon amie) en darija et en tounsi. Attention : selon le contexte, « sa7bti » peut aussi vouloir dire « ma copine ».',
      expressions: [
        {
          sens: "C'est mon ami(e)",
          formes: {
            msa: 'hatha sadi9i (un ami) / hathihi sadi9ati (une amie)',
            darija: 'hada sa7bi (un ami) / hadi sa7bti (une amie)',
            tounsi: 'hedha sa7bi (un ami) / hedhi sa7bti (une amie)',
          },
          arabe: {
            msa: 'هذا صديقي / هذه صديقتي',
            darija: 'هادا صاحبي / هادي صاحبتي',
            tounsi: 'هذا صاحبي / هذي صاحبتي',
          },
        },
        {
          sens: "Je t'apprécie beaucoup",
          formes: {
            msa: 'ou9addirouka kathiran (à un homme) / ou9addirouki kathiran (à une femme)',
            darija: 'kan7tremek bzaf',
            tounsi: 'n9adrek barcha',
          },
          arabe: { msa: 'أقدرك كثيرا / أقدرك كثيرا', darija: 'كنحترمك بزاف', tounsi: 'نقدرك برشا' },
        },
        {
          sens: 'On se connaît depuis longtemps',
          formes: {
            msa: 'nata3arafou mounthou zaman',
            darija: 'kan3erfo ba3diyatna chhal hadi',
            tounsi: 'na3arfou b3adhna men zman',
          },
          arabe: {
            msa: 'نتعارف منذ زمان',
            darija: 'كنعرفو بعضياتنا شحال هادي',
            tounsi: 'نعرفو بعضنا من زمان',
          },
        },
        {
          sens: 'Tu peux compter sur moi',
          formes: {
            msa: 'youmkinouka al-i3timad 3alayya',
            darija: 't9der t3awel 3liya',
            tounsi: 'tnajjem t3awel 3liya',
          },
          arabe: { msa: 'يمكنك الاعتماد علي', darija: 'تقدر تعول عليا', tounsi: 'تنجم تعول عليا' },
        },
      ],
      supplementaires: [
        {
          sens: 'Mon meilleur ami',
          formes: {
            msa: 'sadi9i al-mou9arrab',
            darija: 'a7san sa7bi',
            tounsi: 'a7sen sa7bi',
          },
          arabe: { msa: 'صديقي المقرب', darija: 'أحسن صاحبي', tounsi: 'أحسن صاحبي' },
        },
        {
          sens: "Tu m'as manqué",
          formes: {
            msa: 'ichta9tou ilayk',
            darija: 'twe77echtek',
            tounsi: 'twa7chtek',
          },
          arabe: { msa: 'اشتقت إليك', darija: 'توحشتك', tounsi: 'توحشتك' },
        },
        {
          sens: "Merci d'être là",
          formes: {
            msa: 'choukran li-woujoudik',
            darija: 'choukran 3la wjoudek',
            tounsi: 'ya3tik sa77a 3la wjoudek',
          },
          arabe: { msa: 'شكرا لوجودك', darija: 'شكرا على وجودك', tounsi: 'يعطيك الصحة على وجودك' },
        },
      ],
      defiOral: "Présente ton meilleur ami à quelqu'un, puis dis à ton ami que tu l'apprécies.",
      aRetenir:
        'Mon ami : « sa7bi » (darija et tounsi). Beaucoup : « bzaf » (darija), « barcha » (tounsi).',
      aToiDeJouer: "Écris un message à un ami pour lui dire qu'il t'a manqué.",
    },
    {
      id: 'sentiments-affection',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Je pense à toi. Prends soin de toi.',
            formes: {
              msa: 'oufakkirou fiki. i3tani bi-nafsiki.',
              darija: 'kanfekker fik. rdi balek 3la rasek.',
              tounsi: 'n5ammem fik. rod balek 3la rou7ek.',
            },
            arabe: {
              msa: 'أفكر فيك. اعتني بنفسك.',
              darija: 'كنفكر فيك. ردي بالك على راسك.',
              tounsi: 'نخمم فيك. رد بالك على روحك.',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Toi aussi. Je tiens à toi.',
            formes: {
              msa: 'wa anta aydan. anta 3aziz 3alayya.',
              darija: '7ta nta. nta 3ziz 3liya.',
              tounsi: 'enti zeda. enti 3ziz 3liya.',
            },
            arabe: {
              msa: 'وأنت أيضا. أنت عزيز علي.',
              darija: 'حتى نتا. نتا عزيز عليا.',
              tounsi: 'انتي زادة. انتي عزيز عليا.',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Je suis fier de toi.',
            formes: {
              msa: 'ana fa5our biki.',
              darija: 'ana fa5our bik.',
              tounsi: 'ena fa5our bik.',
            },
            arabe: { msa: 'أنا فخور بك.', darija: 'أنا فخور بيك.', tounsi: 'أنا فخور بيك.' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Que Dieu te protège !',
            formes: { msa: 'allah ya7mik !', darija: 'lla ye7mik !', tounsi: 'rabbi y7amik !' },
            arabe: { msa: 'الله يحميك!', darija: 'الله يحميك!', tounsi: 'ربي يحميك!' },
          },
        },
      ],
      titre: 'Exprimer son affection avec tact',
      objectif: 'Montrer son attachement avec pudeur, selon le contexte.',
      contexte:
        'Les déclarations directes sont rares en public. On passe volontiers par des formules affectueuses et des souhaits : « rd balek 3la rasek » (prends soin de toi).',
      expressions: [
        {
          sens: 'Je tiens à toi',
          formes: {
            msa: 'anta 3aziz 3alayya (à un homme) / anti 3aziza 3alayya (à une femme)',
            darija: 'nta 3ziz 3liya (à un homme) / nti 3ziza 3liya (à une femme)',
            tounsi: 'enti 3ziz 3liya (à un homme) / enti 3ziza 3liya (à une femme)',
          },
          arabe: {
            msa: 'أنت عزيز علي / أنت عزيزة علي',
            darija: 'نتا عزيز عليا / نتي عزيزة عليا',
            tounsi: 'انتي عزيز عليا / انتي عزيزة عليا',
          },
        },
        {
          sens: 'Je pense à toi',
          formes: {
            msa: 'oufakkirou fik',
            darija: 'kanfekker fik',
            tounsi: 'n5ammem fik',
          },
          arabe: { msa: 'أفكر فيك', darija: 'كنفكر فيك', tounsi: 'نخمم فيك' },
        },
        {
          sens: 'Mon cœur (affectueux)',
          formes: {
            msa: 'ya 9albi',
            darija: 'a 9albi',
            tounsi: 'ya 9albi',
          },
          arabe: { msa: 'يا قلبي', darija: 'آ قلبي', tounsi: 'يا قلبي' },
        },
        {
          sens: 'Prends soin de toi',
          formes: {
            msa: 'i3tani bi-nafsik',
            darija: 'rd balek 3la rasek',
            tounsi: 'rod balek 3la rou7ek',
          },
          arabe: { msa: 'اعتن بنفسك', darija: 'رد بالك على راسك', tounsi: 'رد بالك على روحك' },
        },
      ],
      supplementaires: [
        {
          sens: "Tu es quelqu'un de bien",
          formes: {
            msa: 'anta cha5s 6ayyib (à un homme) / anti cha5sa 6ayyiba (à une femme)',
            darija: 'nta wa7ed mzyan (à un homme) / nti wa7da mzyana (à une femme)',
            tounsi: 'enti bnadem behi',
          },
          arabe: {
            msa: 'أنت شخص طيب / أنت شخصة طيبة',
            darija: 'نتا واحد مزيان / نتي وحدة مزيانة',
            tounsi: 'انتي بنادم بهي',
          },
        },
        {
          sens: 'Je suis fier (fière) de toi',
          formes: {
            msa: 'ana fa5our bik',
            darija: 'ana fa5our bik',
            tounsi: 'ena fa5our bik',
          },
          arabe: { msa: 'أنا فخور بك', darija: 'أنا فخور بيك', tounsi: 'أنا فخور بيك' },
        },
        {
          sens: 'Que Dieu te protège',
          formes: {
            msa: 'allah ya7mik',
            darija: 'lla ye7mik',
            tounsi: 'rabbi y7amik',
          },
          arabe: { msa: 'الله يحميك', darija: 'الله يحميك', tounsi: 'ربي يحميك' },
        },
      ],
      defiOral:
        'Dis à un proche que tu penses à lui et que tu tiens à lui, avec une formule affectueuse.',
      aRetenir:
        'Prends soin de toi : « rd balek 3la rasek » (darija), « rod balek 3la rou7ek » (tounsi).',
      aToiDeJouer: 'Écris un message affectueux et pudique à un proche.',
    },
    {
      id: 'sentiments-reconforter',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Ça ne va pas ? Tu veux en parler ?',
            formes: {
              msa: 'ma biki ? hal touridina an nata7addath ?',
              darija: 'machi mzyana ? bghiti nhadro ?',
              tounsi: 'mouch labes ? t7ebb nahkiw ?',
            },
            arabe: {
              msa: 'ما بك؟ هل تريدين أن نتحدث؟',
              darija: 'ماشي مزيانة؟ بغيتي نهضرو؟',
              tounsi: 'موش لاباس؟ تحب نحكيو؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "J'ai raté mon examen.",
            formes: {
              msa: 'rasabtou fi imti7ani.',
              darija: 'ma nja7tch f l-imti7an.',
              tounsi: 'ma nja7tech fel examen.',
            },
            arabe: {
              msa: 'رسبت في امتحاني.',
              darija: 'ما نجحتش ف الامتحان.',
              tounsi: 'ما نجحتش في الإكزامن.',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: "Ce n'est pas grave, je suis là pour toi.",
            formes: {
              msa: 'laysa amran 5a6iran, ana houna min ajliki.',
              darija: 'machi mouchkil, ana hna m3ak.',
              tounsi: 'mouch mochkla, ena houni m3ak.',
            },
            arabe: {
              msa: 'ليس أمرا خطيرا، أنا هنا من أجلك.',
              darija: 'ماشي مشكل، أنا هنا معاك.',
              tounsi: 'موش مشكلة، أنا هوني معاك.',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Merci. Que Dieu facilite !',
            formes: {
              msa: 'choukran. allah youyassir !',
              darija: 'choukran. lla ysahhel !',
              tounsi: 'ya3tik sa77a. rabbi ysahhel !',
            },
            arabe: {
              msa: 'شكرا. الله ييسر!',
              darija: 'شكرا. الله يسهل!',
              tounsi: 'يعطيك الصحة. ربي يسهل!',
            },
          },
        },
      ],
      titre: "Réconforter quelqu'un",
      objectif: 'Soutenir un ami qui traverse un moment difficile.',
      contexte:
        "Pour réconforter, on souhaite que les choses s'arrangent, souvent en invoquant Dieu : « lla ysahhel » (que Dieu facilite), « rabbi m3ak » (Dieu est avec toi).",
      expressions: [
        {
          sens: 'Je suis là pour toi',
          formes: {
            msa: 'ana houna min ajlik',
            darija: 'ana hna m3ak',
            tounsi: 'ena houni m3ak',
          },
          arabe: { msa: 'أنا هنا من أجلك', darija: 'أنا هنا معاك', tounsi: 'أنا هوني معاك' },
        },
        {
          sens: 'Ça va passer',
          formes: {
            msa: 'sata7assanou al-oumour',
            darija: 'ghadi ydouz kolchi',
            tounsi: 'taw t3addi',
          },
          arabe: { msa: 'ستتحسن الأمور', darija: 'غادي يدوز كلشي', tounsi: 'توا تعدي' },
        },
        {
          sens: 'Que Dieu facilite',
          formes: {
            msa: 'allah youyassir',
            darija: 'lla ysahhel',
            tounsi: 'rabbi ysahhel',
          },
          arabe: { msa: 'الله ييسر', darija: 'الله يسهل', tounsi: 'ربي يسهل' },
        },
        {
          sens: 'Courage !',
          formes: {
            msa: 'tachajja3 ! (à un homme) / tachajja3i ! (à une femme)',
            darija: 'sber !',
            tounsi: 'osbor !',
          },
          arabe: { msa: 'تشجع! / تشجعي!', darija: 'صبر!', tounsi: 'اصبر!' },
        },
      ],
      supplementaires: [
        {
          sens: "Ce n'est pas grave",
          formes: {
            msa: 'laysa amran 5a6iran',
            darija: 'machi mouchkil',
            tounsi: 'mouch mochkla',
          },
          arabe: { msa: 'ليس أمرا خطيرا', darija: 'ماشي مشكل', tounsi: 'موش مشكلة' },
        },
        {
          sens: 'Tu veux en parler ?',
          formes: {
            msa: 'hal tourid an nata7addath ?',
            darija: 'bghiti nhadro ?',
            tounsi: 't7ebb nahkiw ?',
          },
          arabe: { msa: 'هل تريد أن نتحدث؟', darija: 'بغيتي نهضرو؟', tounsi: 'تحب نحكيو؟' },
        },
        {
          sens: 'Je comprends',
          formes: {
            msa: 'afham',
            darija: 'fhemtek',
            tounsi: 'fhemtek',
          },
          arabe: { msa: 'أفهم', darija: 'فهمتك', tounsi: 'فهمتك' },
        },
      ],
      defiOral: "Un ami traverse un moment difficile : rassure-le et propose-lui d'en parler.",
      aRetenir:
        'Que Dieu facilite : « lla ysahhel » (darija), « rabbi ysahhel » (tounsi). Je suis là : « ana hna » / « ena houni ».',
      aToiDeJouer: 'Écris un message pour réconforter un ami qui a raté un examen.',
    },
  ],
};
