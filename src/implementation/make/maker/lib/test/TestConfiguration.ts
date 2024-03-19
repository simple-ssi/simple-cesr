import { Buffer } from 'buffer'

import { Maker } from '../../Maker.ts'
import { Code } from '../../../../../core/code/Code.ts'

export interface TestConfiguration {
  suite: string
  type: string
  code: Code
  maker: Maker
  example: Buffer
  length: number
}
