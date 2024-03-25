// '9a768bfe3045cd2189abcdef1234567890fedcba9876543210abcdef1234567890abcd1234ef567890abcd1234ef567890abcd1234ef567890abcd1234ef5678'
import { Buffer } from 'buffer'
import { Code } from '../../../../../core/code/code.ts'
import { check } from '../../lib/check/check.ts'
import { lengthNotWrong } from '../../lib/check/checks/lengthNotWrong.ts'
import { canMakeIt } from '../../lib/check/checks/canMakeIt.ts'

const configuration = {
  suite: 'With Ed448 public signature',
  type: 'Ed448s',
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
