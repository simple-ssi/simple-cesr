import { PrimitiveWrongLength } from '../../../error.ts'
import { TestConfiguration } from '../TestConfiguration.ts'

const oneTooLong = (primitive: Buffer): Buffer => Buffer.alloc(primitive.length + 1, 0)

const oneTooShort = (primitive: Buffer): Buffer => Buffer.alloc(primitive.length - 1, 0)

export const lengthNotWrong = (configuration: TestConfiguration): TestConfiguration => {
  const { maker, example } = configuration

  it('checks length', () => {
    expect(() => maker(oneTooLong(example)))
      .toThrow(PrimitiveWrongLength)

    expect(() => maker(oneTooShort(example)))
      .toThrow(PrimitiveWrongLength)
  })

  return configuration
}
