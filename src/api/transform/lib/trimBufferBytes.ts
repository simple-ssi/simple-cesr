import { Buffer } from 'buffer/index.js'
import { CodeLength } from '../../../core/code/codeLength.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'
import { removeNBytes } from '../../../lib/util/removeNBytes.js'

type Trimmer = (bytes: Buffer) => Buffer

export const trimBufferBytes = (length: CodeLength): Trimmer => {
  switch (length) {
    case 1:
      return removeOneByte // 1 Base64 char (6 bits) can be represented in 1 byte (8 bits) with padding
    case 2:
      return removeTwoBytes // 2 Base64 chars (12 bits) can be represented in 2 bytes (16 bits) with padding
    case 4:
      return removeThreeBytes // 4 Base64 chars (24 bits) are 3 bytes (24 bits) exactly
  }
  return exhaustive(length)
}

const removeOneByte = removeNBytes(1)
const removeTwoBytes = removeNBytes(2)
const removeThreeBytes = removeNBytes(3)
