import React from "react";
import PropTypes from "prop-types";

export const Img = ({ url }) => {
  return (
    <div className="hover:opacity-50">
      <img src={url} alt="test"></img>
    </div>
  );
};

Img.propTypes = {
  url: PropTypes.string,
};

Img.defaultProps = {
  url: "http://placekitten.com/200/200",
};
