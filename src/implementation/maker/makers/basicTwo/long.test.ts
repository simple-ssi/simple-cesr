import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'

check(
  {
    name: 'Long (4-byte) number',
    code: '0H' as Code,
    primitive: Buffer.from('10bdf135', 'hex') // 4 bytes as hex
  },
  lengthNotWrong,
  canMakeIt
)
