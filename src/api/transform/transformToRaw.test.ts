import { Binary, Raw, Text } from '../../core/domain/Domains.ts'
import { encodeAsBinary } from '../encode/encodeAsBinary.ts'
import { encodeAsText } from '../encode/encodeAsText.ts'
import { transformToRaw } from './transformToRaw.ts'

describe('Transform to Raw', () => {
  it('handles Text with one-character code', () => {
    const raw: Raw = {
      code: 'M',
      raw: Buffer.from([0x00, 0x01])
    }
    const text: Text = encodeAsText(raw.code, raw.raw)
    const actual = transformToRaw(text)
    expect(actual).toStrictEqual(raw)
  })
  it('handles Text with two-character code', () => {
    const raw: Raw = {
      code: '0F',
      raw: Buffer.from('ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f', 'hex')
    }
    const text: Text = encodeAsText(raw.code, raw.raw)
    const actual = transformToRaw(text)
    expect(actual).toStrictEqual(raw)
  })
  it('handles Text with four-character code', () => {
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const text: Text = encodeAsText(raw.code, raw.raw)
    const actual = transformToRaw(text)
    expect(actual).toStrictEqual(raw)
  })
  it('handles Binary', () => {
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const binary: Binary = encodeAsBinary(raw.code, raw.raw)
    const actual = transformToRaw(binary)
    expect(actual).toStrictEqual(raw)
  })
})
