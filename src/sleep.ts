const run = (ms: number, options: { unref: boolean } = { unref: false }) => {
  return new Promise((res) => {
    const { unref } = options

    if (unref) {
      return setTimeout(res, ms).unref()
    } else {
      return setTimeout(res, ms)
    }
  })
}

const error = (ms: number, error?: Error, options: { unref: boolean } = { unref: false }) => {
  return new Promise((_, rej) => {
    const { unref } = options

    if (unref) {
        return setTimeout(() => {
        rej(error)
      }, ms).unref()
    } else {
        return setTimeout(() => {
        rej(error)
      }, ms)
    }
  })
}

export const Sleep = {
  run,
  error
}
