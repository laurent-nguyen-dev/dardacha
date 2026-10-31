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
