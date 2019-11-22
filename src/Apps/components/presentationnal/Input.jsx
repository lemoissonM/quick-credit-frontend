import React from "react";
import PropTypes from "prop-types";
import '../../../../public/style/style.css';

const Input = ({ id, value, className, type, name, placeholder, pattern, handleChange, handleClick }) => (
  <input
    className={className}
    id={id}
    type={type}
    name={name}
    placeholder={placeholder}
    pattern ={pattern}
    onChange={handleChange}
    onClick={handleClick}
    value = {value}
  />
);
Input.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func
};

export default Input;
