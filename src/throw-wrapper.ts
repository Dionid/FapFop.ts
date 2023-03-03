import { Throw } from './throw'

export function throwOnUndefined<Args extends any[], R>(
  fn: (...args: Args) => R | undefined,
  error?: Error
): (...args: Args) => R
export function throwOnUndefined<Args extends any[], R>(
  fn: (...args: Args) => Promise<R | undefined>,
  error?: Error
): (...args: Args) => Promise<R>
export function throwOnUndefined<Args extends any[], R>(
  fn: (...args: Args) => R | undefined | Promise<R | undefined>,
  error: Error = new Error(`Result is undefined`)
) {
  return (...args: Args) => {
    const result = fn(...args)

    if (result instanceof Promise) {
      return result.then((data) => {
        return Throw.throwOnUndefined(data, error)
      })
    }

    return Throw.throwOnUndefined(result, error)
  }
}

export function throwOnError<Args extends any[], R>(
  fn: (...args: Args) => R,
  mapper?: (prevErr: Error) => Error
): (...args: Args) => R
export function throwOnError<Args extends any[], R>(
  fn: (...args: Args) => Promise<R>,
  mapper?: (prevErr: Error) => Error
): (...args: Args) => Promise<R>
export function throwOnError<Args extends any[], R>(
  fn: (...args: Args) => R | Promise<R>,
  mapper?: (prevErr: Error) => Error
) {
  return (...args: Args) => {
    const result = fn(...args)

    if (result instanceof Promise) {
      return result.then((data) => {
        return Throw.throwOnError(data, mapper)
      })
    }

    return Throw.throwOnError(result, mapper)
  }
}

export function throwOnErrorC(
  mapper: (prevErr: Error) => Error
): <Args extends any[], R>(fn: (...args: Args) => Promise<R>) => (...args: Args) => Promise<R>
export function throwOnErrorC(
  mapper: (prevErr: Error) => Error
): <Args extends any[], R>(fn: (...args: Args) => R) => (...args: Args) => R
export function throwOnErrorC(mapper: (prevErr: Error) => Error) {
  return <Args extends any[], R>(fn: (...args: Args) => R) => {
    return throwOnError(fn, mapper)
  }
}

export function returnOnThrow<Args extends any[], R>(fn: (...args: Args) => R): (...args: Args) => R | Error
export function returnOnThrow<Args extends any[], R>(
  fn: (...args: Args) => Promise<R>
): (...args: Args) => Promise<R | Error>
export function returnOnThrow<Args extends any[], R>(fn: (...args: Args) => Promise<R>) {
  return (...args: Args) => {
    return Throw.returnOnThrow(() => fn(...args))
  }
}

export function rethrow<Args extends any[], R>(
  fn: (...args: Args) => Promise<R>,
  isInitialType: (e: any) => boolean,
  newType: (e: any) => any
) {
  return (...args: Args) => {
    return Throw.rethrow(() => fn(...args), isInitialType, newType)
  }
}

export function rethrowC(isInitialType: (e: any) => boolean, newType: (e: any) => any) {
  return <Args extends any[], R>(fn: (...args: Args) => Promise<R>) => {
    return (...args: Args) => {
      return Throw.rethrow(() => fn(...args), isInitialType, newType)
    }
  }
}

export const ThrowWrapper = {
  throwOnUndefined,
  throwOnError,
  throwOnErrorC,
  returnOnThrow,
  rethrow,
  rethrowC
}
