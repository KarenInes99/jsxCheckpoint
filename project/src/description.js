import React from 'react';
import product from './product';

function Description() {
  return <p style={{fontStyle:'italic' }}>{product.description}</p>;
}

export default Description;
