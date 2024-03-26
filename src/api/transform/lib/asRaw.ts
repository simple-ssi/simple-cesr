import { Raw } from '../../../core/domain/domains.ts'
import { Code } from '../../../core/code/code.ts'

export const asRaw = (code: Code) => (raw: Buffer): Raw => (
  {
    code,
    raw
  }
)
