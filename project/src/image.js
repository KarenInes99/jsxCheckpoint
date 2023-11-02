import React from 'react';
import product from './product';

function Image() {
  return <img src={product.imageUrl} style={{ width: '100%', height:'270px', borderRadius:'10px' }}/>;
}

export default Image;
