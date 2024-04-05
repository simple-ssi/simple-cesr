import 'mocha'
import { assert } from 'chai'
import { Buffer } from 'buffer/'
import {
  itIsTwoBytes,
  itIsFourBytes,
  itIsThreeBytes,
  itIsEightBytes,
  itIs16Bytes,
  itIs32Bytes,
  itIs33Bytes,
  itIs39Bytes,
  itIs57Bytes,
  itIs64Bytes,
  itIs114Bytes
} from './lengthIsRight'

describe('Length validator', () => {
  const oneByte = '00'
  it('can validate a 2-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(2), 'hex')
    assert.equal(itIsTwoBytes(buffer)(), true)
  })

  it('can validate a 3-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(3), 'hex')
    assert.equal(itIsThreeBytes(buffer)(), true)
  })

  it('can validate a 4-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(4), 'hex')
    assert.equal(itIsFourBytes(buffer)(), true)
  })

  it('can validate an 8-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(8), 'hex')
    assert.equal(itIsEightBytes(buffer)(), true)
  })

  it('can validate a 16-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(16), 'hex')
    assert.equal(itIs16Bytes(buffer)(), true)
  })

  it('can validate a 32-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(32), 'hex')
    assert.equal(itIs32Bytes(buffer)(), true)
  })

  it('can validate a 33-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(33), 'hex')
    assert.equal(itIs33Bytes(buffer)(), true)
  })

  it('can validate a 39-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(39), 'hex')
    assert.equal(itIs39Bytes(buffer)(), true)
  })

  it('can validate a 57-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(57), 'hex')
    assert.equal(itIs57Bytes(buffer)(), true)
  })

  it('can validate a 64-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(64), 'hex')
    assert.equal(itIs64Bytes(buffer)(), true)
  })

  it('can validate a 114-byte buffer', () => {
    const buffer = Buffer.from(oneByte.repeat(114), 'hex')
    assert.equal(itIs114Bytes(buffer)(), true)
  })
})
