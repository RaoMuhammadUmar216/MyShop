import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartArray = useSelector(state => state.shop.cart);
  const [itemQTY, setItemQTY] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    let qty = 0;
    let price = 0;
    cartArray.forEach((obj) => {
      qty += obj.qty;
      price += obj.price * obj.qty;
    })
    setItemQTY(qty);
    setTotalPrice(price);
  }, [cartArray, itemQTY, totalPrice, setItemQTY, setTotalPrice])

  return (
    <div className="cart">
      <div className="cart__items">
        {
          cartArray.map(obj => <CartItem key={obj.id} productData={obj} />)
        }
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span style={{ fontWeight: "bold" }}>TOTAL: {itemQTY}{" "}Items</span>
          <span>${totalPrice}</span>
        </div>
        <button className="summary__checkoutBtn">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};


export default Cart;
