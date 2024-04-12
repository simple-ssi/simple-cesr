// '9a768bfe3045cd2189abcdef1234567890fedcba9876543210abcdef1234567890abcd1234ef567890abcd1234ef567890abcd1234ef567890abcd1234ef5678'
import { Buffer } from 'buffer/index.js'
import { Code } from '../../../../core/code/code.js'
import { check } from '../test/check/check.js'
import { lengthNotWrong } from '../test/check/checks/lengthNotWrong.js'
import { canMakeIt } from '../test/check/checks/canMakeIt.js'

const configuration = {
  describe: 'Ed448 public signature',
  code: '1AAE' as Code,
  // don't know why this is 39 bytes instead of 114 bytes, just following the spec
  example: Buffer.from('dd805dc9655a9aa092dbec070545522c4d27f40ca056781d0ea452e90a66aa94923ed6e41809fc', 'hex'), // a valid example of Ed448n public signature in hex
  length: 80
}

check(
  configuration,
  lengthNotWrong,
  canMakeIt
)
