import { Buffer } from 'buffer'
import { Code } from '../code.ts'

export type Raw = [Code, Buffer] & { __type: 'raw' }
