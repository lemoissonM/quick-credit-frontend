import React from "react";
import PropTypes from "prop-types";
const getClass = (className, value) => {
  return `${className} ${value.length > 1 ? 'visible' : 'invisible'}`;
};
const Input = ({ value, role, className }) => (
  <p
    className={getClass(className, value)}
    role={role}
  >{value}</p>
);
Input.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default Input;
