import React from 'react';

const Navigation = ({ page, onRankingClick, onGoSeeFacesClick }) => {
    if (page === 'main') {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={onRankingClick} className='f3 link dim black underline pa3 pointer'>Ranking</p>
            </nav>
        )
        } else {
            return (
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={onGoSeeFacesClick} className='f3 link dim black underline pa3 pointer'>Go See Faces</p>
                </nav>
            )
        }
    }

    export default Navigation;