export const throwOnUndefined = <T>(value: T | undefined, error: Error = new Error(`Result is undefined`)): T => {
  if (value === undefined) {
    throw error
  }

  return value
}

export const throwOnError = <T>(value: T, mapper?: (prevErr: Error) => Error): Exclude<T, Error> => {
  if (value instanceof Error) {
    throw mapper ? mapper(value) : value
  }

  return value as Exclude<T, Error>
}

export const throwOnErrorC =
  (fn?: (prevErr: Error) => Error) =>
  <T>(value: T): Exclude<T, Error> => {
    if (value instanceof Error) {
      throw fn ? fn(value) : value
    }

    return value as Exclude<T, Error>
  }

export function returnOnThrow<R>(callback: () => R): R | Error
export function returnOnThrow<R>(callback: () => Promise<R>): Promise<R | Error>
export function returnOnThrow<R>(callback: () => R | Promise<R>): R | Error | Promise<R | Error> {
  try {
    const res = callback()

    if (res instanceof Promise) {
      return res.catch((err) => {
        if (err instanceof Error) {
          return err
        }
        throw err
      })
    }

    return res
  } catch (err) {
    if (err instanceof Error) {
      return err
    }
    throw err
  }
}

export function rethrow<R>(fn: () => R, isInitialType: (e: any) => boolean, newType: (e: any) => any): R
export function rethrow<R>(
  fn: () => Promise<R>,
  isInitialType: (e: any) => boolean,
  newType: (e: any) => any
): Promise<R>
export function rethrow<R>(
  fn: () => Promise<R> | R,
  isInitialType: (e: any) => boolean,
  newType: (e: any) => any
): Promise<R> | R {
  try {
    const res = fn()
    if (res instanceof Promise) {
      return res.catch((err) => {
        if (isInitialType(err)) {
          throw newType(err)
        }

        throw err
      })
    }

    return res
  } catch (err) {
    if (isInitialType(err)) {
      throw newType(err)
    }

    throw err
  }
}

export function rethrowC<R>(isInitialType: (e: any) => boolean, newType: (e: any) => any): (fn: () => R) => R
export function rethrowC<R>(
  isInitialType: (e: any) => boolean,
  newType: (e: any) => any
): (fn: () => Promise<R>) => Promise<R>
export function rethrowC(isInitialType: (e: any) => boolean, newType: (e: any) => any) {
  return <R>(fn: () => Promise<R> | R): Promise<R> | R => {
    try {
      const res = fn()
      if (res instanceof Promise) {
        return res.catch((err) => {
          if (isInitialType(err)) {
            throw newType(err)
          }

          throw err
        })
      }

      return res
    } catch (err) {
      if (isInitialType(err)) {
        throw newType(err)
      }

      throw err
    }
  }
}

export const Throw = {
  throwOnUndefined,
  throwOnError,
  throwOnErrorC,
  returnOnThrow,
  rethrow,
  rethrowC
}
