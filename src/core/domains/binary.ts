import { Buffer } from 'buffer'
import { Text } from './text'

export type Binary = Buffer & { _type: 'binary' }

export const buildBinaryFromText = (text: Text): Binary => {
  return Buffer.from(text, 'base64url') as Binary
}
