import { Buffer } from 'buffer/'

import { Code } from '../../../../core/code/code.js'

export interface Configuration {
  describe: string // the description of the test
  code: Code // the type code of the primitive under test
  example: Buffer // a valid example of the primitive under test as a byte array
  length: number // the expected length of the example in bytes
}
