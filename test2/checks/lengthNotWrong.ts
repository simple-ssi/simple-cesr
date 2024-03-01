import { PrimitiveWrongLength } from '../../src/application/makeRaw/maker/error.ts'
import { TestConfiguration } from '../TestConfiguration.ts'

const oneTooLong = (length: number): string => '0'.padEnd(length + 1, '0')
const oneTooShort = (length: number): string => '0'.padEnd(length - 1, '0')

export const lengthNotWrong = (configuration: TestConfiguration): TestConfiguration => {
  const { maker, length } = configuration

  it('checks length', () => {
    expect(() => maker(oneTooLong(length)))
      .toThrow(PrimitiveWrongLength)

    expect(() => maker(oneTooShort(length)))
      .toThrow(PrimitiveWrongLength)
  })

  return configuration
}
