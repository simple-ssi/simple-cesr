import { TestConfiguration } from './testConfiguration.ts'
import { myMaker } from './myMaker.ts'
import { validator1 } from './validator1.ts'
import { run } from './run.ts'

export const validator2 = (example: any): void => {
  it('checks for empty value', () => {
    expect(1).toBe(1)
  })
}

const configuration: TestConfiguration = {
  type: 'Ed25519Seed',
  code: 'A',
  maker: myMaker,
  validators: [validator1, validator2],
  example: '4f3c811f1d6fa45a9d0b65e2c1e0ddf801d063e3f7e100c3500b6a229a5e9f2a'
}

run(configuration)
