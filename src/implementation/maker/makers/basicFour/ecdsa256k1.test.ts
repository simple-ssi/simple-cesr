import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'
import { prefixis02or03 } from '../test/check/checks/prefixIsCorrect.js'

check(
  {
    name: 'ECDSA public verification key',
    code: '1AAB' as Code,
    primitive: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
  },
  prefixis02or03,
  lengthNotWrong,
  canMakeIt
)
