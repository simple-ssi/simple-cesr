# simple-cesr

`simple-cesr` is a simple, limited, true-to-spec implementation of [Composable Event Streaming Representation (CESR)](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html). It is compatible with Node.js and major browsers. It has a simple API for encoding and transforming primitives across three [domain representations](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#name-concrete-domain-representat) (Raw, Text, and Binary), as discussed in the spec. It conspicuously adheres to terminology from the spec and carefully avoids introducing outside concepts.

For now, we have only implemented a selected subset of primitives from the [small fixed raw size](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#name-small-fixed-raw-size-tables) and [large fixed raw size](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#name-large-fixed-raw-size-tables) tables:

| Code | Description                 |
| :--: | :-------------------------- |
| A | Seed of Ed25519 private key |
| B | Ed25519 non-transferable prefix public verification key |
| C | X25519 public encryption key |
| D | Ed25519 public verification key |
| E | Blake3-256 Digest |
| F | Blake2b-256 Digest |
| G | Blake2s-256 Digest |
| H | SHA3-256 Digest |
| I | SHA2-256 Digest |
| J | Seed of ECDSA secp256k1 private key |
| M | Short number 2 byte base-2 |
| N | Big number 8 byte base-2 |
| O | X25519 private decryption key |
| 0A | Random salt, seed, private key, or sequence number of length 128 bits  |
| 0B | Ed25519 signature |
| 0C | ECDSA secp256k1 signature |
| 0D | Blake3-512 Digest |
| 0E | Blake2b-512 Digest |
| 0F | SHA3-512 Digest |
| 0G | SHA2-512 Digest |
| 0H | Long number 4 byte base-2 |
| 1AAA | ECDSA secp256k1 non-transferable prefix public verification key |
| 1AAB | ECDSA secp256k1 public verification or encryption key |
| 1AAC | Ed448 non-transferable prefix public verification key |
| 1AAD | Ed448 public verification key |
| 1AAE | Ed448 signature |
| 1AAF | Tag Base64 4 chars or 3 byte base-2 number |

You can find the [complete list](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#name-master-code-table) of all the primitives supported by the CESR protocol in the spec.

This implementation is consistent with the [1.0](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html) spec housed at IETF. We have not considered the soon-to-be-finished CESR [2.0](https://trustoverip.github.io/tswg-cesr-specification/) spec from the Trust Over IP Foundation but plan to do so in upcoming releases.

## Usage

```bash
npm install @simple-ssi/simple-cesr
```

then:

```bash
const cesr = require('@simple-ssi/simple-cesr')
```

or

```bash
import * as cesr from '@simple-ssi/simple-cesr'
```

## API

The API has three encode functions and three transform functions.

### Encode

Encode functions are in the form `function (code, raw)`.

- `code` is the text code, as a string, for the primitive you are encoding.
- `raw` is the raw primitive as a `Uint8Array`.

Encode Functions:

- `raw(code, raw)` - returns an object functionally equivalent to a tuple, `{code, raw}`.
  - `code` is the text code as a string.
  - `raw` is the raw primitive as a byte array.

- `text(code, raw)` - returns the primitive as a CESR-encoded text string.

- `binary(code, raw)` - returns the primitive as a CESR-encoded byte array.

### Transform

Transform functions are in the form `function (rawOrTextOrBinary)`.

- `rawOrTextOrBinary` is the primitive you want to transform in its current domain representation.

Transform Functions:

- `toRaw(textOrBinary)` - takes a primitive encoded as Text or Binary and transforms it into Raw.
- `toText(rawOrBinary)` - takes a primitive encoded as Raw or Binary and transforms it into Text.
- `toBinary(rawOrText)` - takes a primitive encoded as Raw or Text and transforms it into Binary.

## Development

Run unit tests.

```bash
npm test
```

Run a high-level sanity test suite to verify the consistency of `simple-cesr`'s output with another prominent CESR implementation, the `matter` class from [`signify-ts`](https://github.com/WebOfTrust/signify-ts).

```bash
npm run standards-test
```

Run both test suites.

```bash
npm run all-tests
```

Run all tests, format the code, transpile for ECMAScript and CommonJS, and write the output to the `dist` directory at the project's root.

```bash
npm run full-build
```

## Getting Started

Three files that serve as a good starting point for developers becoming familiar with the project.

`src/api/encode/text.ts`
`src/api/transform/transformers/transformTextToRaw.ts`
`src/implementation/make.ts`
