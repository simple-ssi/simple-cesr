import { Buffer } from 'buffer/index.js'
import { CodeLength } from '../../../core/code/codeLength.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'
import { removeBytes } from '../../../lib/util/removeBytes.js'

type Trimmer = (bytes: Buffer) => Buffer

const removeOneByte = removeBytes(1)
const removeTwoBytes = removeBytes(2)
const removeThreeBytes = removeBytes(3)

export const removeBufferBytes = (codeLength: CodeLength): Trimmer =>
  codeLength === 1
    ? removeOneByte // 1 Base64 char (6 bits) can be represented in 1 byte (8 bits) with padding
    : codeLength === 2
      ? removeTwoBytes // 2 Base64 chars (12 bits) can be represented in 2 bytes (16 bits) with padding
      : codeLength === 4
        ? removeThreeBytes // 4 Base64 chars (24 bits) are 3 bytes (24 bits) exactly
        : exhaustive(codeLength)
