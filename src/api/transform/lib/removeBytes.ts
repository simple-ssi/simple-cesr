import { Buffer } from 'buffer/index.js'
// import { match } from 'ts-pattern'
import { CodeLength } from '../../../core/code/code.js'

export type PaddingRemover = (bytes: Buffer) => Buffer

// for a given code length, extracts the correct number of padding bytes to reconstitute the original primitive (as a byte array)
const removeBytes = (length: CodeLength) =>
  (bytes: Buffer): Buffer => {
    switch (length) {
      case 1:
        return Buffer.from(bytes.subarray(1, bytes.length)) // 1 Base64 char can be represented in 1 byte
      case 2:
        return Buffer.from(bytes.subarray(2, bytes.length)) // 2 Base64 chars can be represented in 2 bytes
      case 4:
        return Buffer.from(bytes.subarray(3, bytes.length)) // 4 Base64 chars = 3 bytes, if four are removed, the original primitive will be one byte too short
    }
  }
// match(length)
//   .with(1, () => Buffer.from(bytes.subarray(1, bytes.length))) // 1 Base64 char can be represented in 1 byte
//   .with(2, () => Buffer.from(bytes.subarray(2, bytes.length))) // 2 Base64 chars can be represented in 2 bytes
//   .with(4, () => Buffer.from(bytes.subarray(3, bytes.length))) // 4 Base64 chars = 3 bytes, if four are removed, the original primitive will be one byte too short
//   .exhaustive()

export const removeOneByte = removeBytes(1)
export const removeTwoBytes = removeBytes(2)
export const removeThreeBytes = removeBytes(4)
