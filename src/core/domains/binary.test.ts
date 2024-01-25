import { buildShort } from '../primitives/short'
import { buildBinaryFromText } from './binary'
import { buildRaw } from './raw'
import { buildTextFromRaw } from './text'

describe('Binary Domain', () => {
  test('Build Binary from Text', () => {
    const shortValue = 1
    const short = buildShort(shortValue)
    const raw = buildRaw('M', short)
    const text = buildTextFromRaw(raw)
    const expected = Buffer.from('300001', 'hex')
    const actual = buildBinaryFromText(text)
    expect(expected).toEqual(actual)
  })
})
