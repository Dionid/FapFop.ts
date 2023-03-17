export const diff = <T>(a: T[], b: T[]) => [a, b].reduce((a, b) => a.filter((c) => !b.includes(c)))

export const map =
  <X, Y>(fn: (x: X) => Y) =>
  (array: X[]) => {
    return array.map(fn)
  }

export const filter =
  <X>(fn: (x: X) => boolean) =>
  (array: X[]) => {
    return array.filter(fn)
  }

export const TypedArray = {
  diff,
  filter,
  map
}
