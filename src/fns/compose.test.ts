import { compose, composeAsync } from './compose'

describe('compose and composeAsync:', () => {

  const increment = (n: number): number => {
    return n + 1
  }
  const multBy2 = (n: number): number => n * 2
  const sum = (a: number, b: number): number => a + b

  const changeName = (name: string) => <O extends { name: string}>(o: O): O => {
    return {
      ...o,
      name,
    }
  }

  type User = {
    name: string
    age: number
  }

  const changeUserAge = (age: number) => (user: User): User => {
    return {
      ...user,
      age,
    }
  }

  describe("compose", () => {
    it('should return value', () => {

      const increment2 = compose(
        increment,
        increment,
      )

      expect(increment2(0)).toBe(2)
    })
    it('should return in coorect order value', () => {
      const multThanInc = compose(
        increment,
        multBy2,
      )
      const incThanMult = compose(
        multBy2,
        increment,
      )

      expect(multThanInc(1)).toBe(3)
      expect(incThanMult(1)).toBe(4)
    })
    it('should take multiple args', () => {

      const sumThanInc = compose(
        increment,
        sum,
      )

      expect(sumThanInc(1, 2)).toBe(4)
    })
    it('should compose 1 fn', () => {
      const sumComposed = compose(
        sum,
      )

      expect(sumComposed(1, 2)).toBe(3)
    })
    it('should work with generics', () => {

      const changeNameToIlyia = changeName("Ilay")

      const changeAgeAndNameComposed = compose(
        changeNameToIlyia,
        changeUserAge(10),
      )

      const changeNameAndAgeComposed = compose<User[], User, User>(
        changeUserAge(10),
        changeNameToIlyia,
      )

      const user: User = {
        name: "David",
        age: 73
      }

      expect(changeAgeAndNameComposed(user)).toEqual({name: "Ilay", age: 10})
      expect(changeNameAndAgeComposed(user)).toEqual({name: "Ilay", age: 10})
    })
  })

  describe("composeAsync", () => {
    const sumAsync = async (a: number, b: number) => a + b

    it('should compose', async () => {
      const sumAsyncThanInc = composeAsync(
        increment,
        sumAsync,
      )

      expect(sumAsyncThanInc(1, 2)).toBeInstanceOf(Promise)
      expect(await sumAsyncThanInc(1, 2)).toBe(4)
    })
  })
})
