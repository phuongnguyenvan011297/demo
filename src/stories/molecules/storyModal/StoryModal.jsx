import React from "react";
import PropTypes from "prop-types";
import { Title } from "../../atoms/title/Title";
import { Button } from "../../atoms/button/Button";
import { Underline } from "../../atoms/underline/Underline";
import "./storyModal.css";

export const StoryModal = ({label, isOpen, onClose, children }) => {
  return (
    <>
    
    <div className={isOpen ? `storybook-modal` : `storybook-modal--hide`}>
      <div className="bg-white  py-7 px-10 w-125">
        <div className="storybook-modal-content__head">
          <Title label={label} />
          <Button label="x" onClick={onClose} />
        </div>
        <Underline />
        
          {children}
        
      </div>
    </div>
    
    </>
  );
};

StoryModal.propTypes = {
  isOpen: PropTypes.bool,
};

StoryModal.defaultProps = {
  isOpen: true,
  children: ' Lorem Ipsum is simply dummy text'
};
