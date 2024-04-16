import { Buffer } from 'buffer/index.js'
import { swapInTypeCode } from './swapInTypeCode.js'
import { padUpFront } from './padUpFront.js'
import { convertBinaryToBase64 } from './convertBinaryToBase64.js'
import { Code } from '../../../core/code/code.js'
import { pipe } from '../../../lib/util/pipe.js'

// follows proper steps to encode a primitive as Text
// curries the Text Code first, then the primitive
export const encodeText = (code: Code) => (primitive: Buffer): string =>
  pipe(
    primitive,
    padUpFront,
    convertBinaryToBase64,
    swapInTypeCode(code)
  )
