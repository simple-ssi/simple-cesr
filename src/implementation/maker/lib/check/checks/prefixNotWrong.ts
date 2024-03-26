import { Buffer } from 'buffer'

import { pipe } from '../../../../../lib/util/pipe.ts'
import { make } from '../../../../make.ts'
import { PrimitiveInvalidInput } from '../../../error.ts'
import { TestConfiguration } from '../../test/TestConfiguration.ts'

const throwsErrorForWrongPrefix = (length: number) => (configuration: TestConfiguration): TestConfiguration => {
  const { code, example } = configuration
  const bogusPrefix = '0'.repeat(length) // assumes zero by itself or repeated any number of times is not a valid prefix
  it('checks prefix', () => {
    const input = Buffer.from(
      bogusPrefix + example.toString('hex').substring(length),
      'hex'
    )
    expect(() => make(code, input)).toThrow(PrimitiveInvalidInput)
  })
  return configuration
}

const f = (length: number) => (valids: string[]) => (configuration: TestConfiguration): TestConfiguration => {
  const { example } = configuration
  const hex = example.toString('hex')
  it('has the correct prefix', () => {
    const actualPrefix = hex.substring(0, length)
    expect(valids.includes(actualPrefix)).toBe(true)
  })
  return configuration
}

const checkPrefix =
(length: number) =>
  (...validPrefixes: string[]) =>
    (configuration: TestConfiguration): TestConfiguration =>
      pipe(
        configuration,
        f(length)(validPrefixes),
        throwsErrorForWrongPrefix(length)
      )

const twoCharacterPrefixIsCorrect = checkPrefix(2)

export const prefixis02or03 = twoCharacterPrefixIsCorrect('02', '03')
