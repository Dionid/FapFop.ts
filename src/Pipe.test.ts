import { pipe, pipeAsync } from './Pipe'

describe('pipe and pipeAsync', () => {
  const increment = (n: number): number => {
    return n + 1
  }
  const multBy2 = (n: number): number => n * 2
  const sum = (a: number, b: number): number => a + b

  const changeName =
    (name: string) =>
    <O extends { name: string }>(o: O): O => {
      return {
        ...o,
        name
      }
    }

  type User = {
    name: string
    age: number
  }

  const changeUserAge =
    (age: number) =>
    (user: User): User => {
      return {
        ...user,
        age
      }
    }

  describe('pipe', () => {
    it('should return value', () => {
      const increment2 = pipe(increment, increment)

      expect(increment2(0)).toBe(2)
    })
    it('should return in correct order value', () => {
      const multThanInc = pipe(multBy2, increment)
      const incThanMult = pipe(increment, multBy2)

      expect(multThanInc(1)).toBe(3)
      expect(incThanMult(1)).toBe(4)
    })
    it('should take multiple args', () => {
      const sumThanInc = pipe(sum, increment)

      expect(sumThanInc(1, 2)).toBe(4)
    })
    it('should pipe 1 fn', () => {
      const sumComposed = pipe(sum)

      expect(sumComposed(1, 2)).toBe(3)
    })
    it('should work with generics', () => {
      const changeNameToDavid = changeName('David')

      const changeAgeAndNameComposed = pipe(changeUserAge(10), changeNameToDavid)

      const changeNameAndAgeComposed = pipe<User[], User, User>(changeNameToDavid, changeUserAge(10))

      const user: User = {
        name: 'David',
        age: 73
      }

      expect(changeAgeAndNameComposed(user)).toEqual({ name: 'David', age: 10 })
      expect(changeNameAndAgeComposed(user)).toEqual({ name: 'David', age: 10 })
    })
  })

  describe('pipeAsync', () => {
    const sumAsync = async (a: number, b: number) => a + b

    it('should return promise and resolve it', async () => {
      const sumAsyncThanInc = pipeAsync(sumAsync, increment)

      expect(sumAsyncThanInc(1, 2)).toBeInstanceOf(Promise)
      expect(await sumAsyncThanInc(1, 2)).toBe(4)
    })
  })
})
