import { BasicFourCharacterCode } from './basicFourCharacterCode'
import { BasicOneCharacterCode } from './basicOneCharacterCode'
import { BasicTwoCharacterCode } from './basicTwoCharacterCode'

export type ValidTextCodeSize = 1 | 2 | 4

export type TextCode =
  BasicOneCharacterCode |
  BasicTwoCharacterCode |
  BasicFourCharacterCode
