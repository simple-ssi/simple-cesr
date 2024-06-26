import { Buffer } from 'buffer/index.js'
import { text } from './text.js'

describe('Text encoder', () => {
  it('correctly encodes ["M", 1] as "MAAB"', () => {
    const result = text('M', Buffer.from([0x00, 0x01]))
    expect(result).toBe('MAAB')
  })
  it('correctly encodes ["0F", "ddaf35a19..."] as "0FDdrzWhk2F6..."', () => {
    const result = text('0F', Buffer.from('ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f', 'hex'))
    expect(result).toBe('0FDdrzWhk2F6usxBc0muIEExEub6TompfqIKnu7mS1XTmiGSmSonT8GoNro8I6P-671FTUQjZDzoDiqayU-lTKSf')
  })
  it('correctly encodes ["1AAB", "02b4f97f6e..."] as "1AABArT5f2..."', () => {
    const result = text('1AAB', Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex'))
    expect(result).toBe('1AABArT5f26OkhTpogIbLHrW8iM0mfEU_tM-pr_D4rH-ryTB')
  })
})
