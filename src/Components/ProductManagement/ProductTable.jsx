import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Products:-{products.length}</h3>
            <table style={{border:'2px solid yellow'}}>
                <thead style={{borderBottom:'2px solid red'}}>
                <tr>
                    <th>No.</th>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        products.map((products,index)=><tr key={index}>
                            <td>{index+1}</td>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.quantity}</td>
                            <td></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;