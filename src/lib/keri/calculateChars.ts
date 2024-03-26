import { calculatePaddingSize } from './calculatePaddingSize.ts'

const calculateCodeSize = (bytes: number): number =>
  calculatePaddingSize(bytes) !== 0
    ? calculatePaddingSize(bytes)
    : 4

export const calculateChars = (bytes: number): number =>
  calculateCodeSize(bytes) === 4
    ? ((bytes / 3) * 4) + 4 // for code size === 4 (padding size === 0), we add the code size after converting bytes to chars
    : ((bytes + calculatePaddingSize(bytes)) / 3) * 4 // for code size 1 & 2, we add the padding size to the bytes before converting to chars
