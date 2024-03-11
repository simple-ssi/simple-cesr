import { PrimitiveInvalidInput } from '../../../error.ts'
import { TestConfiguration } from '../../test/TestConfiguration.ts'

const invalidString = (badPrefix: string, example: string): string => badPrefix + example.substring(badPrefix.length)

export const prefixNotWrong = (badPrefix: string) => (configuration: TestConfiguration): TestConfiguration => {
  const { maker, example } = configuration
  it('checks prefix', () => {
    // this primitive type is meant to be a compressed public key, it must start with 0x02 or 0x03
    const value = example.toString('hex')
    const badValue = invalidString(badPrefix, value)
    const input = Buffer.from(badValue, 'hex')
    expect(() => maker(input)).toThrow(PrimitiveInvalidInput)
  })
  return configuration
}
