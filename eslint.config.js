// Configuration ESLint « flat » : base Expo + désactivation des règles de
// style déjà gérées par Prettier.
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierConfig = require('eslint-config-prettier');

module.exports = defineConfig([
  expoConfig,
  prettierConfig,
  {
    ignores: ['node_modules/', '.expo/', 'dist/', 'coverage/'],
  },
]);
