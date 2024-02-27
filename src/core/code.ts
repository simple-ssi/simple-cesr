import { BasicFourCharacterCode } from './codes/basicFourCharacterCode.ts'
import { BasicOneCharacterCode } from './codes/basicOneCharacterCode.ts'
import { BasicTwoCharacterCode } from './codes/basicTwoCharacterCode.ts'

export type CodeSize = 1 | 2 | 4

export type Code =
  BasicOneCharacterCode |
  BasicTwoCharacterCode |
  BasicFourCharacterCode
