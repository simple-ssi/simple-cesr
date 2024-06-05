import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'

check(
  {
    name: '128 bit random salt',
    code: '0A' as Code,
    primitive: Buffer.from('39aa391b5b820de57df633ac0025af16', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
