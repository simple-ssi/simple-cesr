import { Code } from '../../../../../core/code/Code.ts'
import { check } from '../../lib/check/check.ts'
import { prefixNotWrong } from '../../lib/check/checks/prefixNotWrong.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'
import { makeEcdsa256k1 } from './makeEcdsa256k1.ts'

const configuration = {
  suite: 'Ecdsa256k1 maker',
  type: 'Ecdsa256k1',
  code: '1AAB' as Code,
  maker: makeEcdsa256k1,
  example: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex'),
  length: 33
}

const prefix = prefixNotWrong('04')

check(
  configuration,
  prefix,
  lengthNotWrong,
  canMakeIt
)
