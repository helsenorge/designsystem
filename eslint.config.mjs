import config from '@helsenorge/eslint-config';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';

export default [
  ...config,
  ...storybook.configs['flat/recommended'],

  {
    ignores: ['**/src/types/entities/*.d.ts', '**/src/scss/bootstrap/*'],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },

  {
    files: ['**/*.stories.tsx', '**/*.test.tsx'],
    rules: {
      'react/jsx-no-literals': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react/prop-types': 'off',
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.test.tsx'],
    rules: {
      'testing-library/no-node-access': 'warn',
      'testing-library/no-container': 'warn',
    },
  },
];
