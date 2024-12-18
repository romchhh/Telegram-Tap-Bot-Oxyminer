import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: parserTs,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react: eslintPluginReact,
      '@typescript-eslint': eslintPluginTs,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Для React 17+
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
];
