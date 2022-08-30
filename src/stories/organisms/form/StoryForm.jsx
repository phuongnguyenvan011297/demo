import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../atoms/button/Button';
import { Title } from '../../atoms/title/Title';
import { Input } from '../../atoms/input/Input';


export const StoryForm = ({children, label})=> {
  return (
    <div>
      {children?children:<div>
        <Title label='User Name' />
        <Input  />
        </div>}
      <br/> 
      <Button label={label} />
    </div>
  );
}

StoryForm.propTypes = {
  label: PropTypes.string,
};

StoryForm.defaultProps = {
  label: 'Submit'
}