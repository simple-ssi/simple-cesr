import { BasicFourCharacterCode } from './basicFourCharacterCode.js'
import { BasicTwoCharacterCode } from './basicTwoCharacterCode.js'
import { BasicOneCharacterCode } from './basicOneCharacterCode.js'

export type Code =
  BasicOneCharacterCode |
  BasicTwoCharacterCode |
  BasicFourCharacterCode
