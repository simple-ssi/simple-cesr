import {
  BasicOneCharacterCode,
  BasicTwoCharacterCode,
  BasicFourCharacterCode
} from './codes.js'

export type CodeLength = 1 | 2 | 4

export type Code =
  BasicOneCharacterCode |
  BasicTwoCharacterCode |
  BasicFourCharacterCode
