const { pathsToModuleNameMapper } = require('ts-jest');
const { paths } = require('./tsconfig.json').compilerOptions;

module.exports = {
    preset: 'jest-preset-angular',
    moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};