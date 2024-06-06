import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'
import { prefixis02or03 } from '../testLib/check/checks/prefixIsCorrect.js'

checkThat(
  {
    name: 'ECDSA public verification key',
    code: '1AAB' as Code,
    primitive: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
  },
  prefixis02or03,
  lengthNotWrong,
  canMakeIt
)
