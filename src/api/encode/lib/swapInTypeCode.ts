import { Code } from '../../../core/code/code.js'
import { CodeLength } from '../../../core/code/codeLength.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'

type Swapper = (text: string) => string

// the type code will overwrite the Base64 characters encoding the prepended pad bytes
export const swapInTypeCode = (code: Code): Swapper => {
  const length = code.length as CodeLength
  switch (length) {
    case 1:
      return (base64: string) => code + base64.substring(1) // swap into the front of the string
    case 2:
      return (base64: string) => code + base64.substring(2) // "
    case 4:
      return (base64: string) => code + base64 // in the case where the pad size was zero, the code is simply prepended
  }
  return exhaustive(length)
}
