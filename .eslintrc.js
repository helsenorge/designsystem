module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: ['@helsenorge/eslint-config'],
  rules: {
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.stories.tsx', '*.test.tsx'],
      rules: {
        'react/jsx-no-literals': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        'react/prop-types': 'off',
        'no-console': 'warn',
      },
    },
    {
      files: ['*.test.tsx'],
      rules: {
        'testing-library/no-node-access': 'warn',
        'testing-library/no-container': 'warn',
      },
    },
  ],
};
