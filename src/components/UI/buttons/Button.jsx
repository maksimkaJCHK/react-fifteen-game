import React from 'react';
import './button.scss';

const Button = ({
  children,
  disabled,
  classNames = [],
  onClick = (x) => x
}) => {
  return (
    <button
      disabled = { disabled }
      className = { `button ${classNames.join(' ')}` }
      onClick = { onClick }
    >
      { children }
    </button>
  )
}

export default Button;