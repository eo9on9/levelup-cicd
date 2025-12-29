import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('should render', () => {
    const { getByRole } = render(<Button>Click me</Button>)

    getByRole('button', { name: 'Click me' })
  })

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    const { getByRole } = render(<Button onClick={onClick}>Click me</Button>)

    await user.click(getByRole('button', { name: 'Click me' }))

    expect(onClick).toHaveBeenCalled()
  })
})
