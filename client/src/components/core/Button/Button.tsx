import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';
import { type ButtonProps } from './Button.props';

const Button: React.FC<ButtonProps> = ({
  children = null,
  onClick,
  mode = 'contained',
  loading = false,
  disabled = false,
  rounded = false,
  color = 'primary',
  size = 'regular',
  className = '',
  id = '',
  name = '',
  type = 'button',
  tabIndex = undefined,
  href,
  ...rest
}) => {
  const buttonClass = cx(styles.btn, className, {
    [styles.disabled]: disabled || color === 'disabled',
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.link]: color === 'link',
    [styles.small]: size === 'small',
    [styles.large]: size === 'large'
  });

  return (
    <>
      {
        href
          ? <a
          className={buttonClass}
          onClick={onClick}
          id={id}
          href={href}
          {...rest}
        >
          {children}
        </a>
          : <button
          type={type}
          className={buttonClass}
          disabled={disabled}
          onClick={onClick}
          id={id}
          name={name}
          tabIndex={tabIndex}
          {...rest}
        >
          {children}
        </button>
      }
    </>

  );
};

export default Button;
