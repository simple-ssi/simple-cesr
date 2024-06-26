import { Buffer } from 'buffer/index.js'
import { Raw } from '../../core/domain/domains/raw.js'
import { binary } from '../encode/binary.js'
import { text } from '../encode/text.js'
import { toText } from './toText.js'

describe('Transform to Text', () => {
  it('handles Binary', () => {
    const rah: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const bin = binary(rah.code, rah.raw)
    const txt = text(rah.code, rah.raw)
    expect(toText(bin)).toStrictEqual(txt)
  })
  it('handles Raw', () => {
    const rah: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const txt = text(rah.code, rah.raw)
    expect(toText(rah)).toStrictEqual(txt)
  })
})
