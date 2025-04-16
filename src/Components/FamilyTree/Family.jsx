import React from 'react';
import Grandpa  from './Grandpa';
import './familytree.css'
const Family = () => {
    const asset='gold'
    return (
        <div className='family-tree'>
        <h2>family tree</h2>
        <Grandpa asset={asset}></Grandpa>
    </div>
    );
};

export default Family;