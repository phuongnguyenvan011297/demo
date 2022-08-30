import React from 'react';
import PropTypes from 'prop-types';
import './title.css'


export const Title = ({label, size})=> {
  return (
    <div className={[`storybook-title--${size} storybook-title w-32`]}>
      {label}
    </div>
  );
}

Title.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Title.defaultProps = {
  label: 'Heading',
  size: 'medium'
}