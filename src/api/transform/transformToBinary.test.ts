import { Raw } from '../../core/domain/Domains.ts'
import { encodeAsBinary } from '../encode/encodeAsBinary.ts'
import { encodeAsText } from '../encode/encodeAsText.ts'
import { transformToBinary } from './transformToBinary.ts'

describe('Transform to Binary', () => {
  it('handles Text', () => {
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const text = encodeAsText(raw.code, raw.raw)
    const binary = encodeAsBinary(raw.code, raw.raw)
    expect(transformToBinary(text)).toStrictEqual(binary)
  })
  it('handles Raw', () => {
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const binary = encodeAsBinary(raw.code, raw.raw)
    expect(transformToBinary(raw)).toStrictEqual(binary)
  })
})
