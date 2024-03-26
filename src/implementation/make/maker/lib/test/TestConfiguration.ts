import { Buffer } from 'buffer'

import { Code } from '../../../../../core/code/code.ts'

export interface TestConfiguration {
  suite: string
  type: string
  code: Code
  example: Buffer
  length: number
}
