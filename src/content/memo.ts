import type { ChiffreMemo } from './types';

// Mémo des chiffres SMS (F12, fonctionnel §3.4). Premier jet, non relu par
// des locuteurs natifs.
export const memo: readonly ChiffreMemo[] = [
  {
    chiffre: '2',
    lettre: 'ء',
    son: 'coup de glotte',
    prononciation: 'Un bref arrêt de la voix, comme au milieu de « oh-oh ».',
    exemples: [
      { transcription: 'so2al', arabe: 'سؤال', sens: 'question' },
      { transcription: 'ma2', arabe: 'ماء', sens: 'eau' },
    ],
  },
  {
    chiffre: '3',
    lettre: 'ع',
    son: '« a » de gorge',
    prononciation: 'Un « a » serré au fond de la gorge, comme si on la contractait.',
    exemples: [
      { transcription: '3arbiya', arabe: 'عربية', sens: 'arabe (la langue)' },
      { transcription: '3in', arabe: 'عين', sens: 'œil' },
    ],
  },
  {
    chiffre: '5',
    lettre: 'خ',
    son: '« kh »',
    prononciation: 'Comme la jota espagnole, ou un « r » raclé sans vibrer.',
    exemples: [
      { transcription: '5ir', arabe: 'خير', sens: 'bien, bonté' },
      { transcription: '5obz', arabe: 'خبز', sens: 'pain' },
    ],
  },
  {
    chiffre: '6',
    lettre: 'ط',
    son: '« t » appuyé',
    prononciation: 'Un « t » lourd, la langue bien plaquée contre le palais.',
    exemples: [
      { transcription: '6ari9', arabe: 'طريق', sens: 'route' },
      { transcription: '6ayara', arabe: 'طيارة', sens: 'avion' },
    ],
  },
  {
    chiffre: '7',
    lettre: 'ح',
    son: '« h » soufflé',
    prononciation: 'Un « h » expiré fort, comme pour embuer une vitre.',
    exemples: [
      { transcription: '7ob', arabe: 'حب', sens: 'amour' },
      { transcription: 'sba7', arabe: 'صباح', sens: 'matin' },
    ],
  },
  {
    chiffre: '9',
    lettre: 'ق',
    son: '« q »',
    prononciation: 'Un « k » prononcé tout au fond de la gorge.',
    exemples: [
      { transcription: '9alb', arabe: 'قلب', sens: 'cœur' },
      { transcription: '9ahwa', arabe: 'قهوة', sens: 'café' },
    ],
  },
];
