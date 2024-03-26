// import { makeSureThat } from './implementation/make/maker/lib/validate/validate.ts'
// import { itIsEightBytes } from './implementation/make/maker/lib/validate/validations/lengthIs.ts'

// const raw = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8])
// const rawIsCorrectLength = itIsEightBytes(raw)

// const thisCheckPasses = (): boolean => true
// // const throwInAWrench = (): boolean => false

// const result = makeSureThat(
//   rawIsCorrectLength,
//   thisCheckPasses
//   // throwInAWrench
// )

// console.log(result)

import { calculateRawBytes } from './lib/keri/calculateBytes.ts'
import { calculateChars } from './lib/keri/calculateChars.ts'

// expected sizes in bytes and chars for relevant examples
const refBytes = [32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 2, 8, 32, 16, 64, 64, 64, 64, 64, 64, 4, 33, 33, 57, 57, 39, 3]
const refChars = [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 4, 12, 44, 24, 88, 88, 88, 88, 88, 88, 8, 48, 48, 80, 80, 56, 8]

// data from Sizage charts in Matter
const sizes = [[1, 44], [1, 44], [1, 44], [1, 44], [1, 44], [1, 44], [1, 44], [1, 44], [1, 44], [1, 44], [1, 4], [1, 12], [1, 44], [2, 24], [2, 88], [2, 88], [2, 88], [2, 88], [2, 88], [2, 88], [2, 8], [4, 48], [4, 48], [4, 80], [4, 80], [4, 56], [4, 8]]

// calculate bytes
const actualBytes = sizes.map(([codeLength, fullLength]) => calculateRawBytes(codeLength, fullLength))

// is it right?
const areBytesCalculatedCorrectly = actualBytes.every((bytes, index) => bytes === refBytes[index])
console.log(areBytesCalculatedCorrectly)

// calculate chars
const actualChars = actualBytes.map((bytes) => calculateChars(bytes))

// is it right?
const areCharsCalculatedCorrectly = actualChars.every((chars, index) => chars === refChars[index])
console.log(areCharsCalculatedCorrectly)
