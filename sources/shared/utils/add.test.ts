import { add } from './add'

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(1, 2)).not.toBe(4)
  })
})
