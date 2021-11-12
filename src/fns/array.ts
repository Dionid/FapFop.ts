export const mapArray =
  <X, Y>(fn: (x: X) => Y) =>
  (array: X[]) => {
    return array.map(fn)
  }
