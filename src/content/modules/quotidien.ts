import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const quotidien: Module = {
  id: 'quotidien',
  icone: '☀️',
  titre: 'Vie quotidienne',
  description: 'Parler de ses habitudes, de son travail, de ses journées',
  reluParNatif: false,
  seances: [
    {
      id: 'quotidien-journee',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu te lèves tôt ?',
            formes: {
              msa: 'hal tastay9i6ina moubakkiran ?',
              darija: 'wach katnodi bekri ?',
              tounsi: 'tnodh bekri ?',
            },
            arabe: { msa: 'هل تستيقظين مبكرا؟', darija: 'واش كتنوضي بكري؟', tounsi: 'تنوض بكري؟' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Oui, je me lève tôt et je prends le petit-déjeuner.',
            formes: {
              msa: 'na3am, astay9i6ou moubakkiran wa atanawalou al-if6ar.',
              darija: 'iyyeh, kannod bekri w kanfe6er.',
              tounsi: 'ey, nnodh bekri w nfa6ar.',
            },
            arabe: {
              msa: 'نعم، أستيقظ مبكرا وأتناول الفطور.',
              darija: 'إيه، كننوض بكري وكنفطر.',
              tounsi: 'إي، ننوض بكري ونفطر.',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Et le soir ?',
            formes: { msa: 'wa fi al-masa2 ?', darija: 'w f l-3chiya ?', tounsi: 'w fil 3chiya ?' },
            arabe: { msa: 'وفي المساء؟', darija: 'وف العشية؟', tounsi: 'وفي العشية؟' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Je rentre à la maison : je suis occupée toute la journée.',
            formes: {
              msa: 'arji3ou ila al-bayt : ana machghoula 6awala al-yawm.',
              darija: 'kanrje3 l dar : ana mchghoula n-nhar kamel.',
              tounsi: 'nrawa7 lel dar : ena mechghoula en-nhar el-kol.',
            },
            arabe: {
              msa: 'أرجع إلى البيت، أنا مشغولة طوال اليوم.',
              darija: 'كنرجع للدار، أنا مشغولة النهار كامل.',
              tounsi: 'نروح للدار، أنا مشغولة النهار الكل.',
            },
          },
        },
      ],
      titre: 'Raconter sa journée',
      objectif: "Dire ce qu'on fait le matin, l'après-midi et le soir.",
      contexte:
        'En darija, le présent se forme avec « ka- » devant le verbe (« kan5dem », je travaille) ; en tounsi, sans préfixe (« na5dem »). En MSA : « a3malou ».',
      expressions: [
        {
          sens: 'Le matin',
          formes: { msa: 'fi as-saba7', darija: 'f sba7', tounsi: 'fi es-sbe7' },
          arabe: { msa: 'في الصباح', darija: 'ف الصباح', tounsi: 'في الصباح' },
        },
        {
          sens: 'Le soir',
          formes: { msa: 'fi al-masa2', darija: 'f l-3chiya', tounsi: 'fil 3chiya' },
          arabe: { msa: 'في المساء', darija: 'ف العشية', tounsi: 'في العشية' },
        },
        {
          sens: 'Je me lève tôt',
          formes: { msa: 'astay9i6ou moubakkiran', darija: 'kannod bekri', tounsi: 'nnodh bekri' },
          arabe: { msa: 'أستيقظ مبكرا', darija: 'كننوض بكري', tounsi: 'ننوض بكري' },
        },
        {
          sens: 'Je rentre à la maison',
          formes: { msa: 'arji3ou ila al-bayt', darija: 'kanrje3 l dar', tounsi: 'nrawa7 lel dar' },
          arabe: { msa: 'أرجع إلى البيت', darija: 'كنرجع للدار', tounsi: 'نروح للدار' },
        },
      ],
      supplementaires: [
        {
          sens: 'Je prends le petit-déjeuner',
          formes: { msa: 'atanawalou al-if6ar', darija: 'kanfe6er', tounsi: 'nfa6ar' },
          arabe: { msa: 'أتناول الفطور', darija: 'كنفطر', tounsi: 'نفطر' },
        },
        {
          sens: 'Je suis occupé(e) toute la journée',
          formes: {
            msa: 'ana machghoul (homme) / ana machghoula (femme) 6awala al-yawm',
            darija: 'ana mchghoul (homme) / ana mchghoula (femme) n-nhar kamel',
            tounsi: 'ena mechghoul (homme) / ena mechghoula (femme) en-nhar el-kol',
          },
          arabe: {
            msa: 'أنا مشغول / أنا مشغولة طوال اليوم',
            darija: 'أنا مشغول / أنا مشغولة النهار كامل',
            tounsi: 'أنا مشغول / أنا مشغولة النهار الكل',
          },
        },
        {
          sens: 'Je me couche tard',
          formes: {
            msa: 'anamou mouta2a55iran',
            darija: 'kan3es m3a66el',
            tounsi: 'nor9od m2a55er',
          },
          arabe: { msa: 'أنام متأخرا', darija: 'كنعس معطل', tounsi: 'نرقد مأخر' },
        },
      ],
      defiOral: 'Raconte ta journée d’hier en trois phrases : le matin, la journée, le soir.',
      aRetenir:
        'Darija : « ka- » + verbe pour le présent (kan5dem, kanrje3). Tounsi : le verbe seul (na5dem, nrawa7).',
      aToiDeJouer: 'Décris ta matinée type en deux ou trois phrases.',
    },
    {
      id: 'quotidien-travail',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu travailles où ?',
            formes: { msa: 'ayna ta3malin ?', darija: 'fin kat5dmi ?', tounsi: 'win ta5dem ?' },
            arabe: { msa: 'أين تعملين؟', darija: 'فين كتخدمي؟', tounsi: 'وين تخدم؟' },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Je travaille dans un bureau. Et toi ?',
            formes: {
              msa: 'a3malou fi maktab. wa anta ?',
              darija: 'kan5dem f biro. w nta ?',
              tounsi: 'na5dem fi biro. w enti ?',
            },
            arabe: {
              msa: 'أعمل في مكتب. وأنت؟',
              darija: 'كنخدم ف بيرو. ونتا؟',
              tounsi: 'نخدم في بيرو. وانتي؟',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Je travaille à la maison. Le travail est fatigant ?',
            formes: {
              msa: 'a3malou fi al-bayt. hal al-3amal mout3ib ?',
              darija: 'kan5dem f dar. wach l-5edma kat3ayyi ?',
              tounsi: 'na5dem fil dar. el-5edma ta3ba ?',
            },
            arabe: {
              msa: 'أعمل في البيت. هل العمل متعب؟',
              darija: 'كنخدم ف الدار. واش الخدمة كتعيي؟',
              tounsi: 'نخدم في الدار. الخدمة تاعبة؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "Un peu. Aujourd'hui, j'ai une réunion avec le patron.",
            formes: {
              msa: '9alilan. al-yawm ladayya ijtima3 ma3a al-moudir.',
              darija: 'chwiya. lyoum 3ndi ijtima3 m3a l-patron.',
              tounsi: 'chwaya. lyoum 3andi réunion m3a el-patron.',
            },
            arabe: {
              msa: 'قليلا. اليوم لدي اجتماع مع المدير.',
              darija: 'شوية. اليوم عندي اجتماع مع الباطرون.',
              tounsi: 'شوية. اليوم عندي ريونيون مع الباطرون.',
            },
          },
        },
      ],
      titre: 'Parler de son travail',
      objectif: "Dire où l'on travaille et comment ça se passe.",
      contexte:
        '« Le travail » se dit « al-3amal » en MSA et « l-5edma » en darija comme en tounsi. Au travail, le tounsi et la darija empruntent beaucoup de mots au français (biro, réunion, patron).',
      expressions: [
        {
          sens: 'Je travaille dans un bureau',
          formes: { msa: 'a3malou fi maktab', darija: 'kan5dem f biro', tounsi: 'na5dem fi biro' },
          arabe: { msa: 'أعمل في مكتب', darija: 'كنخدم ف بيرو', tounsi: 'نخدم في بيرو' },
        },
        {
          sens: 'Je travaille à la maison',
          formes: { msa: 'a3malou fi al-bayt', darija: 'kan5dem f dar', tounsi: 'na5dem fil dar' },
          arabe: { msa: 'أعمل في البيت', darija: 'كنخدم ف الدار', tounsi: 'نخدم في الدار' },
        },
        {
          sens: 'Le travail est fatigant',
          formes: {
            msa: 'al-3amal mout3ib',
            darija: 'l-5edma kat3ayyi',
            tounsi: 'el-5edma ta3ba',
          },
          arabe: { msa: 'العمل متعب', darija: 'الخدمة كتعيي', tounsi: 'الخدمة تاعبة' },
        },
        {
          sens: "J'ai une réunion",
          formes: { msa: 'ladayya ijtima3', darija: '3ndi ijtima3', tounsi: '3andi réunion' },
          arabe: { msa: 'لدي اجتماع', darija: 'عندي اجتماع', tounsi: 'عندي ريونيون' },
        },
      ],
      supplementaires: [
        {
          sens: 'Mon collègue',
          formes: { msa: 'zamili', darija: 'sa7bi f l-5edma', tounsi: 'zmili' },
          arabe: { msa: 'زميلي', darija: 'صاحبي ف الخدمة', tounsi: 'زميلي' },
        },
        {
          sens: 'Je suis en congé',
          formes: { msa: 'ana fi 3ou6la', darija: 'ana f l-3ou6la', tounsi: 'ena fi congé' },
          arabe: { msa: 'أنا في عطلة', darija: 'أنا ف العطلة', tounsi: 'أنا في كونجي' },
        },
        {
          sens: 'Le patron',
          formes: { msa: 'al-moudir', darija: 'l-patron', tounsi: 'el-patron' },
          arabe: { msa: 'المدير', darija: 'الباطرون', tounsi: 'الباطرون' },
        },
      ],
      defiOral: 'Présente ton travail : où tu travailles, avec qui, et si c’est fatigant.',
      aRetenir:
        '« L-5edma » (le travail) est commun à la darija et au tounsi. Les mots du bureau viennent souvent du français.',
      aToiDeJouer: 'Écris trois phrases sur ton travail ou tes études.',
    },
    {
      id: 'quotidien-habitudes',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu bois du café chaque matin ?',
            formes: {
              msa: 'hal tachrabina al-9ahwa koulla saba7 ?',
              darija: 'wach katchrbi l-9ahwa koll sba7 ?',
              tounsi: 'tochrob 9ahwa koll sbe7 ?',
            },
            arabe: {
              msa: 'هل تشربين القهوة كل صباح؟',
              darija: 'واش كتشربي القهوة كل صباح؟',
              tounsi: 'تشرب قهوة كل صباح؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Oui, et je fais du sport le week-end.',
            formes: {
              msa: 'na3am, wa oumarisou ar-riyada fi 3ou6lat nihayat al-ousbou3.',
              darija: 'iyyeh, w kandir sport f l-wikand.',
              tounsi: 'ey, w na3mel sport fil weekend.',
            },
            arabe: {
              msa: 'نعم، وأمارس الرياضة في عطلة نهاية الأسبوع.',
              darija: 'إيه، وكندير السبور ف الويكاند.',
              tounsi: 'إي، ونعمل سبور في الويكاند.',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: "Moi, jamais ! Mais j'aime lire.",
            formes: {
              msa: 'ana, abadan ! lakin ou7ibbou al-9ira2a.',
              darija: 'ana, 3emmerni ! walakin kanbghi n9ra.',
              tounsi: 'ena, 3omri ! ama n7eb na9ra.',
            },
            arabe: {
              msa: 'أنا، أبدا! لكن أحب القراءة.',
              darija: 'أنا، عمرني! ولكن كنبغي نقرا.',
              tounsi: 'أنا، عمري! أما نحب نقرا.',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Moi aussi, parfois.',
            formes: {
              msa: 'wa ana aydan, a7yanan.',
              darija: '7ta ana, chi merrat.',
              tounsi: 'ena zeda, sa3at.',
            },
            arabe: {
              msa: 'وأنا أيضا، أحيانا.',
              darija: 'حتى أنا، شي مرات.',
              tounsi: 'أنا زادة، ساعات.',
            },
          },
        },
      ],
      titre: 'Parler de ses habitudes',
      objectif: "Dire ce qu'on fait souvent, parfois ou jamais.",
      contexte:
        'Parfois : « a7yanan » (MSA), « chi merrat » (darija), « sa3at » (tounsi). Pour « jamais », la darija et le tounsi utilisent une tournure avec « ma » : « 3emmerni ma… », « 3omri ma… ».',
      expressions: [
        {
          sens: 'Je bois du café chaque matin',
          formes: {
            msa: 'achrabou al-9ahwa koulla saba7',
            darija: 'kanchreb l-9ahwa koll sba7',
            tounsi: 'nochrob 9ahwa koll sbe7',
          },
          arabe: {
            msa: 'أشرب القهوة كل صباح',
            darija: 'كنشرب القهوة كل صباح',
            tounsi: 'نشرب قهوة كل صباح',
          },
        },
        {
          sens: 'Je fais du sport',
          formes: { msa: 'oumarisou ar-riyada', darija: 'kandir sport', tounsi: 'na3mel sport' },
          arabe: { msa: 'أمارس الرياضة', darija: 'كندير السبور', tounsi: 'نعمل سبور' },
        },
        {
          sens: 'Parfois',
          formes: { msa: 'a7yanan', darija: 'chi merrat', tounsi: 'sa3at' },
          arabe: { msa: 'أحيانا', darija: 'شي مرات', tounsi: 'ساعات' },
        },
        {
          sens: 'Jamais',
          formes: { msa: 'abadan', darija: '3emmerni ma …', tounsi: '3omri ma …' },
          arabe: { msa: 'أبدا', darija: 'عمرني ما …', tounsi: 'عمري ما …' },
        },
      ],
      supplementaires: [
        {
          sens: 'Souvent',
          formes: { msa: 'ghaliban', darija: 'bzaf d l-merrat', tounsi: 'barcha marrat' },
          arabe: { msa: 'غالبا', darija: 'بزاف د المرات', tounsi: 'برشا مرات' },
        },
        {
          sens: 'Le week-end',
          formes: {
            msa: 'fi 3ou6lat nihayat al-ousbou3',
            darija: 'f l-wikand',
            tounsi: 'fil weekend',
          },
          arabe: { msa: 'في عطلة نهاية الأسبوع', darija: 'ف الويكاند', tounsi: 'في الويكاند' },
        },
        {
          sens: "J'aime lire",
          formes: { msa: 'ou7ibbou al-9ira2a', darija: 'kanbghi n9ra', tounsi: 'n7eb na9ra' },
          arabe: { msa: 'أحب القراءة', darija: 'كنبغي نقرا', tounsi: 'نحب نقرا' },
        },
      ],
      defiOral:
        'Dis trois choses que tu fais souvent, une que tu fais parfois et une que tu ne fais jamais.',
      aRetenir:
        'Parfois : « chi merrat » (darija), « sa3at » (tounsi). Souvent : « bzaf d l-merrat », « barcha marrat ».',
      aToiDeJouer: 'Décris ton week-end habituel en deux ou trois phrases.',
    },
  ],
};
