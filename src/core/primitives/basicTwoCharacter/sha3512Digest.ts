import { Buffer } from 'buffer'

export interface Sha3512Digest { code: '0F', value: Buffer}

export const makeSha3512Digest = (primitive: string): Sha3512Digest => {
  if (primitive.length !== 128) throw new Error('primitive is not the correct number of bytes')
  return {
    code: '0F',
    value: Buffer.from(primitive, 'hex')
  }
}
