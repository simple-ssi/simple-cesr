// a basic pipe implementation. don't use fancy libraries like Remeda for now.
export const pipe = (value: any, ...fns: Function[]): any =>
  fns
    .reduce(
      (acc: any, fn: Function) => fn(acc),
      value
    )
