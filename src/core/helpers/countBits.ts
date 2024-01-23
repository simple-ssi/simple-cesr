export default (n: number): number => {
  // uses regex to conveniently count bits}
  const b = n.toString(2).match(/1|0/g) ?? [] // make 'b' an empty array in case the expression evaluates to null

  // length of array is number of bits
  return b.length
}
