import React from 'react';

const Button = ({children,onClick,style,className}) => {
  return (
      <button className={`btn ${className}`} style={style} onClick={onClick}>
          {children}
      </button>
  )
};

export default Button;
