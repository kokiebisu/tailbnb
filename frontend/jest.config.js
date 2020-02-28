module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testMatch: ['**/*.(test|spec).(js|ts|tsx)'],
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.ts'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|png|gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  setupFiles: ['./jest.setup.js']
};
