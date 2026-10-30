// Remplacements des modules natifs, absents quand les tests tournent sur
// l'ordinateur plutôt que sur un téléphone. jest.mock est remonté avant
// les imports : ses fabriques utilisent require.
/* eslint-disable @typescript-eslint/no-require-imports */
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// Synthèse vocale : par défaut, le téléphone ne liste aucune voix (cas
// « langue seule »). Les tests de l'écoute changent ce comportement.
jest.mock('expo-speech', () => ({
  speak: jest.fn(),
  stop: jest.fn(() => Promise.resolve()),
  getAvailableVoicesAsync: jest.fn(() => Promise.resolve([])),
}));
