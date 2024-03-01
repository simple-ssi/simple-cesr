import { Buffer } from 'buffer'

import { Maker } from '../src/application/makeRaw/maker/maker.ts'
import { Code } from '../src/core/code/code.ts'

type HexString = string

export interface TestConfiguration {
  type: string
  code: Code
  maker: Maker
  example: HexString | Buffer
  length: number
}
