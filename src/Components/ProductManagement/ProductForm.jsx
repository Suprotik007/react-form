import React, { useState } from 'react';

const ProductForm = ({handleProducts}) => {
    const [error,setError]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const price=e.target.price.value
        const quantity=e.target.quantity.value
        // console.log(name,price,quantity);
        const productDetail={
            name,
            price,
            quantity
        }
        if(!error){
            handleProducts(productDetail );
        }
    
    

        if(name.length===0){
            setError('Provide a name')
        }
        else if(price.length===0){
            setError('enter Price')
        }
        else if(quantity.length===0){
            setError('Input quantity')
        }
        else{
            setError('')
        }
        
    }
    return (
        <div>
            <h3>Products</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name'/><br />
                <input type="text" name='price' placeholder='Price'/><br />
                <input type="number" name='quantity' placeholder='Quantity'/><br />

                <input type="submit" value='submit' />
            </form>
            <h4 style={{color:'red'}}>{error}</h4>
        </div>
    );
};

export default ProductForm;