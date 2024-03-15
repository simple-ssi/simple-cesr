import { Raw } from '../../../core/domain/domains.ts'
import { Code } from '../../../core/code/code.ts'

// takes a transitional object removes any padding from 'raw' and returns a new Raw object
export const removePadding = (transitional: {
  code: Code
  raw: Buffer
}): Raw => (
  {
    code: transitional.code,
    raw: transitional.raw.subarray(transitional.code.length === 1 ? 1 : transitional.code.length === 2 ? 2 : 3, transitional.raw.length)
  }
)
