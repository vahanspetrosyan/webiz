import { type ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode
  color?: 'primary' | 'secondary' | 'disabled' | 'link'
  size?: 'small' | 'regular' | 'large'
  mode?: 'outline' | 'contained' | 'link'
  rounded?: boolean
  loading?: boolean
  disabled?: boolean
  onClick?: () => any
  className?: string
  id?: string
  name?: string
  type?: 'submit' | 'button' | 'reset'
  tabIndex?: number | undefined
  href?: string
  target?: string
}
