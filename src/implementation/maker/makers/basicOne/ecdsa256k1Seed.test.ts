import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'

checkThat(
  {
    name: 'ECDSA secp256k1 256 bit seed',
    code: 'J' as Code,
    primitive: Buffer.from('f7e8d9a0b1c2d3e4f5a6b7c8d9e0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
