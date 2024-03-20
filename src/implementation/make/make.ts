import { match } from 'ts-pattern'

import { Code } from '../../core/code/code.ts'
import { Raw } from '../../core/domain/domains.ts'
import { makeEcdsa256k1 } from './maker/makers/basicFour/makeEcdsa256k1.ts'
import { makeX25519 } from './maker/makers/basicOne/makeX25519.ts'
import { makeSha3512 } from './maker/makers/basicTwo/sha3512.ts'
import { makeBig } from './maker/makers/basicOne/makeBig.ts'
import { makeShort } from './maker/makers/basicOne/makeShort.ts'
import { makeEd25519Seed } from './maker/makers/basicOne/makeEd25519Seed.ts'
import { makeEd25519n } from './maker/makers/basicOne/makeEd25519n.ts'
import { makeEd25519 } from './maker/makers/basicOne/makeEd25519.ts'
import { makeBlake3256 } from './maker/makers/basicOne/makeBlake3256.ts'
import { makeSha3256 } from './maker/makers/basicOne/makeSha3256.ts'
import { makeSha2256 } from './maker/makers/basicOne/makeSha2256.ts'
import { makeEcdsa256k1Seed } from './maker/makers/basicOne/makeEcdsa256k1Seed.ts'
import { makeX25519Private } from './maker/makers/basicOne/makeX25519Private.ts'
import { makeBlake2b256 } from './maker/makers/basicOne/makeBlake2b256.ts'
import { makeBlake2s256 } from './maker/makers/basicOne/makeBlake2s256.ts'

export const make = (code: Code, primitive: any): Raw => match(code)
  .with('A', () => makeEd25519Seed(primitive))
  .with('B', () => makeEd25519n(primitive))
  .with('C', () => makeX25519(primitive))
  .with('D', () => makeEd25519(primitive))
  .with('E', () => makeBlake3256(primitive))
  .with('F', () => makeBlake2b256(primitive))
  .with('G', () => makeBlake2s256(primitive))
  .with('H', () => makeSha3256(primitive))
  .with('I', () => makeSha2256(primitive))
  .with('J', () => makeEcdsa256k1Seed(primitive))
  .with('M', () => makeShort(primitive))
  .with('N', () => makeBig(primitive))
  .with('O', () => makeX25519Private(primitive))
  .with('0F', () => makeSha3512(primitive))
  .with('1AAB', () => makeEcdsa256k1(primitive))
  .exhaustive()
