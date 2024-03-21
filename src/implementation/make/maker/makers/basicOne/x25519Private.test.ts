import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With X25519 private decryption key',
  type: 'X25519Private',
  code: 'O' as Code,
  example: Buffer.from('a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2', 'hex'), // valid example of X25519 private decryption key in hex
  length: 32 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
