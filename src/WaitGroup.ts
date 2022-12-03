import { Deferred } from './Deferred'

export const WaitGroup = {
  new: (val: number = 0) => {
    const promises: Array<Deferred<boolean>> = []

    for (let i = 0; i < val; i++) {
      promises.push(Deferred<boolean>())
    }

    let cursor = 0

    return {
      _promises: promises,
      add: (addVal: number = 1) => {
        for (let i = 0; i < addVal; i++) {
          promises.push(Deferred<boolean>())
        }
      },
      done: () => {
        const promise = promises[cursor]

        if (!promise) {
          throw new Error(`No promise found`)
        }

        promise.resolve(true)
        cursor += 1
      },
      wait: () => {
        return Promise.all(promises.map((df) => df()))
      }
    }
  }
}
