import { BasicFourCharacterCode, BasicOneCharacterCode, BasicTwoCharacterCode } from './codes.ts'

export type CodeSize = 1 | 2 | 4

export type Code =
  BasicOneCharacterCode |
  BasicTwoCharacterCode |
  BasicFourCharacterCode
