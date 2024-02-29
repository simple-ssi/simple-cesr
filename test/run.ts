import { pipe } from '../src/util/pipe.ts'
import { makeTest } from './makeTest.ts'
import { TestConfiguration } from './testConfiguration.ts'
import { validatorTest } from './validatorTest.ts'

export const run = (configuration: TestConfiguration): void => {
  const { type, code, maker, validators, example } = configuration
  const canMake = makeTest(maker)(code)
  const canValidate = validatorTest(...validators)
  describe(`run for ${type}`, () => {
    pipe(
      example,
      canMake,
      canValidate
    )
  })
}
