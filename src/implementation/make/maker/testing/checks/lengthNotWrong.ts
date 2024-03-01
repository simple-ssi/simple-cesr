import { PrimitiveWrongLength } from '../../error.ts'
import { HexString } from '../HexString.ts'
import { TestConfiguration } from '../TestConfiguration.ts'

const oneTooLong = (prmitive: HexString | Buffer): HexString | Buffer => {
  const length = prmitive.length
  switch (typeof prmitive) {
    case 'string':
      return '0'.padEnd(length + 1, '0')
    default:
      return Buffer.alloc(length + 1, 0)
  }
}

const oneTooShort = (prmitive: HexString | Buffer): HexString | Buffer => {
  const length = prmitive.length
  switch (typeof prmitive) {
    case 'string':
      return '0'.padEnd(length - 1, '0')
    default:
      return Buffer.alloc(length - 1, 0)
  }
}

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
