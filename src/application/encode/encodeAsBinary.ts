import { Buffer } from 'buffer'
import { TextCode } from '../../core/codes/textCode'
import { Binary } from '../../core/domains/binary'
import { encodeAsText } from './encodeAsText'

export const encodeAsBinary = (code: TextCode, primitive: any): Binary => Buffer.from(encodeAsText(code, primitive), 'base64url') as Binary
