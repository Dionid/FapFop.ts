import { WaitGroup } from './wait-group'

describe('WaitGroup', () => {
  it('should succed', async () => {
    const wg = WaitGroup.new()

    wg.add()
    wg.add()

    setTimeout(() => {
      wg.done()
      wg.done()
    }, 500)

    await wg.wait()
  })

  it('should succed with 2', async () => {
    const wg = WaitGroup.new(2)

    setTimeout(() => {
      wg.done()
      wg.done()
    }, 500)

    await wg.wait()
  })
})
