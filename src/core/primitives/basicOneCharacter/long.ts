import { Buffer } from 'buffer'

export interface Long { code: 'N', value: Buffer}

export const makeLong = (primitive: number): Long => {
  const hex = primitive.toString(16)
  if (hex.length > 16) throw new Error('primitive is too big')
  return {
    code: 'N',
    value: Buffer.from(hex.padStart(16, '0'), 'hex')
  }
}
