import { match } from 'ts-pattern'
import { Code, CodeSize } from '../core/code.ts'

type Swapper = (text: string) => string
const swapInOneCharacterCode = (code: Code): Swapper => (text: string) => code + text.substring(1)
const swapInTwoCharacterCode = (code: Code): Swapper => (text: string) => code + text.substring(2)
const swapInFourCharacterCode = (code: Code): Swapper => (text: string) => code + text
export const swapInTextCode = (codeLength: CodeSize) => (code: Code): Swapper => match(codeLength)
  .with(1, () => swapInOneCharacterCode(code))
  .with(2, () => swapInTwoCharacterCode(code))
  .with(4, () => swapInFourCharacterCode(code))
  .exhaustive()
