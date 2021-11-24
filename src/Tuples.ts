export const pickHead = <T>(arg: [T, ...any]): T => {
  return arg[0]
}

export const pickTail = <T>(arg: [...any, T]): T => {
  return arg[arg.length - 1]
}

export const Tuple = {
  pickHead,
  pickTail
}
