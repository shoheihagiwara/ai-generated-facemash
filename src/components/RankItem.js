import React from 'react';
const images = require.context('../assets', true);

const RankItem = ({ id, score }) => {
    return (
        <div className="dt grow">
            <img
                alt={`face ID ${id}`}
                src={images(`./${id}.jpg`)}
                className="dtc db br-100 w4 h4 grow shadow-5" />
            <div className="dtc v-mid pl3">
                <h1 className="fw4 lh-title black mv0">{score} Points</h1>
            </div>
        </div>
    );
}

export default RankItem;