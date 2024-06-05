import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'

check(
  {
    name: 'Blake2s self-addressing 256 bit digest',
    code: 'G' as Code,
    primitive: Buffer.from('2080982ef42d6be9c30716c33633f0b4e8f35f7e031e5822e4f6e994617aee2e', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
