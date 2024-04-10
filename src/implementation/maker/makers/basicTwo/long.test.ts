import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'

const example = '10bdf135' // becomes 4 byte Buffer

const configuration = {
  describe: 'Long (4-byte) number',
  code: '0H' as Code,
  example: Buffer.from(example, 'hex'), // 4 bytes as hex
  length: 4 // expected length of example in bytes
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
