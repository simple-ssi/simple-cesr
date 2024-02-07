import { Buffer } from 'buffer'
import { TextCode } from '../codes/textCode'

export type Raw = [TextCode, Buffer] & { __type: 'raw' }
