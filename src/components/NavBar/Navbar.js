import React, { useState, useEffect } from 'react';
import cartIcon from '../Images/cart.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Navbar = () => {
  const cart = useSelector(state => state.shop.cart);
  // const qty = count.map(counter => counter.qty);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let qty = 0;
    cart.forEach(count => {
      qty += count.qty
    });
    setCartCount(qty)
  }, [cart, cartCount])

  return (
    <div className="header">
      <Link to='/'>
        <h2 className='title'>Redux Shopping Cart</h2>
      </Link>
      <Link to='/cart' style={{ textDecoration: "none" }}>
        <div className='add_to_cart'>
          {/* <h3 className='cart'>Cart</h3> */}
          <img src={cartIcon} className='baskit' alt="" />
          <h3 className='cart_counte'>{cartCount}</h3>
        </div>
      </Link>
    </div >
  )
}

export default Navbar