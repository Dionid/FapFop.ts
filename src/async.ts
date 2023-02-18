const filter = async <T>(arr: T[], predicate: (el: T) => Promise<boolean>): Promise<T[]> => {
  const booleanArray = await Promise.all(arr.map(predicate))

  return arr.filter((_val, i) => booleanArray[i])
}

const reduce = async <T, R>(arr: T[], fn: (acc: R, cur: T) => Promise<R>, result: R): Promise<R> => {
  return arr.reduce<Promise<R>>(async (accP, cur) => {
    const acc = await accP

    return fn(acc, cur)
  }, Promise.resolve(result))
}

export const Async = {
  filter,
  reduce
}
