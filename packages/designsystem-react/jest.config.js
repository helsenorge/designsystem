module.exports = {
  verbose: true,
  rootDir: './',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/src/components/Icons/*'],
  coveragePathIgnorePatterns: ['.stories.tsx', '.d.ts', 'index.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['node_modules/', '\\.snap'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '\\.(css|less|scss|sass)$': '<rootDir>/scripts/cssTransformer.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/fileTransformer.js',
  },
  setupFilesAfterEnv: ['./src/utils/tests/setup-test.ts'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
