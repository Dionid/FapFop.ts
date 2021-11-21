
export type CArgs1<A, B> = (a: A) => B
export type CArgs2<A, B, C> = CArgs1<A, CArgs1<B, C>>
export type CArgs3<A, B, C, D> = CArgs2<A, B, CArgs1<C, D>>
export type CArgs4<A, B, C, D, E> = CArgs3<A, B, C, CArgs1<D, E>>

export function curry<A, B>(f: (a: A) => B): CArgs1<A, B>
export function curry<A, B, C>(f: (a: A, b: B) => C): CArgs2<A, B, C>
export function curry<A, B, C, D>(f: (a: A, b: B, c: C) => D): CArgs3<A, B, C, D>
export function curry<A, B, C, D, E>(f: (a: A, b: B, c: C, d: D) => E): CArgs4<A, B, C, D, E>
export function curry(func: (...args: any[]) => any): any {
  return function curried(...args: any[]) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (...args2: any[]) => curried(...args, ...args2)
    }
  };
}

// export type C2A1<A, B> = (a: A) => B
// export type C2A2<A, B, C> = C2A1<A, C2A1<B, C>>
// export type C2A3<A, B, C, D> = C2A2<A, B, (b: B, c: C) => D>
// export type C2A4<A, B, C, D, E> = C2A2<A, B, (b: B, c: C, d: D) => E>

export function curry2<A, B>(f: (a: A) => B): (a: A) => B
export function curry2<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C
export function curry2<A, B, C, D>(f: (a: A, b: B, c: C) => D): (a: A) => (b: B, c: C) => D
export function curry2<A, B, C, D, E>(f: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B, c: C, d: D) => E
export function curry2(func: (...args: any[]) => any): any {
  return curry(func)
}

export function curry3<A, B>(f: (a: A) => B): (a: A) => B
export function curry3<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C
export function curry3<A, B, C, D>(f: (a: A, b: B, c: C) => D): (a: A) => (b: B) => (c: C) => D
export function curry3<A, B, C, D, E>(f: (a: A, b: B, c: C, d: D) => E): (a: A) => (b: B) => (c: C, d: D) => D
export function curry3(func: (...args: any[]) => any): any {
  return curry(func)
}

