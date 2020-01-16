import React from 'react';
const images = require.context('../assets', true);

const RankItem = ({id}) => {
    return (
        <div>
            <p>ID: {id}</p>
        </div>
    );
}

export default RankItem;