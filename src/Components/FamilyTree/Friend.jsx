import React, { use } from 'react';
import { MoneyContext } from './Family';

const Friend = () => {
    const [money,setMoney]=use(MoneyContext)
    return (
        <div>
            <h4>Leo</h4>
            <p>Received:{money}</p>
        </div>
    );
};

export default Friend;