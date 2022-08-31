import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../atoms/button/Button";
import { Title } from "../../atoms/title/Title";
import { Input } from "../../atoms/input/Input";

export const StoryForm = ({ children, label,onClick }) => {
  // const handleClick = () => {
    
  //   const test = Array.from(new Array(children.length)).map((i, index) => {
  //     return {
  //       [children[index].props.children[1].props.placeholder]:
  //         children[index].props.children[1].props.value,
  //     };
  //   });
  //   console.log(test)
  // };
  return (
    <div>
      {children ? (
        children
      ) : (
        <div>
          <Title label="User Name" />
          <Input />
        </div>
      )}
      <br />
      <Button label={label} onClick={onClick} />
    </div>
  );
};

StoryForm.propTypes = {
  label: PropTypes.string,
};

StoryForm.defaultProps = {
  label: "Submit",
};
