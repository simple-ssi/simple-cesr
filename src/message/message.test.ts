import { hello, goodbye } from './message.js'

describe('Message', () => {
  it('should return hello', () => {
    expect(hello).toBe('Hello World')
  })

  it('should return goodbye', () => {
    expect(goodbye).toBe('Goodbye')
  })
})
