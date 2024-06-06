import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'

checkThat(
  {
    name: '128 bit random salt',
    code: '0A' as Code,
    primitive: Buffer.from('39aa391b5b820de57df633ac0025af16', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
