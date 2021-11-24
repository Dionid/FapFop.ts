

export const safeGuard = (arg: never) => {
  throw new Error(`Not all cases been captured in switch ${arg}`)
}

export const Switch = {
  safeGuard,
}
