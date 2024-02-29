import { Buffer } from 'buffer'
import { Code } from '../code/code.ts'

export type Text = string

export interface Raw {
  code: Code
  raw: Buffer
}
export type Binary = Buffer
