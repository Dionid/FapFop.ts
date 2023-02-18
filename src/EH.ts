export const returnOnThrow = <Args extends any[], R>(fn: (...args: Args) => Promise<R>) => {
  return async (...args: Args): Promise<R | Error> => {
    try {
      return await fn(...args)
    } catch (err) {
      if (err instanceof Error) {
        return err
      }
      throw err
    }
  }
}

export const throwOnError = <Args extends any[], R>(fn: (...args: Args) => Promise<R>) => {
  return async (...args: Args): Promise<R> => {
    const res = await fn(...args)

    if (res instanceof Error) {
      throw res
    }

    return res
  }
}

export const throwOnUndefined = <Args extends any[], R>(
  fn: (...args: Args) => Promise<R | undefined>,
  error: Error = new Error(`Result is undefined`)
) => {
  return async (...args: Args): Promise<R> => {
    const res = await fn(...args)

    if (res === undefined) {
      throw error
    }

    return res
  }
}

export const EH = {
  returnOnThrow,
  throwOnError
}
