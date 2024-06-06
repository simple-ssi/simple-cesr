import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'

checkThat(
  {
    name: 'Big (8-byte) number',
    code: 'N' as Code,
    primitive: Buffer.from('0110abcdef012345', 'hex') // 8 bytes in hex
  },
  canMakeIt,
  lengthNotWrong
)
