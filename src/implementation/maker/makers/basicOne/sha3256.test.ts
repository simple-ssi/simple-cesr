import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const configuration = {
  describe: 'With Sha3 256 bit digest',
  code: 'H' as Code,
  example: Buffer.from('d7e8f9a0b1c2d3e4f5a6b7c8d9e0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8', 'hex'), // valid example of Sha3 256 bit digest in hex
  length: 32 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
