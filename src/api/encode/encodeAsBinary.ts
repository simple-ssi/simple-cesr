import { Buffer } from 'buffer'
import { Code } from '../../core/code/Code.ts'
import { Binary } from '../../core/domain/Domains.ts'
import { encodeAsText } from './encodeAsText.ts'

export const encodeAsBinary = (code: Code, primitive: Uint8Array): Binary =>
  Buffer.from(
    encodeAsText(code, primitive),
    'base64url'
  )
