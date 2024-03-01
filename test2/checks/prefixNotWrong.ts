import { PrimitiveInvalidInput } from '../../src/application/makeRaw/maker/error.ts'
import { TestConfiguration } from '../TestConfiguration.ts'

const invalidPrefix = (example: string, invalid: string): string => invalid + example.substring(invalid.length)

export const prefixNotWrong = (invalid: string) => (configuration: TestConfiguration): TestConfiguration => {
  const { maker, example } = configuration
  it('checks prefix', () => {
    // this primitive type is meant to be a compressed public key, it must start with 0x02 or 0x03
    expect(() => maker(invalidPrefix(example, invalid))).toThrow(PrimitiveInvalidInput)
  })
  return configuration
}
