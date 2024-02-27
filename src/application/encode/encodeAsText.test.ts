import { encodeAsText } from './encodeAsText.ts'

describe('encodeAsText', () => {
  test('["M", 1] -> "MAAB"', () => {
    const result = encodeAsText('M', 1)
    expect(result).toBe('MAAB')
  })
  test('["N", 1] -> "NAAAAAAAAAAB"', () => {
    const result = encodeAsText('N', 1)
    expect(result).toBe('NAAAAAAAAAAB')
  })
  test('["0F", "ddaf35a19..."] -> "0FDdrzWhk2F6..."', () => {
    const result = encodeAsText('0F', 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f')
    expect(result).toBe('0FDdrzWhk2F6usxBc0muIEExEub6TompfqIKnu7mS1XTmiGSmSonT8GoNro8I6P-671FTUQjZDzoDiqayU-lTKSf')
  })
  // 1AABArT5f26OkhTpogIbLHrW8iM0mfEU_tM-pr_D4rH-ryTB
  test('["1AAB", "02b4f97f6e..."] -> "1AABArT5f2..."', () => {
    const result = encodeAsText('1AAB', '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1')
    expect(result).toBe('1AABArT5f26OkhTpogIbLHrW8iM0mfEU_tM-pr_D4rH-ryTB')
  })
})
