export type Deferred<D, E = Error> = (() => Promise<D>) & {
  resolve: (value: D | PromiseLike<D>) => void
  reject: (value: E | PromiseLike<E>) => void
}

export const Deferred = <D, E extends Error = Error>(timeout?: number): Deferred<D, E> => {
  const deferred = (() => {
    return promise
  }) as Deferred<D>

  const promise = new Promise<D>((res, rej) => {
    deferred.reject = rej
    deferred.resolve = res

    if (timeout) {
      setTimeout(() => {
        rej()
      }, timeout)
    }
  })

  return deferred
}
