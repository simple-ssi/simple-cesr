import { Buffer } from 'buffer'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'
import { Code } from '../../../../core/code/code.ts'

const configuration = {
  describe: 'With Ed25519 verification key',
  code: 'D' as Code,
  example: Buffer.from('e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6', 'hex'), // valid example of Ed25519 verification key non-transferable in hex
  length: 32 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)