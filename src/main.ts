// import { makeSureThat } from './implementation/make/maker/lib/validate/validate.ts'
// import { primitiveIsEightBytes } from './implementation/make/maker/lib/validate/validations/lengthIs.ts'

import { transformToRaw } from './api/transform/transformToRaw.ts'

// const raw = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8])
// const rawIsCorrectLength = primitiveIsEightBytes(raw)

// const thisCheckPasses = (): boolean => true
// const throwInAWrench = (): boolean => false

// const result = makeSureThat(
//   rawIsCorrectLength,
//   thisCheckPasses
//   // throwInAWrench
// )

// console.log(result)

function oneChar () {
  const input = 'MAAB'
  const expectedCode = 'M'
  console.log(`MAIN: expectedCode ${expectedCode}`)
  const expectedSubstring = 'AAB'
  console.log(`MAIN: expectedSubstring ${expectedSubstring}`)
  const raw = {
    code: 'M',
    raw: Buffer.from([0x00, 0x01])
  }
  console.log('MAIN: raw', raw)
  const result = transformToRaw(input)
  console.log('MAIN: result', result)
  console.log('\n\n')
}

function twoChar () {
  const input = '0FDdrzWhk2F6usxBc0muIEExEub6TompfqIKnu7mS1XTmiGSmSonT8GoNro8I6P-671FTUQjZDzoDiqayU-lTKSf'
  const expectedCode = '0F'
  console.log('MAIN: expectedCode', expectedCode)
  const expectedSubstring = 'DdrzWhkk2F6usxBc0muIEExEub6TompfqIKnu7mS1XTmiGSmSonT8GoNro8I6P-671FTUQjZDzoDiqayU-lTKSf'
  console.log('MAIN: expectedSubstring', expectedSubstring)
  const raw = {
    code: '0F',
    raw: Buffer.from('ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f', 'hex')
  }
  console.log('MAIN: raw', raw)
  const result = transformToRaw(input)
  console.log('MAIN: result', result)
  console.log('\n\n')
}

function fourChar () {
  const input = '1AABArT5f26OkhTpogIbLHrW8iM0mfEU_tM-pr_D4rH-ryTB'
  const expectedCode = '1AAB'
  console.log('MAIN: expectedCode', expectedCode)
  const expectedSubstring = 'ArT5f26OkhTpogIbLHrW8iM0mfEU_tM-pr_D4rH-ryTB'
  console.log('MAIN: expectedSubstring', expectedSubstring)
  const raw = {
    code: '1AAB',
    raw: Buffer.from('02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1', 'hex')
  }
  console.log('MAIN: raw', raw)
  const result = transformToRaw(input)
  console.log('MAIN: result', result)
  console.log('\n\n')
}

oneChar()
twoChar()
fourChar()
