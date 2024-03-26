import { Buffer } from 'buffer'
import { Raw } from '../../core/domain/domains.ts'
import { encodeBinary } from '../encode/encoders/encodeBinary.ts'
import { encodeText } from '../encode/encoders/encodeText.ts'
import { toText } from './toText.ts'

describe('Transform to Text', () => {
  it('handles Binary', () => {
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const binary = encodeBinary(raw.code, raw.raw)
    const text = encodeText(raw.code, raw.raw)
    expect(toText(binary)).toStrictEqual(text)
  })
  it('handles Raw', () => {
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const text = encodeText(raw.code, raw.raw)
    expect(toText(raw)).toStrictEqual(text)
  })
})
