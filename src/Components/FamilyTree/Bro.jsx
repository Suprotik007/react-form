import React,{use} from 'react';
import { MoneyContext } from './Family';

const Bro = () => {
    const[money,setMoney]=use(MoneyContext)
    return (
        <div>
            <h4>Brother</h4>
            <button onClick={()=>setMoney(money+1000)}>Add 1000tk</button>
        </div>
    );
};

export default Bro;