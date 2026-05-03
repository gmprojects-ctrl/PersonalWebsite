import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    ignores: ['dist/', '.astro/'],
  },
];
