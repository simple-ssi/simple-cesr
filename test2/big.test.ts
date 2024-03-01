import { makeBig } from '../src/useCases/make/maker/makers/basicOne/makeBig.ts'
import { Code } from '../src/core/code/code.ts'
import { pipe } from '../src/util/pipe.ts'
import { canMakeIt } from './checks/canMakeIt.ts'
import { lengthNotWrong } from './checks/lengthNotWrong.ts'

const suite = 'Big maker'

const example = '0110abcdef012345'

const configuration = {
  type: 'Big',
  code: 'N' as Code,
  maker: makeBig,
  example: Buffer.from(example, 'hex'),
  length: 8
}

describe(suite, () => {
  pipe(
    configuration,
    canMakeIt,
    lengthNotWrong
  )
})

// describe('Big maker', () => {
//   it('makes a Big', () => {
//     const example = '0110abcdef012345'
//     const big = makeBig(Buffer.from(example, 'hex'))
//     expect(big.code).toBe('N')
//     expect(big.raw.toString('hex')).toEqual(example)
//   })
//   it('is ok with max safe integer', () => {
//     // even though eight bytes can express a value higher, we'll check to make sure it works with the max safe integer
//     const max = Number.MAX_SAFE_INTEGER.toString(16).padStart(16, '0')
//     const big = makeBig(Buffer.from(max, 'hex'))
//     expect(big.raw.toString('hex')).toEqual('001fffffffffffff')
//   })
//   it('throws an error if the buffer is not 8 bytes', () => {
//     expect(() => makeBig(Buffer.from('00', 'hex'))).toThrow(PrimitiveWrongLength)
//   })
// })
