import React from 'react';

const Input = ({ className, onChange, type, value,placeholder,style}) => {
  return (
        <input className={`input ${className}` } type={type}  onChange={onChange} value={value} placeholder={placeholder} style={style} />
  )
};

export default Input;
