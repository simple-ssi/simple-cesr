import { Binary, Raw, Text } from '../../core/domain/domains.ts'
import { transformToRaw } from './transformToRaw.ts'

describe('transformToRaw', () => {
  it('should handle Text of type M', () => {
    const text: Text = 'MAAB'
    const raw: Raw = {
      code: 'M',
      raw: Buffer.from([0x00, 0x01])
    }
    const actual = transformToRaw(text)
    expect(actual).toStrictEqual(raw)
  })
  it('should handle Text of type 0F', () => {
    const text: Text = '0FDdrzWhk2F6usxBc0muIEExEub6TompfqIKnu7mS1XTmiGSmSonT8GoNro8I6P-671FTUQjZDzoDiqayU-lTKSf'
    const raw: Raw = {
      code: '0F',
      raw: Buffer.from('ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f', 'hex')
    }
    const actual = transformToRaw(text)
    expect(actual).toStrictEqual(raw)
  })
  // const result = encodeAsText('1AAB', Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex'))
  //   expect(result).toBe('1AABArT5f26OkhTpogIbLHrW8iM0mfEU_tM-pr_D4rH-ryTB')
  it('should handle Text of type 1AAB', () => {
    const text: Text = '1AABArT5f26OkhTpogIbLHrW8iM0mfEU_tM-pr_D4rH-ryTB'
    const raw: Raw = {
      code: '1AAB',
      raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
    }
    const actual = transformToRaw(text)
    expect(actual).toStrictEqual(raw)
  })
})

// it('gets "MAAB" from ["M", 1]', () => {
//   const result = encodeAsText('M', Buffer.from([0x00, 0x01]))
//   expect(result).toBe('MAAB')
// })
