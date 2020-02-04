module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testMatch: ['**/*.(test|spec).(js|ts|tsx)'],
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.js',
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  setupFiles: ['./jest.setup.js']
};
