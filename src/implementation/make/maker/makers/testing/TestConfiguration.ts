import { Buffer } from 'buffer'

import { Maker } from '../../maker.ts'
import { Code } from '../../../../../core/code/code.ts'
import { HexString } from './HexString.ts'

export interface TestConfiguration {
  suite: string
  type: string
  code: Code
  maker: Maker
  example: HexString | Buffer
  length: number
}
