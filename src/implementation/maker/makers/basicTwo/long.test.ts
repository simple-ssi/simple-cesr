import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

const example = '10bdf135' // becomes 4 byte Buffer

const configuration = {
  describe: 'With Long (4-byte) number',
  code: '0H' as Code,
  example: Buffer.from(example, 'hex'), // 4 bytes as hex
  length: 4 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
