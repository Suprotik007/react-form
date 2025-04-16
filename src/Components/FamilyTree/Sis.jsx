import React, { useContext } from 'react';
import { AssetContext } from './Family';
const Sis = () => {
    const assets=useContext(AssetContext)
    console.log('asset-',assets);
    
    return (
        <div>
            <h3>Sister</h3>
            <p>{assets}</p>
        </div>
    );
};

export default Sis;