import type { PropsWithChildren } from 'react'

interface ButtonProps {
  onClick?: () => void
}

export const Button = ({
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return <button onClick={onClick}>{children}</button>
}
