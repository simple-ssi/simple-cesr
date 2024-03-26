import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'
import { prefixis02or03 } from '../../lib/check/checks/prefixNotWrong.ts'

const configuration = {
  suite: 'With ECDSA secp256k1 verification key, basic derivation',
  type: 'Ecdsa256k1n',
  code: '1AAA' as Code,
  example: Buffer.from('03b89efadf2d1a7e3c0fbec09b14d151d0b93ecaf6c4614e7a56b75802c1f2e3a8', 'hex'), // a valid example of a compressed ECDSA secp256k1 verification key in hex
  length: 64 // characters in bytes
}

check(
  configuration,
  prefixis02or03,
  lengthNotWrong,
  canMakeIt
)
