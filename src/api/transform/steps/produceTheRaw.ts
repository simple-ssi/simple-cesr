import { Code } from '../../../core/code/code.js'
import { Raw } from '../../../core/domain/domains/raw.js'
import { make } from '../../../implementation/make.js'

export const produceTheRaw = (code: Code) => (primitive: Buffer): Raw => make(code, primitive)
