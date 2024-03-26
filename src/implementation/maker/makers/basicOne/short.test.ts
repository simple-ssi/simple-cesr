import { Buffer } from 'buffer'
import { check } from '../test/check/check.ts'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../test/check/checks/canMakeIt.ts'
import { Code } from '../../../../core/code/code.ts'

const example = '011F' // becomes two byte Buffer

const configuration = {
  describe: 'With Short (2-byte) number',
  code: 'M' as Code,
  example: Buffer.from(example, 'hex'),
  length: 2 // 2 bytes
}

check(
  configuration,
  canMakeIt,
  lengthNotWrong
)
