import React from 'react';
import MySelf from './MySelf';
import Friend from './Friend';

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
            {
                name==='Bob' &&<Friend></Friend>
            }

        </div>
    );
};

export default Cousin;