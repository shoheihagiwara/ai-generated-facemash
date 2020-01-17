import React from 'react';
import FaceCard from './FaceCard'

const FaceComparison = ({onFaceClick}) => {
    return (
        <div  style={{ display: 'flex', justifyContent: 'center', flex: '1 0 auto', flexWrap: 'wrap'}}>
        {/* <div  style={{ flex: '1'}}> */}
            <FaceCard onFaceClick={onFaceClick} />
            <FaceCard onFaceClick={onFaceClick} />
        </div>
    );
}

export default FaceComparison;