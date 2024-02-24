import { BasicFourCharacterCode } from './codes/basicFourCharacterCode'
import { BasicOneCharacterCode } from './codes/basicOneCharacterCode'
import { BasicTwoCharacterCode } from './codes/basicTwoCharacterCode'

export type CodeSize = 1 | 2 | 4

export type Code =
  BasicOneCharacterCode |
  BasicTwoCharacterCode |
  BasicFourCharacterCode
