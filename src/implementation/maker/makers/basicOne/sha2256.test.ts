import { Buffer } from 'buffer/'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'

const configuration = {
  describe: 'With SHA2 256 bit digest',
  code: 'I' as Code,
  example: Buffer.from('e4f5a6b7c8d9e0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5', 'hex'), // valid example of SHA2 256 bit digest in hex
  length: 32 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
