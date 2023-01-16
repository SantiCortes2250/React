import React, {useContext} from 'react';
//import link
import { link } from 'react-router-dom';
//import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({ product }) => {

  const {title} = product;
  
  return <div><p>{title}</p></div>;
};

export default Product;
