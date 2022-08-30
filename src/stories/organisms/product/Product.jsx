import React from 'react';
import PropTypes from 'prop-types';
import { Img } from '../../atoms/img/Img';
import { Title } from '../../atoms/title/Title';


export const Product = ({info, url, price, onClick})=> {
  return (
    <div className='m-4 cursor-pointer' onClick={onClick}>
      <Img url={url}/>
      <Title label={info} />
      <Title label={price} size='small' />
    </div>
  );
}

Product.propTypes = {
  url: PropTypes.string,
  info: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func,
};

Product.defaultProps = {
  url: 'http://placekitten.com/200/200',
  info: 'Meo',
  price: '3000000',
  onClick: undefined
}