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
        },
        {
          sens: 'Tu peux répéter ?',
          formes: {
            msa: 'hal youmkinouka an tou3id ?',
            darija: 'momkin t3awed ?',
            tounsi: 'tnajjem t3awed ?',
          },
        },
        {
          sens: "Parle lentement, s'il te plaît",
          formes: {
            msa: 'takallam bi-bou62, min fadlik',
            darija: 'hder bechwiya 3afak',
            tounsi: 'a7ki bechwaya 3aychek',
          },
        },
        {
          sens: "Qu'est-ce que ça veut dire ?",
          formes: {
            msa: 'ma ma3na hatha ?',
            darija: 'ach kat3ni hadi ?',
            tounsi: 'chniya ma3neha ?',
          },
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
        },
        {
          sens: 'Comment on dit … en arabe ?',
          formes: {
            msa: 'kayfa na9oulou … bil-3arabiya ?',
            darija: 'kifach kangoulo … b l-3arbiya ?',
            tounsi: 'kifech n9oulou … bel-3arbi ?',
          },
        },
        {
          sens: 'Ah, je vois',
          formes: {
            msa: 'ah, fahimtou',
            darija: 'ah, fhemt',
            tounsi: 'ah, fhemt',
          },
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
        },
        {
          sens: "Parlons d'autre chose",
          formes: {
            msa: 'li-nata7addath 3an chay2 a5ar',
            darija: 'nhadro 3la chi 7aja o5ra',
            tounsi: 'nahkiw 3la 7aja o5ra',
          },
        },
        {
          sens: 'Au fait…',
          formes: {
            msa: 'bil-mounasaba …',
            darija: '3la dkr …',
            tounsi: '3la fekra …',
          },
        },
        {
          sens: 'Tu sais quoi ?',
          formes: {
            msa: 'hal ta3rif ?',
            darija: '3reft ach ?',
            tounsi: 'ta3ref chniya ?',
          },
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
        },
        {
          sens: 'Comme je disais…',
          formes: {
            msa: 'kama kountou a9oul …',
            darija: 'kif kont kangoul …',
            tounsi: 'kima 9otlek …',
          },
        },
        {
          sens: 'Ça me rappelle…',
          formes: {
            msa: 'hatha youthakkirouni bi …',
            darija: 'had chi kayfekkerni f …',
            tounsi: 'hedha yfakkarni fi …',
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
        },
        {
          sens: "C'était un plaisir",
          formes: {
            msa: 'kana min dawa3i sourouri',
            darija: 'tcherrefna',
            tounsi: 'tcharrafna',
          },
        },
        {
          sens: 'Je dois y aller',
          formes: {
            msa: 'yajibou an athhab',
            darija: '5assni nmchi',
            tounsi: 'lazemni nemchi',
          },
        },
        {
          sens: 'Bonne journée',
          formes: {
            msa: 'yawman sa3idan',
            darija: 'nharek mzyan',
            tounsi: 'nharek zin',
          },
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
        },
        {
          sens: 'Appelle-moi quand tu veux',
          formes: {
            msa: 'ittasil bi mata chi2ta',
            darija: '3ayyet liya waqtma bghiti',
            tounsi: 'kallamni wa9t eli t7ebb',
          },
        },
        {
          sens: 'Bon retour',
          formes: {
            msa: '3awdatan salima',
            darija: 'rja3 bslama',
            tounsi: 'traw7 bislema',
          },
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
