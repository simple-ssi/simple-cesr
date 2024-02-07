import { makeSecp256k1PubOrEncKey } from './secpPubOrEncKey'

test('makeSecp256k1PubOrEncKey', () => {
  const pubKey = makeSecp256k1PubOrEncKey('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1') // 66 bytes long
  expect(pubKey.code).toBe('1AAB')
  expect(pubKey.value.toString('hex')).toBe('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1')
})
