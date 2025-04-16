import React from 'react';
import MySelf from './MySelf';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h4>{name}</h4>
            {
                name==='Rock' && <MySelf asset={asset}></MySelf>
            }
            {
                name==='Millie' &&<MySelf asset={asset}></MySelf>
            }

        </div>
    );
};

export default Cousin;