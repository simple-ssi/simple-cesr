import { Buffer } from 'buffer/index.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'
import { Code } from '../../../../core/code/code.js'

checkThat(
  {
    name: 'Ed25519 verification key',
    code: 'D' as Code,
    primitive: Buffer.from('e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
