import React from 'react'
import './product.css';
import { Link } from "react-router-dom";
import { addToCart, loadCurrentItem } from '../../../redux/shopping/shopping_actions';
import { useDispatch } from 'react-redux/es/exports';

const Product = ({ productData }) => {

    const dispatch = useDispatch();

    return (
        <div className='product' >
            <img src={productData.img} className='product_size' alt="" />
            <div className='product_desc'>
                <h2>{productData.title}</h2>
                <br />
                <p>{productData.desc}</p>
                <br />
                <h2>${productData.price}</h2>
            </div>
            <div className='list_btn'>
                <Link to={`/product/${productData.id}`} >
                    <button onClick={() => { dispatch(loadCurrentItem(productData)) }}>View Item</button>
                </Link>
                <br />
                <button className="add_btn" onClick={() => dispatch(addToCart(productData.id))}>Add To Cart</button>
            </div>
        </div >
    )

}

export default Product