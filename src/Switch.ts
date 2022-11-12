export const safeGuard = (arg: never) => {
  throw new Error(`Not all cases been captured in switch ${arg}`)
}

export const safeGuardE = (_: never, err: Error) => {
  throw err
}

export const Switch = {
  safeGuard,
  safeGuardE
}
