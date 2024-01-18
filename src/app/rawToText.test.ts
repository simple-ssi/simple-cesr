import { rawToText } from './rawToText'

describe('Raw to Text', () => {
  test('("M", 0x0000) -> "MAAA"', () => {
    expect(rawToText('M', 0)).toEqual('MAAA')
  })
})
