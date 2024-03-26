import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const configuration = {
  describe: 'With 128 bit random salt',
  code: '0A' as Code,
  example: Buffer.from('39aa391b5b820de57df633ac0025af16', 'hex'), // valid example of 128 bit random salt in hex
  length: 16 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
