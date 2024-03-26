import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const configuration = {
  describe: 'With X25519 key',
  code: 'C' as Code,
  example: Buffer.from('c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4', 'hex'), // valid x25519 key as hex
  length: 32 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
