import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'
import { prefixis02or03 } from '../test/check/checks/prefixIsCorrect.ts'

const configuration = {
  describe: 'With ECDSA secp256k1 verification key, basic derivation',
  code: '1AAA' as Code,
  example: Buffer.from('03b89efadf2d1a7e3c0fbec09b14d151d0b93ecaf6c4614e7a56b75802c1f2e3a8', 'hex'), // a valid example of a compressed ECDSA secp256k1 verification key in hex
  length: 64 // expected length of example in bytes
}

check(
  configuration,
  prefixis02or03,
  lengthNotWrong,
  canMakeIt
)
