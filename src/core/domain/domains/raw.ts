import { Buffer } from 'buffer/index.js'
import { Code } from '../../code/code.js'

export interface Raw {
  readonly code: Code
  readonly raw: Buffer
}
