// '9a768bfe3045cd2189abcdef1234567890fedcba9876543210abcdef1234567890abcd1234ef567890abcd1234ef567890abcd1234ef567890abcd1234ef5678'
import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'

checkThat(
  {
    name: 'four base64chars or three bytes',
    code: '1AAF' as Code,
    primitive: Buffer.from('5cd218', 'hex') // 3 bytes in hex
  },
  lengthNotWrong,
  canMakeIt
)
