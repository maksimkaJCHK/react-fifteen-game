import React from 'react';
import './button.scss';

const Button = ({
  children,
  classNames = [],
  onClick = (x) => x
}) => {
  return (
    <button
      className = { `button ${classNames.join(' ')}` }
      onClick = { onClick }
    >
      { children }
    </button>
  )
}

export default Button;