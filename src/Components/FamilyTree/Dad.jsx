import React from 'react';
import MySelf from './MySelf';
import Bro from './Bro';
import Sis from './Sis';

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
            <MySelf asset={asset}></MySelf>
            <Bro></Bro>
            <Sis></Sis>
            </section>
        </div>
    );
};

export default Dad;