import { Buffer } from 'buffer/index.js'
import { Raw } from '../../../core/domain/raw.js'
import { Code } from '../../../core/code/code.js'

export const asRaw = (code: Code) => (raw: Buffer): Raw => (
  {
    code,
    raw
  }
)
