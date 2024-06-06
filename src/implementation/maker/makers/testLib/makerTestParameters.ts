import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'

export interface MakerTestParameters {
  name: string // a description of the primitive type
  code: Code // the type code of the primitive under test
  primitive: Buffer // a valid example of the primitive under test as a byte array
}
