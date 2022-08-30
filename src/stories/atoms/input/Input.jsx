import React from 'react';
import PropTypes from 'prop-types';
import './input.css'




export const Input = ({ disabled, type, placeholder, value, onChange, ...props })=>{
  return (
    <input
      type={type}
      value={value}
      disabled ={disabled}
      placeholder = {placeholder}
      // className="storybook-input"
      className="py-1 px-1 border-solid border-2 border-neutral-400 rounded-md outline-0"
      onChange={onChange}
      {...props}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};
Input.defaultProps = {
  placeholder: '',
  onChange: undefined,
  disabled: false,
  type: 'text'
}