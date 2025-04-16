import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './Family';

const Uncle = () => {
    const [money,setMoney]=use(MoneyContext)
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
            <Cousin name='Bob'></Cousin>
            <Cousin name='Rock'></Cousin>
           
            </section>
            <button onClick={()=>setMoney(money+5000)}>Add 5000tk</button>
        </div>
    );
};

export default Uncle;