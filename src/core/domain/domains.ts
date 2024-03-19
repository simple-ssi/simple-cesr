import { Buffer } from 'buffer'
import { Code } from '../code/Code.ts'

export type Text = string

export interface Raw {
  readonly code: Code
  readonly raw: Buffer
}
export type Binary = Buffer
