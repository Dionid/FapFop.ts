export const callOrUndefined = <T, R>(val: T | undefined, fn: (val: T) => R): R | undefined => {
  return val !== undefined ? fn(val) : undefined
}

export const Undefined = {
  callOrUndefined
}
