import npmPackage, { helloWorld, goodBye } from './index.js'

describe('NPM Package', () => {
  it('should be an object', () => {
    // assert.isObject(npmPackage)
    expect(npmPackage).toBeInstanceOf(Object)
  })

  it('should have a helloWorld property', () => {
    // assert.property(npmPackage, 'helloWorld')
    expect(npmPackage).toHaveProperty('helloWorld')
  })
})

describe('Hello World Function', () => {
  it('should be a function', () => {
    // assert.isFunction(helloWorld)
    expect(helloWorld).toBeInstanceOf(Function)
  })

  it('should return the hello world message', () => {
    const expected = 'Hello World from my example modern npm package!'
    const actual = helloWorld()
    // assert.equal(actual, expected)
    expect(actual).toEqual(expected)
  })
})

describe('Goodbye Function', () => {
  it('should be a function', () => {
    // assert.isFunction(goodBye)
    expect(goodBye).toBeInstanceOf(Function)
  })

  it('should return the goodbye message', () => {
    const expected = 'Goodbye from my example modern npm package!'
    const actual = goodBye()
    // assert.equal(actual, expected)
    expect(actual).toEqual(expected)
  })
})
