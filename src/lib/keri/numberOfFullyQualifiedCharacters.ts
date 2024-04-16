import { padSize } from './padSize.js'

const calculateCodeSize = (bytes: number): number =>
  padSize(bytes) !== 0
    ? padSize(bytes)
    : 4

// FOR REFERENCE PURPOSE ONLY, NOT CURRENTLY CALLED ANYWHERE

// returns the number of characters in the fully qualified text encoding of a primitive based on the number of bytes it has
export const numberOfFullyQualifiedCharacters = (bytes: number): number =>
  calculateCodeSize(bytes) === 4
    ? ((bytes / 3) * 4) + 4 // for code size === 4 (padding size === 0), we add the code size after converting bytes to chars
    : ((bytes + padSize(bytes)) / 3) * 4 // for code size 1 & 2, we add the padding size to the bytes before converting to chars
