import React from "react";
import PropTypes from "prop-types";

const Tab = ({ id, value, className, type, handleClick }) => (
  <p
    className={className}
    id={id}
    type={type}
    onClick={handleClick}
    value = {value}
  ><b id={id}>{value}</b></p>
);
Tab.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func
};

export default Tab;
