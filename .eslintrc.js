module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'html'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 1,
    'react/jsx-no-literals': 2,
    'no-console': 1,
    'no-debugger': 1,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
