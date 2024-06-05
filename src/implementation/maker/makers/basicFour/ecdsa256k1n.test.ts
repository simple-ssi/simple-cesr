import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'
import { prefixis02or03 } from '../test/check/checks/prefixIsCorrect.js'

check(
  {
    name: 'ECDSA secp256k1 verification key, basic derivation',
    code: '1AAA' as Code,
    primitive: Buffer.from('03b89efadf2d1a7e3c0fbec09b14d151d0b93ecaf6c4614e7a56b75802c1f2e3a8', 'hex')
  },
  prefixis02or03,
  lengthNotWrong,
  canMakeIt
)
