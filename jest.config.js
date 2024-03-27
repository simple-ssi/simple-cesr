/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // need esm preset to support esm modules
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  // part of esm support, see: https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    // allows jest to resolve .js module paths to a .js source file
    // see dox for more information on this setting: https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        useESM: true
      }
    ]
  },
  // use a fancier test reporter
  reporters: ['jest-ci-spec-reporter']
}
