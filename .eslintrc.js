module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'import', 'testing-library', 'jsx-a11y', 'prettier'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    'react/jsx-no-literals': 'error',
    'react/no-string-refs': 'warn',
    'no-console': 'error',
    'no-debugger': 'error',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'type', 'internal', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.css',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      // Skru på testing-library/react sine regler, men bare i tester.
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    // Skru på jsx-a11y sine regler, men ikke i tester.
    {
      files: ['*.[jt]s?(x)'],
      excludedFiles: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jsx-a11y/recommended'],
    },
  ],
};
