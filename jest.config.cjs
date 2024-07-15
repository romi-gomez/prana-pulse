module.exports = {
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@babel)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^#app(.*)$': '<rootDir>/node_modules/nuxt3/dist/app$1',
    '^#components/(.*)$': '<rootDir>/components/$1',
    '^#plugins/(.*)$': '<rootDir>/plugins/$1',
    '^#/(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '**/tests/**/*.spec.js',
  ],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
};