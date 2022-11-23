import React from "react";
import "./SingleItem.css";
import mug from '../Images/mug.jpg'
import { useSelector } from "react-redux";
import { useDispatch, connect } from "react-redux";
import { addToCart } from "../../redux/shopping/shopping_actions";

const SingleItem = ({ productOBJ }) => {
    // const productsArray = useSelector(state => state.shop.currentItem);
    const dispatch = useDispatch();

    return (
        <>
            {
                // productsArray.map(productOBJ =>
                < div className="singleItem" key={productOBJ.id}>
                    <img className="singleItem__image" src={productOBJ.img} alt={""} />
                    <div className="singleItem__details">
                        <p className="details__title">{productOBJ.title}</p>
                        <p className="details__description">{productOBJ.desc}</p>
                        <p className="details__price">${productOBJ.price}</p>
                        <button className="details__addBtn" onClick={() => { dispatch(addToCart(productOBJ.id)) }}>Add To Cart</button>
                    </div>
                </ div>
                // )
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        productOBJ: state.shop.currentItem,
    }
}
export default connect(mapStateToProps)(SingleItem);
