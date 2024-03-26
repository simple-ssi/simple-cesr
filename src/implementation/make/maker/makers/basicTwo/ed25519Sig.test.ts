import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With Ed25519 signature',
  type: 'Ed25519Sig',
  code: '0B' as Code,
  example: Buffer.from('e7479d9eb057be7126a45cd84cebdff7bb3881afabdec79836a248f0fd4fecc0cf1650cf99ede7556b32ecb415e3bcf0d6ce2d19a02e514e735ecd0df0b75a0e', 'hex'), // valid example of an ED25519 signature in hex
  length: 64 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
