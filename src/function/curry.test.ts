import { curry, curry2 } from './curry'

describe("curry", () => {
  type User = {
    name: string
  }

  const changeUserName = (name: string, user: User): User => {
    return {
      ...user,
      name,
    }
  }

  it('should curry predefined fns', () => {
    const changeUserNameC = curry(changeUserName)

    expect(changeUserNameC("David")({ name: "John" })).toEqual({name: "David"})
  })

  it('should curry defined inside fn', () => {
    const changeUserNameC = curry((name: string, user: User): User => {
      return {
        ...user,
        name,
      }
    })

    expect(changeUserNameC("David")({ name: "John" })).toEqual({name: "David"})
  })


  it('should curry defined inside fn', () => {
    type UserS = {
      age: number
      name: string
    }

    const changeUserNameC = curry((name: string, age: number, user: UserS): UserS => {
      return {
        ...user,
        age,
        name,
      }
    })

    const changeUserNameC2 = curry2((name: string, age: number, user: UserS): UserS => {
      return {
        ...user,
        age,
        name,
      }
    })

    expect(changeUserNameC("David")(10)({ name: "John", age: 20 })).toEqual({name: "David", age: 10})
    expect(changeUserNameC2("David")(10, { name: "John", age: 20 })).toEqual({name: "David", age: 10})
  })



  describe("with generics", () => {
    const changeUserNameG = <U extends User>(name: string, user: U): U => {
      return {
        ...user,
        name,
      }
    }

    it('should curry predefined fns', () => {
      const changeUserNameC = curry(changeUserNameG)

      const changedUser: User & { test: string } = { name: "John", test: "123" }

      expect(changeUserNameC("David")(changedUser)).toEqual({name: "David", test: "123"})
    })

    it('should curry defined inside fn', () => {
      const changeUserNameC = curry(<U extends User>(name: string, user: U): User => {
        return {
          ...user,
          name,
        }
      })

      // @ts-ignore
      const changeUserNameC2 = curry2(<U extends User>(name: string, age: number, user: U): User => {
        return {
          ...user,
          name,
        }
      })

      const changedUser: User & { test: string } = { name: "John", test: "123" }

      expect(changeUserNameC("David")(changedUser)).toEqual({name: "David", test: "123"})
      expect(changeUserNameC2("David")(10, changedUser)).toEqual({name: "David", test: "123"})
    })
  })
})
