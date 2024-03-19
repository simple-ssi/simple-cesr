import { match } from 'ts-pattern'

import { Code } from '../../core/code/Code.ts'
import { Raw } from '../../core/domain/Domains.ts'
import { makeEcdsa256k1 } from './maker/makers/basicFour/makeEcdsa256k1.ts'
import { makeSha3512 } from './maker/makers/basicTwo/sha3512.ts'
import { makeBig } from './maker/makers/basicOne/makeBig.ts'
import { makeShort } from './maker/makers/basicOne/makeShort.ts'
import { makeEd25519Seed } from './maker/makers/basicOne/makeEd25519Seed.ts'

export const make = (code: Code, primitive: any): Raw => match(code)
  .with('A', () => makeEd25519Seed(primitive))
  .with('M', () => makeShort(primitive))
  .with('N', () => makeBig(primitive))
  .with('0F', () => makeSha3512(primitive))
  .with('1AAB', () => makeEcdsa256k1(primitive))
  .exhaustive()
