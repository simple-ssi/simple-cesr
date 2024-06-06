import { Buffer } from 'buffer/index.js'
import { PrimitiveInvalidInput } from '../../../../errors/primitiveInvalidInput.js'
import { pipe } from '../../../../../../lib/util/pipe.js'
import { make } from '../../../../../make.js'
import { MakerTestParameters } from '../../makerTestParameters.js'

const throwsErrorForWrongPrefix = (length: number) => (configuration: MakerTestParameters): MakerTestParameters => {
  const { code, primitive: example } = configuration
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

const f = (length: number) => (valids: string[]) => (configuration: MakerTestParameters): MakerTestParameters => {
  const { primitive: example } = configuration
  const hex = example.toString('hex')
  it('sees the correct prefix', () => {
    const actualPrefix = hex.substring(0, length)
    expect(valids.includes(actualPrefix)).toBe(true)
  })
  return configuration
}

const checkPrefix =
(length: number) =>
  (...validPrefixes: string[]) =>
    (configuration: MakerTestParameters): MakerTestParameters =>
      pipe(
        configuration,
        f(length)(validPrefixes),
        throwsErrorForWrongPrefix(length)
      )

const twoCharacterPrefixIsCorrect = checkPrefix(2)

export const prefixis02or03 = twoCharacterPrefixIsCorrect('02', '03')
