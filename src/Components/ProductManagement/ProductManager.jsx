import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManager = () => {

    const[products,fixProducts]=useState([])


    const handleProducts=newProduct=>{
        const newProducts=[...products,newProduct]
        fixProducts(newProducts)

    }

    return (
        <div>
            <ProductForm handleProducts={handleProducts}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManager;