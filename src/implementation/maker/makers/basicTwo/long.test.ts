import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'

checkThat(
  {
    name: 'Long (4-byte) number',
    code: '0H' as Code,
    primitive: Buffer.from('10bdf135', 'hex') // 4 bytes as hex
  },
  lengthNotWrong,
  canMakeIt
)
