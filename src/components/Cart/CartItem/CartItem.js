import React, { useState } from "react";
import "./CartItem.css";
import deleteBTN from '../../Images/deleteBTN.png'
// import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { adjustQTY, removeFromCart } from '../../../redux/shopping/shopping_actions';


// const CartItem = ({ productData, removeFromCart, adjustQTY }) => {
const CartItem = ({ productData }) => {
  const [input, setInput] = useState(productData.qty);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustQTY(productData.id, e.target.value));
  }
  return (
    <div className="cartItem">
      <img className="cartItem__image" src={productData.img} alt="" />
      <div className="cartItem__details">
        <p className="details__title">{productData.title}</p>
        <p className="details__desc">{productData.desc}</p>
        <p className="details__price">${productData.price}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <label htmlFor="qty" style={{ fontWeight: "bold" }}>Qty</label>
          <input
            style={{ border: "1.5px solid gray" }}
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button className="actions__deleteItemBtn" onClick={() => dispatch(removeFromCart(productData.id))}>
          <img src={deleteBTN} alt="delte Button" />
        </button>
      </div>
    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//     adjustQTY: (id, value) => dispatch(adjustQTY(id, value))
//   }
// }
// export default connect(null, mapDispatchToProps)(CartItem);
export default CartItem;
