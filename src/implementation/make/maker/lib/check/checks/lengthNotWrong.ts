import { make } from '../../../../make.ts'
import { PrimitiveWrongLength } from '../../../error.ts'
import { TestConfiguration } from '../../test/TestConfiguration.ts'

const oneTooLong = (primitive: Buffer): Buffer => Buffer.alloc(primitive.length + 1, 0)

const oneTooShort = (primitive: Buffer): Buffer => Buffer.alloc(primitive.length - 1, 0)

export const lengthNotWrong = (configuration: TestConfiguration): TestConfiguration => {
  const { code, example } = configuration

  it('checks length', () => {
    expect(() => make(code, oneTooLong(example)))
      .toThrow(PrimitiveWrongLength)

    expect(() => make(code, oneTooShort(example)))
      .toThrow(PrimitiveWrongLength)
  })

  return configuration
}
