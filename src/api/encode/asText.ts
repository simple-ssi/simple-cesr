import { pipe } from '../../lib/util/pipe.js'
import { swapInTypeCode } from './encoders/lib/swapInTypeCode.js'
import { padUpFront } from './encoders/lib/padUpFront.js'
import { convertToBase64 } from './encoders/lib/convertToBase64.js'
import { Code } from '../../core/code/code.js'

// builds the proper text encoding for the given primitive
export const asText = (code: Code, primitive: Buffer): string =>
  pipe(
    primitive,
    padUpFront,
    convertToBase64,
    swapInTypeCode(code)
  )
