import { OptionalPromise } from '../types'

export function pipe<A extends readonly unknown[], B>(ab: (...a: A) => B): (...a: A) => B
export function pipe<A extends readonly unknown[], B, C>(ab: (...a: A) => B, bc: (b: B) => C): (...a: A) => C
export function pipe<A extends readonly unknown[], B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D
): (...a: A) => D
export function pipe<A extends readonly unknown[], B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E
): (...a: A) => E
export function pipe<A extends readonly unknown[], B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F
): (...a: A) => F
export function pipe<A extends readonly unknown[], B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G
): (...a: A) => G
export function pipe<A extends readonly unknown[], B, C, D, E, F, G, H>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H
): (...a: A) => H
export function pipe<A extends readonly unknown[], B, C, D, E, F, G, H, I>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I
): (...a: A) => I
export function pipe<A extends readonly unknown[], B, C, D, E, F, G, H, I, J>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J
): (...a: A) => J

export function pipe(...fns: any[]) {
  return (...x: any[]) =>
    fns.reduce((acc: any, cur: any, index: number) => (index === 0 ? acc(...x) : cur(acc)), fns[0])
}

export function pipeAsync<A extends readonly unknown[], B>(ab: (...a: A) => OptionalPromise<B>): (...a: A) => Promise<B>
export function pipeAsync<A extends readonly unknown[], B, C>(
  ab: (...a: A) => OptionalPromise<B>,
  bc: (b: B) => OptionalPromise<C>
): (...a: A) => Promise<C>
export function pipeAsync<A extends readonly unknown[], B, C, D>(
  ab: (...a: A) => OptionalPromise<B>,
  bc: (b: B) => OptionalPromise<C>,
  cd: (c: C) => OptionalPromise<D>
): (...a: A) => Promise<D>
export function pipeAsync<A extends readonly unknown[], B, C, D, E>(
  ab: (...a: A) => OptionalPromise<B>,
  bc: (b: B) => OptionalPromise<C>,
  cd: (c: C) => OptionalPromise<D>,
  de: (d: D) => OptionalPromise<E>
): (...a: A) => Promise<E>
export function pipeAsync<A extends readonly unknown[], B, C, D, E, F>(
  ab: (...a: A) => OptionalPromise<B>,
  bc: (b: B) => OptionalPromise<C>,
  cd: (c: C) => OptionalPromise<D>,
  de: (d: D) => OptionalPromise<E>,
  ef: (e: E) => OptionalPromise<F>
): (...a: A) => Promise<F>
export function pipeAsync<A extends readonly unknown[], B, C, D, E, F, G>(
  ab: (...a: A) => OptionalPromise<B>,
  bc: (b: B) => OptionalPromise<C>,
  cd: (c: C) => OptionalPromise<D>,
  de: (d: D) => OptionalPromise<E>,
  ef: (e: E) => OptionalPromise<F>,
  fg: (f: F) => OptionalPromise<G>
): (...a: A) => Promise<G>
export function pipeAsync<A extends readonly unknown[], B, C, D, E, F, G, H>(
  ab: (...a: A) => OptionalPromise<B>,
  bc: (b: B) => OptionalPromise<C>,
  cd: (c: C) => OptionalPromise<D>,
  de: (d: D) => OptionalPromise<E>,
  ef: (e: E) => OptionalPromise<F>,
  fg: (f: F) => OptionalPromise<G>,
  gh: (g: G) => OptionalPromise<H>
): (...a: A) => Promise<H>
export function pipeAsync<A extends readonly unknown[], B, C, D, E, F, G, H, I>(
  ab: (...a: A) => OptionalPromise<B>,
  bc: (b: B) => OptionalPromise<C>,
  cd: (c: C) => OptionalPromise<D>,
  de: (d: D) => OptionalPromise<E>,
  ef: (e: E) => OptionalPromise<F>,
  fg: (f: F) => OptionalPromise<G>,
  gh: (g: G) => OptionalPromise<H>,
  hi: (h: H) => OptionalPromise<I>
): (...a: A) => Promise<I>
export function pipeAsync<A extends readonly unknown[], B, C, D, E, F, G, H, I, J>(
  ab: (...a: A) => OptionalPromise<B>,
  bc: (b: B) => OptionalPromise<C>,
  cd: (c: C) => OptionalPromise<D>,
  de: (d: D) => OptionalPromise<E>,
  ef: (e: E) => OptionalPromise<F>,
  fg: (f: F) => OptionalPromise<G>,
  gh: (g: G) => OptionalPromise<H>,
  hi: (h: H) => OptionalPromise<I>,
  ij: (i: I) => OptionalPromise<J>
): (...a: A) => Promise<J>

export function pipeAsync(...fns: any[]) {
  return (...x: any[]) =>
    fns.reduce(async (acc: any, cur: any, index: number) => {
      return index === 0 ? acc(...x) : cur(await acc)
    }, fns[0])
}

export const Pipe = {
  pipe,
  pipeAsync
}
