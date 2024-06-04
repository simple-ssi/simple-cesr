import { Code } from '../../../core/code/code.js'
import { CodeLength } from '../../../core/code/codeLength.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'

type Swapper = (text: string) => string

const replaceFirstCharacter = (code: Code, base64: string): string => code + base64.substring(1)
const replaceFirstTwoCharacters = (code: Code, base64: string): string => code + base64.substring(2)
const simplyPrependFourCharacterCode = (code: Code, base64: string): string => code + base64

export const replacePadCharactersWithTextCode = (code: Code): Swapper => {
  const length = code.length as CodeLength
  return length === 1
    ? (base64: string) => replaceFirstCharacter(code, base64)
    : length === 2
      ? (base64: string) => replaceFirstTwoCharacters(code, base64)
      : length === 4
        ? (base64: string) => simplyPrependFourCharacterCode(code, base64)
        : exhaustive(length) // ensure exhaustiveness
}
