import { makeSha3512Digest } from './sha3512Digest'

test('makeSha3512Digest', () => {
  const example = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
  const result = makeSha3512Digest(example)
  expect(result.code).toBe('0F')
  expect(result.value.toString('hex')).toBe(example)
})
