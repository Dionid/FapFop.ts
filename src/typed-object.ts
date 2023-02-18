export const TypedObject = {
  keys: <T extends string | number | symbol>(val: Record<T, any>): T[] => {
    return Object.keys(val) as T[]
  },
  entries: <T extends string | number | symbol, V>(val: Record<T, V>): [T, V][] => {
    return Object.entries(val) as [T, V][]
  }
}
