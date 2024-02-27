import { Buffer } from 'buffer'
import { Code } from '../../core/code.ts'
import { Binary } from '../../core/domains/binary.ts'
import { encodeAsText } from './encodeAsText.ts'

export const encodeAsBinary = (code: Code, primitive: any): Binary =>
  Buffer.from(encodeAsText(code, primitive), 'base64url') as Binary
