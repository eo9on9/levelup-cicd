import { add } from './add'

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(1, 2)).not.toBe(4)
  })
  it('should add two numbers: failed', () => {
    expect(add(1, 2)).toBe(4)
  })
})
