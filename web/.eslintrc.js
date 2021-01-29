module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/camelcase': 2,
    'react/jsx-no-literals': 2,
    'react/no-string-refs': 1,
    'no-console': 2,
    'no-debugger': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
