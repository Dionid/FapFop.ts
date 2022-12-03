export type Deferred<D> = (() => Promise<D>) & {
  resolve: (value: D | PromiseLike<D>) => void
  reject: (value: D | PromiseLike<D>) => void
}

export const Deferred = <D>(timeout?: number): Deferred<D> => {
  const deferred = (() => {
    return promise
  }) as Deferred<D>

  const promise: Promise<D> = new Promise((res, rej) => {
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
