import React, { createContext, useState } from 'react';
import Grandpa  from './Grandpa';
import './familytree.css'

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext=createContext('')
export const MoneyContext=createContext('')
const Family =() => {
    const[money,setMoney]=useState(0)

    const asset='gold'
    const assets="$$$"
    return (
        <div className='family-tree'>
        <h2>family tree</h2>
        <h4>Total Money:-{money}</h4>
       
        
        <MoneyContext value={[money,setMoney]}>
        <AssetContext.Provider value={assets} > <Grandpa asset={asset}></Grandpa></AssetContext.Provider>
        </MoneyContext>
    </div>
    );
};

export default Family;