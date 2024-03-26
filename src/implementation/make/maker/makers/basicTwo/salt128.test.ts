import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With 128 bit random salt',
  type: 'Salt128',
  code: '0A' as Code,
  example: Buffer.from('39aa391b5b820de57df633ac0025af16', 'hex'), // valid example of 128 bit random salt in hex
  length: 16 // characters in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
