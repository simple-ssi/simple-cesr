import { Buffer } from 'buffer'
import { Code } from '../code'

export type Raw = [Code, Buffer] & { __type: 'raw' }
