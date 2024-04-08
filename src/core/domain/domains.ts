import { Buffer } from 'buffer/index.js'
import { Code } from '../code/code.js'

export type Text = string

export interface Raw {
  readonly code: Code
  readonly raw: Buffer
}
export type Binary = Buffer
