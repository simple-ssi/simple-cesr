import { Buffer } from 'buffer'
import { Code } from '../../core/code'
import { Binary } from '../../core/domains/binary'
import { encodeAsText } from './encodeAsText'

export const encodeAsBinary = (code: Code, primitive: any): Binary =>
  Buffer.from(encodeAsText(code, primitive), 'base64url') as Binary
