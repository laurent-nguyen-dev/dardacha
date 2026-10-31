import type { Module } from '../types';

// Premier jet, non relu par des locuteurs natifs (fonctionnel §3.5).
export const conversation: Module = {
  id: 'conversation',
  icone: '🗣️',
  titre: 'Conversations spontanées',
  description: 'Enchaîner les sujets, demander de répéter',
  reluParNatif: false,
  seances: [
    {
      id: 'conversation-faire-repeter',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Tu viens à la fête samedi ?',
            formes: {
              msa: 'hal ta2tina ila al-7afla yawm as-sabt ?',
              darija: 'wach ghadi tji l l-7afla nhar s-sebt ?',
              tounsi: 'bech tji lel 7afla nhar es-sebt ?',
            },
            arabe: {
              msa: 'هل تأتين إلى الحفلة يوم السبت؟',
              darija: 'واش غادي تجي للحفلة نهار السبت؟',
              tounsi: 'باش تجي للحفلة نهار السبت؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "Je n'ai pas compris. Tu peux répéter ?",
            formes: {
              msa: 'lam afham. hal youmkinouka an tou3id ?',
              darija: 'ma fhemtch. momkin t3awed ?',
              tounsi: 'ma fhemtech. tnajjem t3awed ?',
            },
            arabe: {
              msa: 'لم أفهم. هل يمكنك أن تعيد؟',
              darija: 'ما فهمتش. ممكن تعاود؟',
              tounsi: 'ما فهمتش. تنجم تعاود؟',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'La fête, samedi !',
            formes: {
              msa: 'al-7afla, yawm as-sabt !',
              darija: 'l-7afla, nhar s-sebt !',
              tounsi: 'el-7afla, nhar es-sebt !',
            },
            arabe: {
              msa: 'الحفلة، يوم السبت!',
              darija: 'الحفلة، نهار السبت!',
              tounsi: 'الحفلة، نهار السبت!',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Ah, je vois ! Oui, je viens.',
            formes: {
              msa: 'ah, fahimtou ! na3am, sa-ati.',
              darija: 'ah, fhemt ! iyyeh, ghadi nji.',
              tounsi: 'ah, fhemt ! ey, bech nji.',
            },
            arabe: {
              msa: 'آه، فهمت! نعم، سآتي.',
              darija: 'آه، فهمت! إيه، غادي نجي.',
              tounsi: 'آه، فهمت! إي، باش نجي.',
            },
          },
        },
      ],
      titre: 'Faire répéter',
      objectif: "Dire qu'on n'a pas compris, demander de répéter ou de ralentir.",
      contexte:
        "N'hésite pas à dire que tu apprends : les gens ralentissent volontiers. Répète : « 3awed » en darija comme en tounsi.",
      expressions: [
        {
          sens: "Je n'ai pas compris",
          formes: {
            msa: 'lam afham',
            darija: 'ma fhemtch',
            tounsi: 'ma fhemtech',
          },
          arabe: { msa: 'لم أفهم', darija: 'ما فهمتش', tounsi: 'ما فهمتش' },
        },
        {
          sens: 'Tu peux répéter ?',
          formes: {
            msa: 'hal youmkinouka an tou3id ?',
            darija: 'momkin t3awed ?',
            tounsi: 'tnajjem t3awed ?',
          },
          arabe: { msa: 'هل يمكنك أن تعيد؟', darija: 'ممكن تعاود؟', tounsi: 'تنجم تعاود؟' },
        },
        {
          sens: "Parle lentement, s'il te plaît",
          formes: {
            msa: 'takallam bi-bou62, min fadlik',
            darija: 'hder bechwiya 3afak',
            tounsi: 'a7ki bechwaya 3aychek',
          },
          arabe: {
            msa: 'تكلم ببطء، من فضلك',
            darija: 'هضر بشوية عافاك',
            tounsi: 'احكي بشوية عيشك',
          },
        },
        {
          sens: "Qu'est-ce que ça veut dire ?",
          formes: {
            msa: 'ma ma3na hatha ?',
            darija: 'ach kat3ni hadi ?',
            tounsi: 'chniya ma3neha ?',
          },
          arabe: { msa: 'ما معنى هذا؟', darija: 'أش كتعني هادي؟', tounsi: 'شنية معناها؟' },
        },
      ],
      supplementaires: [
        {
          sens: "J'apprends l'arabe",
          formes: {
            msa: 'ata3allamou al-3arabiya',
            darija: 'kant3allem l-3arbiya',
            tounsi: 'nat3allem el-3arbi',
          },
          arabe: { msa: 'أتعلم العربية', darija: 'كنتعلم العربية', tounsi: 'نتعلم العربي' },
        },
        {
          sens: 'Comment on dit … en arabe ?',
          formes: {
            msa: 'kayfa na9oulou … bil-3arabiya ?',
            darija: 'kifach kangoulo … b l-3arbiya ?',
            tounsi: 'kifech n9oulou … bel-3arbi ?',
          },
          arabe: {
            msa: 'كيف نقول … بالعربية؟',
            darija: 'كيفاش كنقولو … بالعربية؟',
            tounsi: 'كيفاش نقولو … بالعربي؟',
          },
        },
        {
          sens: 'Ah, je vois',
          formes: {
            msa: 'ah, fahimtou',
            darija: 'ah, fhemt',
            tounsi: 'ah, fhemt',
          },
          arabe: { msa: 'آه، فهمت', darija: 'آه، فهمت', tounsi: 'آه، فهمت' },
        },
      ],
      defiOral:
        "Quelqu'un te parle trop vite : dis que tu n'as pas compris, demande-lui de répéter lentement, puis demande le sens d'un mot.",
      aRetenir:
        "Je n'ai pas compris : « ma fhemtch » (darija), « ma fhemtech » (tounsi). S'il te plaît : « 3afak » / « 3aychek ».",
      aToiDeJouer: "Écris ce que tu dirais pour demander à quelqu'un de répéter plus lentement.",
    },
    {
      id: 'conversation-changer-sujet',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: 'Au fait, tu sais quoi ?',
            formes: {
              msa: 'bil-mounasaba, hal ta3rifin ?',
              darija: '3la dkr, 3refti ach ?',
              tounsi: '3la fekra, ta3ref chniya ?',
            },
            arabe: {
              msa: 'بالمناسبة، هل تعرفين؟',
              darija: 'على ذكر، عرفتي أش؟',
              tounsi: 'على فكرة، تعرف شنية؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Non, quoi ?',
            formes: { msa: 'la, matha ?', darija: 'la, ach ?', tounsi: 'le, chniya ?' },
            arabe: { msa: 'لا، ماذا؟', darija: 'لا، أش؟', tounsi: 'لا، شنية؟' },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: "J'apprends l'arabe ! Et toi, qu'en penses-tu ?",
            formes: {
              msa: 'ata3allamou al-3arabiya ! wa anti, ma ra2youki ?',
              darija: 'kant3allem l-3arbiya ! w nti, ach ban lik ?',
              tounsi: 'nat3allem el-3arbi ! w enti, chniya ra2yek ?',
            },
            arabe: {
              msa: 'أتعلم العربية! وأنت، ما رأيك؟',
              darija: 'كنتعلم العربية! ونتي، أش بان ليك؟',
              tounsi: 'نتعلم العربي! وانتي، شنية رأيك؟',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: "C'est intéressant !",
            formes: { msa: 'hatha moumti3 !', darija: 'zwin had chi !', tounsi: '7aja behya !' },
            arabe: { msa: 'هذا ممتع!', darija: 'زوين هاد الشي!', tounsi: 'حاجة بهية!' },
          },
        },
      ],
      titre: 'Changer de sujet',
      objectif: 'Relancer et enchaîner : au fait, et toi, tu sais quoi ?',
      contexte:
        "Pour enchaîner, la darija dit « 3la dkr… » (à propos…) et le tounsi « 3la fekra… » (au fait…). Demander l'avis de l'autre relance toujours la conversation.",
      expressions: [
        {
          sens: "Et toi, qu'en penses-tu ?",
          formes: {
            msa: 'wa anta, ma ra2youk ? (à un homme) / wa anti, ma ra2youki ? (à une femme)',
            darija: 'w nta, ach ban lik ? (à un homme) / w nti, ach ban lik ? (à une femme)',
            tounsi: 'w enti, chniya ra2yek ?',
          },
          arabe: {
            msa: 'وأنت، ما رأيك؟ / وأنت، ما رأيك؟',
            darija: 'ونتا، أش بان ليك؟ / ونتي، أش بان ليك؟',
            tounsi: 'وانتي، شنية رأيك؟',
          },
        },
        {
          sens: "Parlons d'autre chose",
          formes: {
            msa: 'li-nata7addath 3an chay2 a5ar',
            darija: 'nhadro 3la chi 7aja o5ra',
            tounsi: 'nahkiw 3la 7aja o5ra',
          },
          arabe: {
            msa: 'لنتحدث عن شيء آخر',
            darija: 'نهضرو على شي حاجة أخرى',
            tounsi: 'نحكيو على حاجة أخرى',
          },
        },
        {
          sens: 'Au fait…',
          formes: {
            msa: 'bil-mounasaba …',
            darija: '3la dkr …',
            tounsi: '3la fekra …',
          },
          arabe: { msa: 'بالمناسبة …', darija: 'على ذكر …', tounsi: 'على فكرة …' },
        },
        {
          sens: 'Tu sais quoi ?',
          formes: {
            msa: 'hal ta3rif ?',
            darija: '3reft ach ?',
            tounsi: 'ta3ref chniya ?',
          },
          arabe: { msa: 'هل تعرف؟', darija: 'عرفتي أش؟', tounsi: 'تعرف شنية؟' },
        },
      ],
      supplementaires: [
        {
          sens: "C'est intéressant",
          formes: {
            msa: 'hatha moumti3',
            darija: 'zwin had chi',
            tounsi: '7aja behya',
          },
          arabe: { msa: 'هذا ممتع', darija: 'زوين هاد الشي', tounsi: 'حاجة بهية' },
        },
        {
          sens: 'Comme je disais…',
          formes: {
            msa: 'kama kountou a9oul …',
            darija: 'kif kont kangoul …',
            tounsi: 'kima 9otlek …',
          },
          arabe: { msa: 'كما كنت أقول …', darija: 'كيف كنت كنقول …', tounsi: 'كيما قتلك …' },
        },
        {
          sens: 'Ça me rappelle…',
          formes: {
            msa: 'hatha youthakkirouni bi …',
            darija: 'had chi kayfekkerni f …',
            tounsi: 'hedha yfakkarni fi …',
          },
          arabe: {
            msa: 'هذا يذكرني ب …',
            darija: 'هاد الشي كيفكرني ف …',
            tounsi: 'هذا يفكرني في …',
          },
        },
      ],
      defiOral:
        "Pendant une conversation, change de sujet avec « au fait… », raconte une nouvelle, puis demande l'avis de ton interlocuteur.",
      aRetenir:
        "Au fait : « 3la dkr » (darija), « 3la fekra » (tounsi). Et toi, qu'en penses-tu ? relance toujours.",
      aToiDeJouer: "Écris deux répliques qui changent de sujet au milieu d'une conversation.",
    },
    {
      id: 'conversation-conclure',
      dialogue: [
        {
          locuteur: 'A',
          expression: {
            sens: "Je dois y aller. C'était un plaisir !",
            formes: {
              msa: 'yajibou an athhab. kana min dawa3i sourouri !',
              darija: '5assni nmchi. tcherrefna !',
              tounsi: 'lazemni nemchi. tcharrafna !',
            },
            arabe: {
              msa: 'يجب أن أذهب. كان من دواعي سروري!',
              darija: 'خاصني نمشي. تشرفنا!',
              tounsi: 'لازمني نمشي. تشرفنا!',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Pour moi aussi. Salue ta famille de ma part !',
            formes: {
              msa: 'wa ana aydan. sallim li 3ala 3a2ilatik !',
              darija: '7ta ana. sellem liya 3la l-3a2ila !',
              tounsi: 'ena zeda. sallemli 3al 3ayla !',
            },
            arabe: {
              msa: 'وأنا أيضا. سلم لي على عائلتك!',
              darija: 'حتى أنا. سلم ليا على العائلة!',
              tounsi: 'أنا زادة. سلملي على العايلة!',
            },
          },
        },
        {
          locuteur: 'A',
          expression: {
            sens: 'Promis. On se voit bientôt !',
            formes: {
              msa: 'akid. naraki 9ariban !',
              darija: 'akid. nchoufek 9rib !',
              tounsi: 'akid. nchoufek 9rib !',
            },
            arabe: {
              msa: 'أكيد. نراك قريبا!',
              darija: 'أكيد. نشوفك قريب!',
              tounsi: 'أكيد. نشوفك قريب!',
            },
          },
        },
        {
          locuteur: 'B',
          expression: {
            sens: 'Bonne journée !',
            formes: { msa: 'yawman sa3idan !', darija: 'nharek mzyan !', tounsi: 'nharek zin !' },
            arabe: { msa: 'يوما سعيدا!', darija: 'نهارك مزيان!', tounsi: 'نهارك زين!' },
          },
        },
      ],
      titre: 'Terminer une conversation',
      objectif: 'Prendre congé poliment et promettre de se revoir.',
      contexte:
        "On ne quitte pas quelqu'un brusquement : on annonce son départ, on souhaite du bien, on promet de se revoir. « Bslama » ou « bislema » viennent en dernier.",
      expressions: [
        {
          sens: 'On se voit bientôt',
          formes: {
            msa: 'narak 9ariban (à un homme) / naraki 9ariban (à une femme)',
            darija: 'nchoufek 9rib',
            tounsi: 'nchoufek 9rib',
          },
          arabe: { msa: 'نراك قريبا / نراك قريبا', darija: 'نشوفك قريب', tounsi: 'نشوفك قريب' },
        },
        {
          sens: "C'était un plaisir",
          formes: {
            msa: 'kana min dawa3i sourouri',
            darija: 'tcherrefna',
            tounsi: 'tcharrafna',
          },
          arabe: { msa: 'كان من دواعي سروري', darija: 'تشرفنا', tounsi: 'تشرفنا' },
        },
        {
          sens: 'Je dois y aller',
          formes: {
            msa: 'yajibou an athhab',
            darija: '5assni nmchi',
            tounsi: 'lazemni nemchi',
          },
          arabe: { msa: 'يجب أن أذهب', darija: 'خاصني نمشي', tounsi: 'لازمني نمشي' },
        },
        {
          sens: 'Bonne journée',
          formes: {
            msa: 'yawman sa3idan',
            darija: 'nharek mzyan',
            tounsi: 'nharek zin',
          },
          arabe: { msa: 'يوما سعيدا', darija: 'نهارك مزيان', tounsi: 'نهارك زين' },
        },
      ],
      supplementaires: [
        {
          sens: 'Salue ta famille de ma part',
          formes: {
            msa: 'sallim li 3ala 3a2ilatik',
            darija: 'sellem liya 3la l-3a2ila',
            tounsi: 'sallemli 3al 3ayla',
          },
          arabe: {
            msa: 'سلم لي على عائلتك',
            darija: 'سلم ليا على العائلة',
            tounsi: 'سلملي على العايلة',
          },
        },
        {
          sens: 'Appelle-moi quand tu veux',
          formes: {
            msa: 'ittasil bi mata chi2ta',
            darija: '3ayyet liya waqtma bghiti',
            tounsi: 'kallamni wa9t eli t7ebb',
          },
          arabe: {
            msa: 'اتصل بي متى شئت',
            darija: 'عيط ليا وقتما بغيتي',
            tounsi: 'كلمني وقت اللي تحب',
          },
        },
        {
          sens: 'Bon retour',
          formes: {
            msa: '3awdatan salima',
            darija: 'rja3 bslama',
            tounsi: 'traw7 bislema',
          },
          arabe: { msa: 'عودة سالمة', darija: 'رجع بسلامة', tounsi: 'تروح بالسلامة' },
        },
      ],
      defiOral:
        'Termine une conversation : annonce que tu dois partir, souhaite une bonne journée et promets de te revoir bientôt.',
      aRetenir:
        'Je dois y aller : « 5assni nmchi » (darija), « lazemni nemchi » (tounsi). Bonne journée : « nharek mzyan » / « nharek zin ».',
      aToiDeJouer: "Écris la fin d'une conversation avec un ami, en trois répliques.",
    },
  ],
};
