export const map =
  <X, Y>(fn: (x: X) => Y) =>
  (array: X[]) => {
    return array.map(fn)
  }


export const Array = {
  map,
}
