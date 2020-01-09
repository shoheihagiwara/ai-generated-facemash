import React from 'react';
let images = require.context('../assets', true);

const Card = ({ name, email, id }) => {
  let image = images(`./${id}.jpg`);
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={image} className='h5' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
