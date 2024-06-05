import { Buffer } from 'buffer/index.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'
import { Code } from '../../../../core/code/code.js'

check(
  {
    name: 'Ed25519N verification key',
    code: 'B' as Code,
    primitive: Buffer.from('a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2', 'hex')
  },
  lengthNotWrong,
  canMakeIt
)
