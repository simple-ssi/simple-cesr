import { Buffer } from 'buffer/index.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'
import { Code } from '../../../../core/code/code.js'

check(
  {
    name: 'Short (2-byte) number',
    code: 'M' as Code,
    primitive: Buffer.from('011F', 'hex') // 2 bytes in hex
  },
  canMakeIt,
  lengthNotWrong
)
