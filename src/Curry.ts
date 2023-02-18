// ! NOTICE ! Be really carefull with using it with generics, because in most cases it will not preserve types

export function curry<A, B>(f: (a: A) => B): (a: A) => B
export function curry<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C
export function curry<A, B, C, D>(f: (a: A, b: B, c: C) => D): (a: A) => (b: B) => (c: C) => D
export function curry<A, B, C, D, E>(f: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B) => (c: C) => (d: D) => E
export function curry<A, B, C, D, E, F>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => F
export function curry<A, B, C, D, E, F, G>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => G
export function curry<A, B, C, D, E, F, G, H>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => H
export function curry<A, B, C, D, E, F, G, H, I>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
export function curry(func: (...args: any[]) => any): any {
  return function curried(...args: any[]) {
    if (args.length >= func.length) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
      return func(...args)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
      return (...args2: any[]) => curried(...args, ...args2)
    }
  }
}

export function curry2<A, B>(f: (a: A) => B): (a: A) => B
export function curry2<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C
export function curry2<A, B, C, D>(f: (a: A, b: B, c: C) => D): (a: A) => (b: B, c: C) => D
export function curry2<A, B, C, D, E>(f: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B, c: C, d: D) => E
export function curry2<A, B, C, D, E, F>(f: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B, c: C, d: D, e: E) => F
export function curry2<A, B, C, D, E, F, G>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B, c: C, d: D, e: E, f: F) => G
export function curry2<A, B, C, D, E, F, G, H>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B, c: C, d: D, e: E, f: F, g: G) => H
export function curry2<A, B, C, D, E, F, G, H, I>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I
export function curry2(func: (...args: any[]) => any): any {
  return curry(func)
}

export function curry3<A, B>(f: (a: A) => B): (a: A) => B
export function curry3<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C
export function curry3<A, B, C, D>(f: (a: A, b: B, c: C) => D): (a: A) => (b: B) => (c: C) => D
export function curry3<A, B, C, D, E>(f: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B) => (c: C, d: D) => D
export function curry3<A, B, C, D, E, F>(f: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B) => (c: C, d: D, e: E) => F
export function curry3<A, B, C, D, E, F, G>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C, d: D, e: E, f: F) => G
export function curry3<A, B, C, D, E, F, G, H>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C, d: D, e: E, f: F, g: G) => H
export function curry3<A, B, C, D, E, F, G, H, I>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C, d: D, e: E, f: F, g: G, h: H) => I
export function curry3(func: (...args: any[]) => any): any {
  return curry(func)
}

export function curry4<A, B>(f: (a: A) => B): (a: A) => B
export function curry4<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C
export function curry4<A, B, C, D>(f: (a: A, b: B, c: C) => D): (a: A) => (b: B) => (c: C) => D
export function curry4<A, B, C, D, E>(f: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B) => (c: C) => (d: D) => D
export function curry4<A, B, C, D, E, F>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D, e: E) => F
export function curry4<A, B, C, D, E, F, G>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F) => G
export function curry4<A, B, C, D, E, F, G, H>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F, g: G) => H
export function curry4<A, B, C, D, E, F, G, H, I>(
  f: (a: A, b: B, c: C, d: D) => E
): (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F, g: G, h: H) => I
export function curry4(func: (...args: any[]) => any): any {
  return curry(func)
}

export const flip = <A extends unknown[], B extends unknown[], C>(
  fn: (...a: A) => (...b: B) => C
): ((...b: B) => (...a: A) => C) => {
  return (...b: B) =>
    (...a: A) =>
      fn(...a)(...b)
}

export const Curry = {
  curry,
  curry2,
  curry3,
  flip
}
