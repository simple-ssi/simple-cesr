import { BasicFourCharacterCode } from './codes/basicFourCharacterCode.js'
import { BasicTwoCharacterCode } from './codes/basicTwoCharacterCode.js'
import { BasicOneCharacterCode } from './codes/basicOneCharacterCode.js'

export type Code =
  BasicOneCharacterCode |
  BasicTwoCharacterCode |
  BasicFourCharacterCode

export type CodeLength = 1 | 2 | 4
