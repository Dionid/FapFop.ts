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

export const Array = {
  map,
  filter
}
