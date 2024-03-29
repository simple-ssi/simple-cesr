import { match } from 'ts-pattern'
import { Code, CodeLength } from '../../../core/code/code.js'

type Swapper = (text: string) => string

// the type code will overwrite the Base64 characters encoding the prepended pad bytes
export const swapInTypeCode = (code: Code): Swapper => {
  const codeLength = code.length as CodeLength
  return match(codeLength)
    .with(1, () => (base64: string) => code + base64.substring(1)) // swap into the front of the string
    .with(2, () => (base64: string) => code + base64.substring(2)) // "
    .with(4, () => (base64: string) => code + base64) // in the case where the pad size was zero, the code is simply prepended
    .exhaustive()
}
