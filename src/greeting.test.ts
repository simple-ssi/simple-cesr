import { greeting } from './greeting'

describe('Greeting', () => {
  test('produces the correct string', () => {
    const name = 'Boris Kaloff'
    const expected = 'Welcome to the world, ' + name
    expect(greeting(name)).toBe(expected)
  })
})
