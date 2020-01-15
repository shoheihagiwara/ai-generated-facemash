import React from 'react';
const images = require.context('../assets', true);

const FaceCard = () => {
    // TODO: implement using DB.
    const id = Math.floor((Math.random() * 100) % 59) + 1;
    return (
        <img alt={`face id=${id}`} src={images(`./${id}.jpg`)}></img>
    );
}

export default FaceCard;