/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'], // Виключаємо Playwright
  extensionsToTreatAsEsm: ['.ts'],
};
