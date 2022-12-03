import { WaitGroup } from './WaitGroup'

describe('WaitGroup', () => {
  it('should succed', async () => {
    const wg = WaitGroup.new()

    wg.add()
    wg.add()

    expect(wg._promises.length).toBe(2)

    setTimeout(() => {
      wg.done()
      wg.done()
    }, 500)

    await wg.wait()
  })

  it('should succed with 2', async () => {
    const wg = WaitGroup.new(2)

    expect(wg._promises.length).toBe(2)

    setTimeout(() => {
      wg.done()
      wg.done()
    }, 500)

    await wg.wait()
  })
})
