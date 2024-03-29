import { swapInTypeCode } from './swapInTypeCode.js'
import { padUpFront } from './padUpFront.js'
import { convertToBase64 } from './convertToBase64.js'
import { Code } from '../../..//core/code/code.js'
import { pipe } from '../../../lib/util/pipe.js'

// builds the proper text encoding for the given primitive
export const asText = (code: Code, primitive: Buffer): string =>
  pipe(
    primitive,
    padUpFront,
    convertToBase64,
    swapInTypeCode(code)
  )
