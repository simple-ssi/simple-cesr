import { Buffer } from 'buffer'

import { Maker } from '../../maker.ts'
import { Code } from '../../../../../core/code/code.ts'

export interface TestConfiguration {
  suite: string
  type: string
  code: Code
  maker: Maker
  example: Buffer
  length: number
}
