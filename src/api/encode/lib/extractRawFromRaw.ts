import { Buffer } from 'buffer/index.js'
import { Code } from '../../../core/code/code.js'
import { make } from '../../../implementation/make.js'

export const extractRawFromRaw = (code: Code) => (primitive: Buffer): Buffer => {
  const { raw } = make(code, primitive)
  return raw
}
