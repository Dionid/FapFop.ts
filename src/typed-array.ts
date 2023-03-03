export const diff = <T>(a: T[], b: T[]) => [a, b].reduce((a, b) => a.filter((c) => !b.includes(c)))

export const TypedArray = {
  diff
}
