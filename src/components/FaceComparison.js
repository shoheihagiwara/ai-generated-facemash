import React from 'react';
import FaceCard from './FaceCard'

const FaceComparison = ({onFaceClick}) => {
    return (
        <div  style={{ display: 'flex', justifyContent: 'center'}}>
            <FaceCard onFaceClick={onFaceClick} />
            <FaceCard onFaceClick={onFaceClick} />
        </div>
    );
}

export default FaceComparison;