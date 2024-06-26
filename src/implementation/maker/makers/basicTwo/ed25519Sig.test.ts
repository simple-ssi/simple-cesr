import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { checkThat } from '../testLib/checkThat.js'
import { lengthNotWrong } from '../testLib/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../testLib/check/checks/canMakeIt.js'

checkThat(
  {
    name: 'Ed25519 signature',
    code: '0B' as Code,
    primitive: Buffer.from('e7479d9eb057be7126a45cd84cebdff7bb3881afabdec79836a248f0fd4fecc0cf1650cf99ede7556b32ecb415e3bcf0d6ce2d19a02e514e735ecd0df0b75a0e', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
