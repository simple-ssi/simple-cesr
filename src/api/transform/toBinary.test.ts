
import { Raw } from '../../core/domain/domains.js'
import { encodeBinary } from '../encode/encoders/encodeBinary.js'
import { encodeText } from '../encode/encoders/encodeText.js'
import { toBinary } from './toBinary.js'

describe('Transform to Binary', () => {
  it('handles Text', () => {
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const text = encodeText(raw.code, raw.raw)
    const binary = encodeBinary(raw.code, raw.raw)
    expect(toBinary(text)).toStrictEqual(binary)
  })
  it('handles Raw', () => {
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const binary = encodeBinary(raw.code, raw.raw)
    expect(toBinary(raw)).toStrictEqual(binary)
  })
})
