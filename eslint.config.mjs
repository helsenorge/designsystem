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
      // This rule is temporarily set to warn so we can solve it later
      'react-hooks/refs': 'warn',

      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
      // Align with import/order grouping to avoid circular fixes
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'separate-type-imports' }],
      // Allow separate type/value import statements to prevent merge-split loops
      'import-x/no-duplicates': ['error', { 'prefer-inline': false, considerQueryString: true }],
    },
  },

  {
    // These components intentionally keep their UNSAFE_/Unsafe_ prefix to signal risky APIs
    files: ['**/components/UNSAFE_Table/**/*.tsx', '**/components/Unsafe_DatePicker/**/*.tsx'],
    rules: {
      'react/jsx-pascal-case': ['error', { ignore: ['UNSAFE_*', 'Unsafe_*'] }],
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
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx', 'utils/icons/utils/IconGenerator/*.js'],
    rules: {
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
