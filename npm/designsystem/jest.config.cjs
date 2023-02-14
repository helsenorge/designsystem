module.exports = {
  verbose: true,
  rootDir: './',
  coverageReporters: ['cobertura', 'lcov'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/Icons/**/*',
    '<rootDir>/src/components/Icons/Icon.tsx',
  ],
  coveragePathIgnorePatterns: ['.stories.tsx', '.d.ts', 'index.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^react($|/.+)': ['<rootDir>/node_modules/react$1', 'react$1'],
  },
  transformIgnorePatterns: ['node_modules/', '\\.snap'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '\\.(css|less|scss|sass)$': '<rootDir>/scripts/cssTransformer.cjs',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/scripts/fileTransformer.cjs',
  },
  setupFilesAfterEnv: ['./src/utils/tests/setup-test.ts'],
  // Unngå warning om jest-haste-map: Haste module naming collision
  modulePathIgnorePatterns: ['lib'],
};
