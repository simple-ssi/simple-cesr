import { Buffer } from 'buffer'

export interface Secp256k1PubOrEncKey { code: '1AAB', value: Buffer}

export const makeSecp256k1PubOrEncKey = (primitive: string): Secp256k1PubOrEncKey => {
  if (primitive.length !== 66) throw new Error('primitive is not the correct number of bytes')
  return {
    code: '1AAB',
    value: Buffer.from(primitive, 'hex')
  }
}
