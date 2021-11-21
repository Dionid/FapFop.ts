
export const flip = <A extends unknown[], B extends unknown[], C>(fn: (...a: A) => (...b: B) => C): (...b: B) => (...a: A) => C => {
  return (...b: B) => (...a: A) => fn(...a)(...b)
}
