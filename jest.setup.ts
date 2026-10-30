// Remplacements des modules natifs, absents quand les tests tournent sur
// l'ordinateur plutôt que sur un téléphone.
jest.mock('@react-native-async-storage/async-storage', () =>
  // jest.mock est remonté avant les imports : sa fabrique doit utiliser require.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
