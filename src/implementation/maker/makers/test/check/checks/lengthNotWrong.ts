import { Buffer } from 'buffer/index.js'
import { make } from '../../../../../make.js'
import { PrimitiveWrongLength } from '../../../../maker.js'
import { Configuration } from '../../configuration.js'

const oneTooLong = (primitive: Buffer): Buffer => Buffer.alloc(primitive.length + 1, 0)

const oneTooShort = (primitive: Buffer): Buffer => Buffer.alloc(primitive.length - 1, 0)

export const lengthNotWrong = (configuration: Configuration): Configuration => {
  const { code, example } = configuration

  it('checks length', () => {
    expect(() => make(code, oneTooLong(example)))
      .toThrow(PrimitiveWrongLength)

    expect(() => make(code, oneTooShort(example)))
      .toThrow(PrimitiveWrongLength)
  })

  return configuration
}
