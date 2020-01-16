import React from 'react';
const images = require.context('../assets', true);

const FaceCard = ({ onFaceClick }) => {
    // TODO: implement using DB.
    const id = Math.floor((Math.random() * 100) % 59) + 1;
    return (
        <img
            style={{margin: '50px'}}
            alt={`face id=${id}`}
            src={images(`./${id}.jpg`)}
            className={"grow shadow-5"}
            onClick={() => { onFaceClick(id) }} 
            height="400px" width="auto">
        </img>
    );
}

export default FaceCard;