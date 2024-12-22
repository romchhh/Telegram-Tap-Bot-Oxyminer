import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

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
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off', // Для React 17+
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // React hooks rules
      ...reactHooks.configs.recommended.rules,
      // TypeScript rules
      '@typescript-eslint/no-require-imports': 'off',
      // General rules
      'no-undef': 'off',
    },
  },
];
