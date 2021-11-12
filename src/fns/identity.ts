export const identity =
  <Arg>(handler: (arg: Arg) => any) =>
  (arg: Arg): Arg => {
    handler(arg)

    return arg
  }

export const identityAsync =
  <Arg>(handler: (arg: Arg) => any) =>
  async (arg: Arg): Promise<Arg> => {
    await handler(arg)

    return arg
  }
