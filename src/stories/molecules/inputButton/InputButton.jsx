import React from "react";
import PropTypes from "prop-types";
import { Input } from "../../atoms/input/Input";
import { Button } from "../../atoms/button/Button";

export const InputButton = ({placeholder, value, onChange}) => {
  return (
    <div>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button label="Button" onClick={() => {}} primary  />
    </div>
  );
};

InputButton.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputButton.defaultProps = {
  placeholder: 'placeholder',
  value:'',
  onChange: undefined
}
