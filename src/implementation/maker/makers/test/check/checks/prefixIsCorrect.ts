import 'mocha'
import { assert } from 'chai'
import { Buffer } from 'buffer/'

import { pipe } from '../../../../../../lib/util/pipe'
import { make } from '../../../../../make'
import { PrimitiveInvalidInput } from '../../../../maker'
import { Configuration } from '../../configuration'

const throwsErrorForWrongPrefix = (length: number) => (configuration: Configuration): Configuration => {
  const { code, example } = configuration
  const bogusPrefix = '0'.repeat(length) // assumes zero by itself or repeated any number of times is not a valid prefix
  it('checks prefix', () => {
    const input = Buffer.from(
      bogusPrefix + example.toString('hex').substring(length),
      'hex'
    )
    assert.throws(() => make(code, input), PrimitiveInvalidInput)
  })
  return configuration
}

const f = (length: number) => (valids: string[]) => (configuration: Configuration): Configuration => {
  const { example } = configuration
  const hex = example.toString('hex')
  it('and has the correct prefix', () => {
    const actualPrefix = hex.substring(0, length)
    assert.isTrue(valids.includes(actualPrefix))
  })
  return configuration
}

const checkPrefix =
(length: number) =>
  (...validPrefixes: string[]) =>
    (configuration: Configuration): Configuration =>
      pipe(
        configuration,
        f(length)(validPrefixes),
        throwsErrorForWrongPrefix(length)
      )

const twoCharacterPrefixIsCorrect = checkPrefix(2)

export const prefixis02or03 = twoCharacterPrefixIsCorrect('02', '03')
