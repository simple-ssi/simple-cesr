import { Buffer } from 'buffer'
import { Binary, Raw, Text } from '../../core/domain/domains.js'
import { binary } from '../encode/binary.js'
import { text } from '../encode/text.js'
import { toRaw } from './toRaw.js'

describe('Transform to Raw', () => {
  it('handles Text with one-character code', () => {
    const rah: Raw = {
      code: 'M',
      raw: Buffer.from([0x00, 0x01])
    }
    const txt: Text = text(rah.code, rah.raw)
    const actual = toRaw(txt)
    expect(actual).toStrictEqual(rah)
  })
  it('handles Text with two-character code', () => {
    const rah: Raw = {
      code: '0F',
      raw: Buffer.from('ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f', 'hex')
    }
    const txt: Text = text(rah.code, rah.raw)
    const actual = toRaw(txt)
    expect(actual).toStrictEqual(rah)
  })
  it('handles Text with four-character code', () => {
    const rah: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const txt: Text = text(rah.code, rah.raw)
    const actual = toRaw(txt)
    expect(actual).toStrictEqual(rah)
  })
  it('handles Binary', () => {
    const rah: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const bin: Binary = binary(rah.code, rah.raw)
    const actual = toRaw(bin)
    expect(actual).toStrictEqual(rah)
  })
})
