import { Buffer } from 'buffer'

import { Maker } from '../src/useCases/make/maker/maker.ts'
import { Code } from '../src/core/code/code.ts'
import { HexString } from './HexString.ts'

export interface TestConfiguration {
  type: string
  code: Code
  maker: Maker
  example: HexString | Buffer
  length: number
}
