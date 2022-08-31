import React from 'react';
import PropTypes from 'prop-types';


export const Notistack = ({content, second})=> {


  return (
    <div className='w-60 text-white font-semibold bg-green-400 py-1.5 px-2.5 fixed left-0 bottom-0'>
      {content}
    </div>
  );
}

Notistack.propTypes = {
  content: PropTypes.string,
};
