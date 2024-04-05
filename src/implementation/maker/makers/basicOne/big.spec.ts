import 'mocha'
import { Buffer } from 'buffer/'
import { Code } from '../../../../core/code/code'
import { check } from '../test/check/check'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong'
import { canMakeIt } from '../test/check/checks/canMakeIt'

const example = '0110abcdef012345' // becomes 8 byte Buffer

const configuration = {
  describe: 'With Big (8-byte) number',
  code: 'N' as Code,
  example: Buffer.from(example, 'hex'),
  length: 8 // 8 bytes
}

check(
  configuration,
  canMakeIt,
  lengthNotWrong
)
