// TypeScript exhaustiveness check
// see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
export const exhaustive = (x: never): never => {
  throw new ExhuastivenessCheckFailure()
}
export class ExhuastivenessCheckFailure extends Error {
  constructor () {
    super('Exhaustiveness check failed. Should not have been able to get here.')
    this.name = 'EXHAUSTIVENESS_CHECK_FAILURE'
  }
}
