const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'clover', 'lcov'],
  collectCoverageFrom: [
    '**/src/main/**/*.js',
    '!**/src/main/*.js',
    '!**/src/spec/**/*.js',
  ],
  moduleFileExtensions: [
    'js',
  ],
};
