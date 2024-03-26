import { make } from '../../../../../make.ts'
import { PrimitiveWrongLength } from '../../../../maker.ts'
import { Configuration } from '../../configuration.ts'

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
