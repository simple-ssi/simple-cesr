import npmPackage, { text } from './index.js'

describe('NPM package', () => {
  it('should be an object', () => {
    // assert.isObject(npmPackage)
    expect(npmPackage).toBeInstanceOf(Object)
  })

  it('should have a text property', () => {
    // assert.property(npmPackage, 'helloWorld')
    expect(npmPackage).toHaveProperty('text')
  })
})

describe('Text encoder', () => {
  it('should be a function', () => {
    // assert.isFunction(helloWorld)
    expect(text).toBeInstanceOf(Function)
  })
})
