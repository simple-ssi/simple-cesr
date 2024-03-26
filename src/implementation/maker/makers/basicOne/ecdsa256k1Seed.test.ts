import { Code } from '../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With ECDSA secp256k1 256 bit seed',
  type: 'Ecdsa256k1Seed',
  code: 'J' as Code,
  example: Buffer.from('f7e8d9a0b1c2d3e4f5a6b7c8d9e0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8', 'hex'), // valid example of ECDSA secp256k1 256 bit seed in hex
  length: 32 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
