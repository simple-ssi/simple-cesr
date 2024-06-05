import { Buffer } from 'buffer/index.js'

import { Code } from '../../../../core/code/code.js'

export interface Configuration {
  name: string // the description of the test
  code: Code // the type code of the primitive under test
  primitive: Buffer // a valid example of the primitive under test as a byte array
}
