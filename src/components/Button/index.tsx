import React from 'react';
import './button.scss';
import classname from '../../assets/utils/classname';

const Button = (props: any) => {
  const { type, primary, secondary, className, children, onClick } = props

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classname({ 
        'button': true,
        'primary': primary,
        'secondary': secondary
      })} ${className}`}>
        {children}
    </button>
  )
}

export default Button;
