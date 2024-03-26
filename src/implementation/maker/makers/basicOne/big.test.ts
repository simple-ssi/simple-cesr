import { Buffer } from 'buffer'
import { Code } from '../../../../core/code/code.ts'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'

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
