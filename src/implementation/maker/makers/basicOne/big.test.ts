import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'

check(
  {
    name: 'Big (8-byte) number',
    code: 'N' as Code,
    primitive: Buffer.from('0110abcdef012345', 'hex') // 8 bytes in hex
  },
  canMakeIt,
  lengthNotWrong
)
