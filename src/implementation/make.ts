// import { match } from 'ts-pattern'

import { Code } from '../core/code/code.js'
import { Short } from '../core/primitive/primitives.js'

// import { Code } from '../core/code/code.js'
// import { Raw } from '../core/domain/domains.js'
// import { ecdsa256k1 } from './maker/makers/basicFour/ecdsa256k1.js'
// import { x25519 } from './maker/makers/basicOne/x25519.js'
// import { sha3512 } from './maker/makers/basicTwo/sha3512.js'
// import { big } from './maker/makers/basicOne/big.js'
// import { short } from './maker/makers/basicOne/short.js'
// import { ed25519Seed } from './maker/makers/basicOne/ed25519Seed.js'
// import { ed25519n } from './maker/makers/basicOne/ed25519n.js'
// import { ed25519 } from './maker/makers/basicOne/ed25519.js'
// import { blake3256 } from './maker/makers/basicOne/blake3256.js'
// import { sha3256 } from './maker/makers/basicOne/sha3256.js'
// import { sha2256 } from './maker/makers/basicOne/sha2256.js'
// import { ecdsa256k1Seed } from './maker/makers/basicOne/ecdsa256k1Seed.js'
// import { x25519Private } from './maker/makers/basicOne/x25519Private.js'
// import { blake2b256 } from './maker/makers/basicOne/blake2b256.js'
// import { blake2s256 } from './maker/makers/basicOne/blake2s256.js'
// import { salt128 } from './maker/makers/basicTwo/salt128.js'
// import { ed25519Sig } from './maker/makers/basicTwo/ed25519Sig.js'
// import { ecdsa256k1Sig } from './maker/makers/basicTwo/ecdsa256k1Sig.js'
// import { blake3512 } from './maker/makers/basicTwo/blake3512.js'
// import { blake2b512 } from './maker/makers/basicTwo/blake2b512.js'
// import { sha2512 } from './maker/makers/basicTwo/sha2512.js'
// import { long } from './maker/makers/basicTwo/long.js'
// import { ecdsa256k1n } from './maker/makers/basicFour/ecdsa256k1n.js'
// import { ed448n } from './maker/makers/basicFour/ed448n.js'
// import { ed448 } from './maker/makers/basicFour/ed448.js'
// import { ed448s } from './maker/makers/basicFour/ed448s.js'
// import { fourB64ThreeByte } from './maker/makers/basicFour/fourB64ThreeByte.js'

// // make a Raw holding the appropriate primitive
// export const make = (code: Code, primitive: any): Raw =>
//   match(code)
//     .with('A', () => ed25519Seed(primitive))
//     .with('B', () => ed25519n(primitive))
//     .with('C', () => x25519(primitive))
//     .with('D', () => ed25519(primitive))
//     .with('E', () => blake3256(primitive))
//     .with('F', () => blake2b256(primitive))
//     .with('G', () => blake2s256(primitive))
//     .with('H', () => sha3256(primitive))
//     .with('I', () => sha2256(primitive))
//     .with('J', () => ecdsa256k1Seed(primitive))
//     .with('M', () => short(primitive))
//     .with('N', () => big(primitive))
//     .with('O', () => x25519Private(primitive))
//     .with('0A', () => salt128(primitive))
//     .with('0B', () => ed25519Sig(primitive))
//     .with('0C', () => ecdsa256k1Sig(primitive))
//     .with('0D', () => blake3512(primitive))
//     .with('0E', () => blake2b512(primitive))
//     .with('0F', () => sha3512(primitive))
//     .with('0G', () => sha2512(primitive))
//     .with('0H', () => long(primitive))
//     .with('1AAA', () => ecdsa256k1n(primitive))
//     .with('1AAB', () => ecdsa256k1(primitive))
//     .with('1AAC', () => ed448n(primitive))
//     .with('1AAD', () => ed448(primitive))
//     .with('1AAE', () => ed448s(primitive))
//     .with('1AAF', () => fourB64ThreeByte(primitive))
//     .exhaustive()
export const make = (code: Code, primitive: any): Short => ({
  code: 'M',
  raw: primitive
})
