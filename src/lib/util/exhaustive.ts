// TypeScript exhaustive check for use in switches
// see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
export const exhaustive = (x: never): never => {
  throw new Error("Didn't expect to get here")
}
