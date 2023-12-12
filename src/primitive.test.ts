import { Raw, Text, Binary } from './primitive'

test('Raw', () => {
  const primitive = Buffer.from('0001', 'hex')
  const expected = ['M', primitive]
  const actual = Raw(Buffer.from('0001', 'hex'))
  expect(actual).toStrictEqual(expected)
})
test('Text', () => {
  const primitive = Buffer.from('0001', 'hex')
  const raw = Raw(primitive)
  const expected = 'MAAB'
  const actual = Text(raw)
  expect(expected).toEqual(actual)
})
test('Binary', () => {
  const primitive = Buffer.from('0001', 'hex')
  const raw = Raw(primitive)
  const text = Text(raw)
  const expected = Buffer.from('300001', 'hex')
  const actual = Binary(text)
  expect(expected).toEqual(actual)
})
