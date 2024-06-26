import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'

checkThat(
  {
    name: 'Sha2 self-addressing 512 bit digest',
    code: '0G' as Code,
    primitive: Buffer.from('8524edf2f7ab73ebb7190ecd1e2702d1b371ed934ae75b694f6d21cad9adb59a2154e750bcddfa7262c4b88dfe976e130c1f50930c5a62eb73280933b7b236e7', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
