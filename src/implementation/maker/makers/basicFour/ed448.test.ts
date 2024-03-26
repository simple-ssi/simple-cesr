// '9a768bfe3045cd2189abcdef1234567890fedcba9876543210abcdef1234567890abcd1234ef567890abcd1234ef567890abcd1234ef567890abcd1234ef5678'
import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With Ed448 public key',
  type: 'Ed448',
  code: '1AAD' as Code,
  example: Buffer.from('9a768bfe3045cd2189abcdef1234567890fedcba9876543210abcdef1234567890abcd1234ef567890abcd1234ef567890abcd1234ef567890', 'hex'), // a valid example of Ed448n public key in hex
  length: 80
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
