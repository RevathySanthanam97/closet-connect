import js from '@eslint/js';
import globals from 'globals';
import { createRequire } from 'module';

// Use createRequire to load plugins
const require = createRequire(import.meta.url);

// Import the TypeScript parser directly
import typescriptParser from '@typescript-eslint/parser';
import { IndentStyle } from 'typescript';

export default [
  {
    ignores: ['dist'],
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      // Use the actual imported parser object here
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      'react': require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'react-refresh': require('eslint-plugin-react-refresh'),
    },
    rules: {
      'max-len': ['error', { code: 100 }],
      'no-console': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
      'indent': ['error', 2],
    },
  },
];
