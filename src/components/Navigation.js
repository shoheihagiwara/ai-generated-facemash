import React from 'react';

const Navigation = ({ page, onRankingClick, onGoSeeFacesClick }) => {
        let text = page === 'main' ? "Ranking": "Go See Faces";
        let onClickFunction = page === 'main' ? onRankingClick: onGoSeeFacesClick;
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={onClickFunction} className='f3 link dim black underline pa3 pointer'>{text}</p>
            </nav>
        )
    }

    export default Navigation;