import { Buffer } from 'buffer/index.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'
import { Code } from '../../../../core/code/code.js'

checkThat(
  {
    name: 'Short (2-byte) number',
    code: 'M' as Code,
    primitive: Buffer.from('011F', 'hex') // 2 bytes in hex
  },
  canMakeIt,
  lengthNotWrong
)
