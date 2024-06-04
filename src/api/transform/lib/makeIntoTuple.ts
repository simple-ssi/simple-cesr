import { Buffer } from 'buffer/index.js'
import { Raw } from '../../../core/domain/raw.js'
import { Code } from '../../../core/code/code.js'

export const makeIntoTuple = (code: Code) => (raw: Buffer): Raw => (
  {
    code,
    raw
  } // don't need to worry about calling make() here. Since we're only transforming, everything should have been validated already
)
