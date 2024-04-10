import { Buffer } from 'buffer/index.js'
import { Raw } from '../../../core/domain/domains.js'
import { Code } from '../../../core/code/code.js'

export const asRaw = (code: Code) => (raw: Buffer): Raw => (
  {
    code,
    raw
  }
)
