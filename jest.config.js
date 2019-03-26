module.exports = {
    verbose: true,
    rootDir: './',
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/src/**/*.d.ts'
    ],
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'
    ],
    modulePaths: [
        '<rootDir>/src'
    ],
    transformIgnorePatterns: [
        'node_modules/',
        '\\.snap'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '\\.(css|less|scss|sass)$': '<rootDir>/scripts/cssTransformer.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/scripts/fileTransformer.js'
    }
}