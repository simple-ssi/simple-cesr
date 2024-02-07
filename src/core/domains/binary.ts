import { Buffer } from 'buffer'

export type Binary = Buffer & { __type: 'binary' }
