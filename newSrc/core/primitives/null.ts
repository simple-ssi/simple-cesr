export interface NullPrimitive {
  code: 'NULL'
}

export const makeNullPrimitive = (): NullPrimitive => {
  const nullPrimitive: NullPrimitive = {
    code: 'NULL'
  }
  return nullPrimitive
}
