import React from 'react';
import RankItem from './RankItem';
const images = require.context('../assets', true);

const Ranking = () => {
    return (
        <div>
            {
                Array.from({ length: 60 }, (v, i) => i).map((num) => {
                    return <RankItem id={num + 1}/>
                })
            }
        </div>
    );
}

export default Ranking;