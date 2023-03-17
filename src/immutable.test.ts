import { Immutable, ImmutableArray, Mutable } from './immutable'

describe('Immutable', () => {
  it('', () => {
    type User = Immutable<{
      email: string
      password: string
    }>

    const someFn = (user: User) => {
      // @ts-expect-error: must be because it is immutable
      user.email = 'new@mail.com'
    }

    const someFn2 = (user: Mutable<User>) => {
      user.email = 'new@mail.com'
    }

    const someFn3 = (user: { email: string }) => {
      user.email = 'new@mail.com'
    }

    const user: User = {
      email: 'mail@test.com',
      password: 'qwerty'
    }

    someFn(user)
    someFn2(user)
    someFn3(user)
  })

  it('', () => {
    type Names = ImmutableArray<string>

    const names = ['David', 'John']

    const someFn3 = (names: Names) => {
      // @ts-expect-error: must be because it is immutable
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      names.push('Sam')
      // @ts-expect-error: must be because it is immutable
      names[0] = 'Not David'
    }

    const someFn4 = (names: Mutable<Names>) => {
      names.push('Sam')
      names[0] = 'Not David'
    }

    someFn3(names)
    someFn4(names)

    type MutableNames = Array<string>
    const mutableNames: MutableNames = ['David', 'John']

    someFn3(mutableNames)
    someFn4(mutableNames)
  })
})
