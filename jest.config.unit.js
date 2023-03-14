module.exports = {
    roots: ['<rootDir>/test/'],
    moduleNameMapper: {
        '\\.(css|scss|less)$': 'identity-obj-proxy',
        '\\.(md|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
        '^.+\\.(css|less|scss)$': 'babel-jest',
    },
    testRunner: 'jest-circus/runner',
    collectCoverage: true,
    coverageReporters: ['text-summary', 'lcov'],
    coverageDirectory: 'coverage-unit',
    bail: false,
}
