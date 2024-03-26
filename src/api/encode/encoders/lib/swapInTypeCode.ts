import { match } from 'ts-pattern'
import { Code, CodeLength } from '../../../../core/code/code.ts'

type Swapper = (text: string) => string

// the type code will overwrite the Base64 characters representing the zero bytes that have been prepended
export const swapInTypeCode = (code: Code): Swapper => {
  const codeLength = code.length as CodeLength
  return match(codeLength)
    .with(1, () => (base64: string) => code + base64.substring(1))
    .with(2, () => (base64: string) => code + base64.substring(2))
    .with(4, () => (base64: string) => code + base64)
    .exhaustive()
}
