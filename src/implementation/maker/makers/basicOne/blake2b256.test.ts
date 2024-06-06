import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'

checkThat(
  {
    name: 'Blake2b self-addressing 256 bit digest',
    code: 'F' as Code,
    primitive: Buffer.from('b517a498bf554ab419bbcaa61be07af412d33348eed4b44bd45384550df82d41', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
