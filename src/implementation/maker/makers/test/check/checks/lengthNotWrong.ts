import 'mocha'
import { assert } from 'chai'

import { Buffer } from 'buffer/'
import { make } from '../../../../../make'
import { PrimitiveWrongLength } from '../../../../maker'
import { Configuration } from '../../configuration'

const oneTooLong = (primitive: Buffer): Buffer => Buffer.alloc(primitive.length + 1, 0)

const oneTooShort = (primitive: Buffer): Buffer => Buffer.alloc(primitive.length - 1, 0)

export const lengthNotWrong = (configuration: Configuration): Configuration => {
  const { code, example } = configuration

  it('checks length', () => {
    assert.throws(() => make(code, oneTooLong(example)), PrimitiveWrongLength)
    assert.throws(() => make(code, oneTooShort(example)), PrimitiveWrongLength)
  })

  return configuration
}
