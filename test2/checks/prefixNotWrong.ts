import { PrimitiveInvalidInput } from '../../src/useCases/make/maker/error.ts'
import { TestConfiguration } from '../TestConfiguration.ts'

const invalidString = (badPrefix: string, example: string): string => badPrefix + example.substring(badPrefix.length)

// only works for strings
export const prefixNotWrong = (badPrefix: string) => (configuration: TestConfiguration): TestConfiguration => {
  const { maker, example } = configuration
  it('checks prefix', () => {
    // this primitive type is meant to be a compressed public key, it must start with 0x02 or 0x03
    // assert that example is a string - that should be the only type sent here
    expect(() => maker(invalidString(badPrefix, example as string))).toThrow(PrimitiveInvalidInput)
  })
  return configuration
}
