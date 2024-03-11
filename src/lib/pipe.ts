export const pipe = (value: any, ...fns: Function[]): any =>
  fns
    .reduce(
      (acc: any, fn: Function) => fn(acc),
      value
    )
