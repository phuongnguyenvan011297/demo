import React, { useState } from "react";
import PropTypes from "prop-types";

export const Pagination = ({ count }) => {
  const [focus, setFocus] = useState(1);

  const handleClick = (index) => {
    setFocus(index + 1);
  };

  return (
    <div className="flex justify-center">
      {Array.from(new Array(count)).map((item, index) => {
        return (
          <div
            key={index}
            className={[
              "w-7 h-7  rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-300 mx-3",
              `${index+1 === focus ? "bg-slate-300" : ""}`,
            ].join(" ")}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
};

Pagination.defaultProps = {
  count: 5,
};
