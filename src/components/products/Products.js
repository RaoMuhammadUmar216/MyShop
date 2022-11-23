import React from 'react';
import './products.css';
import Product from './product/Product';
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector((state) => { return state.shop.products });
    // console.log(products);
    return (
        <div div className='product_list' >
            {
                products.map(product =>
                    < Product key={product.id} productData={product} />
                )
            }
        </div >
    )
}

export default Products;