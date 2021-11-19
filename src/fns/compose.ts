import { OptionalPromise } from '../types'

export function compose<A extends readonly unknown[], B>(ab: (...a: A) => B): (...a: A) => B
export function compose<A extends readonly unknown[], B, C>(bc: (b: B) => C, ab: (...a: A) => B): (...a: A) => C
export function compose<A extends readonly unknown[], B, C, D>(
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B,
): (...a: A) => D
export function compose<A extends readonly unknown[], B, C, D, E>(
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B,
): (...a: A) => E
export function compose<A extends readonly unknown[], B, C, D, E, F>(
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B,
): (...a: A) => F
export function compose<A extends readonly unknown[], B, C, D, E, F, G>(
  fg: (f: F) => G,
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B,
): (...a: A) => G
export function compose<A extends readonly unknown[], B, C, D, E, F, G, H>(
  gh: (g: G) => H,
  fg: (f: F) => G,
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B,
): (...a: A) => H
export function compose<A extends readonly unknown[], B, C, D, E, F, G, H, I>(
  hi: (h: H) => I,
  gh: (g: G) => H,
  fg: (f: F) => G,
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B,
): (...a: A) => I
export function compose<A extends readonly unknown[], B, C, D, E, F, G, H, I, J>(
  ij: (i: I) => J,
  hi: (h: H) => I,
  gh: (g: G) => H,
  fg: (f: F) => G,
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B,
): (...a: A) => J

export function compose(...fns: any[]) {
  return (...x: any[]) =>
    fns.reduceRight((acc: any, cur: any, index: number) => (index === fns.length-1 ? acc(...x) : cur(acc)), fns[fns.length-1])
}

export function composeAsync<A extends readonly unknown[], B>(ab: (...a: A) => OptionalPromise<B>): (...a: A) => Promise<B>
export function composeAsync<A extends readonly unknown[], B, C>(bc: (b: B) => OptionalPromise<C>, ab: (...a: A) => OptionalPromise<B>): (...a: A) => Promise<C>
export function composeAsync<A extends readonly unknown[], B, C, D>(
  cd: (c: C) => OptionalPromise<D>,
  bc: (b: B) => OptionalPromise<C>,
  ab: (...a: A) => OptionalPromise<B>,
): (...a: A) => Promise<D>
export function composeAsync<A extends readonly unknown[], B, C, D, E>(
  de: (d: D) => OptionalPromise<E>,
  cd: (c: C) => OptionalPromise<D>,
  bc: (b: B) => OptionalPromise<C>,
  ab: (...a: A) => OptionalPromise<B>,
): (...a: A) => Promise<E>
export function composeAsync<A extends readonly unknown[], B, C, D, E, F>(
  ef: (e: E) => OptionalPromise<F>,
  de: (d: D) => OptionalPromise<E>,
  cd: (c: C) => OptionalPromise<D>,
  bc: (b: B) => OptionalPromise<C>,
  ab: (...a: A) => OptionalPromise<B>,
): (...a: A) => Promise<F>
export function composeAsync<A extends readonly unknown[], B, C, D, E, F, G>(
  fg: (f: F) => OptionalPromise<G>,
  ef: (e: E) => OptionalPromise<F>,
  de: (d: D) => OptionalPromise<E>,
  cd: (c: C) => OptionalPromise<D>,
  bc: (b: B) => OptionalPromise<C>,
  ab: (...a: A) => OptionalPromise<B>,
): (...a: A) => Promise<G>
export function composeAsync<A extends readonly unknown[], B, C, D, E, F, G, H>(
  gh: (g: G) => OptionalPromise<H>,
  fg: (f: F) => OptionalPromise<G>,
  ef: (e: E) => OptionalPromise<F>,
  de: (d: D) => OptionalPromise<E>,
  cd: (c: C) => OptionalPromise<D>,
  bc: (b: B) => OptionalPromise<C>,
  ab: (...a: A) => OptionalPromise<B>,
): (...a: A) => Promise<H>
export function composeAsync<A extends readonly unknown[], B, C, D, E, F, G, H, I>(
  hi: (h: H) => OptionalPromise<I>,
  gh: (g: G) => OptionalPromise<H>,
  fg: (f: F) => OptionalPromise<G>,
  ef: (e: E) => OptionalPromise<F>,
  de: (d: D) => OptionalPromise<E>,
  cd: (c: C) => OptionalPromise<D>,
  bc: (b: B) => OptionalPromise<C>,
  ab: (...a: A) => OptionalPromise<B>,
): (...a: A) => Promise<I>
export function composeAsync<A extends readonly unknown[], B, C, D, E, F, G, H, I, J>(
  ij: (i: I) => OptionalPromise<J>,
  hi: (h: H) => OptionalPromise<I>,
  gh: (g: G) => OptionalPromise<H>,
  fg: (f: F) => OptionalPromise<G>,
  ef: (e: E) => OptionalPromise<F>,
  de: (d: D) => OptionalPromise<E>,
  cd: (c: C) => OptionalPromise<D>,
  bc: (b: B) => OptionalPromise<C>,
  ab: (...a: A) => OptionalPromise<B>,
): (...a: A) => Promise<J>

export function composeAsync(...fns: any[]) {
  return (...x: any[]) =>
    fns.reduceRight(async (acc: any, cur: any, index: number) => (index === fns.length-1 ? acc(...x) : cur(await acc)), fns[fns.length-1])
}
