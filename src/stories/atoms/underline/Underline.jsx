import React from "react";
import PropTypes from "prop-types";
import './underline.css'

export const Underline = ({ backgroundColor }) => {
  return (
    <div
      style={backgroundColor && { backgroundColor }}
      className="storybook-underline"
    ></div>
  );
};

Underline.propTypes = {
  backgroundColor: PropTypes.string,
};

Underline.defaultProps = {
  backgroundColor: "#ccc",
};
