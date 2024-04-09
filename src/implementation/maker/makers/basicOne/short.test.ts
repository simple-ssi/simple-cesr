import { Buffer } from 'buffer/index.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'
import { Code } from '../../../../core/code/code.js'

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
