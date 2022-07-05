const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  testPathIgnorePatterns: [
    '<rootDir>/client/node_modules/',
    '<rootDir>/tests/',
    '<rootDir>/public/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@b2b-canaisdigitais)(?!vee-validate)',
  ],
  modulePathIgnorePatterns: [
  ],
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/main/$1',
    '\\.(jpg|jpeg|svg)$': '<rootDir>/src/spec/mocks/fileMock.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  globals: {
    'vue-jest': {
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
          ],
        ],
        plugins: [
          'dynamic-import-node',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-modules-commonjs',
        ],
      },
    },
  },
  collectCoverage: true,
  coverageDirectory: process.env.JEST_CLOVER_OUTPUT_DIR || './coverage',
  coverageReporters: ['text', 'clover', 'lcov'],
  collectCoverageFrom: [
    '**/src/main/**/*.js',
    '**/src/**/*.vue',
    '**/src/**/**/*.vue',
    '!**/src/main/*.js',
    '!**/src/main/clients/*.js',
    '!**/src/main/router/index.js',
    '!**/src/main/plugins/*.js',
    '!**/src/spec/**/*.js',
    '!**/test/**/*.js',
  ],
  moduleFileExtensions: [
    'js',
    'vue',
  ],
};
