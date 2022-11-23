import * as actionTypes from './shopping_types';
import mug from '../../components/Images/mug.jpg';
import book from '../../components/Images/book.jpg';
import puzzle from '../../components/Images/puzzle.jpg';


const INITIAL_STATE = {
    products: [ 
        {   
            title: "Hydro Flask Mug - Stainless Steel",
            desc: "$93.82 Shipping & Import Fees Deposit to Pakistan Details Available at a lower price from other sellers that may not offer free Prime shipping.",
            price: 20,
            img: mug,
            id: 1

        },
        {
            title: "Confidence Man",
            desc: "“Will be a primary source about the most vexing president in American history for years to come.” - Joe Klein, The New York Times",
            price: 30,
            img: book,
            id: 2
        },
        {
            title: "The Rubik's Cube",
            desc: "The Rubik's Cube is the world's best-known puzzle, a magical object that has baffled and fascinated the world for more than forty years.",
            price: 15,
            img: puzzle,
            id: 3
        }

    ], // {id, title, desc, price, img}
    cart: [], // {id, title, desc, price, img, qty}
    currentItem: null,
    // currentItem: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // get the product data from products array.
            const productData = state.products.find(product => product.id === action.payload.id);
            // check if item is in cart already.
            const inCart = state.cart.find(product => product.id === action.payload.id) ? true : false;

            return {
                ...state,
                cart: inCart ?
                    state.cart.map(
                        product => product.id === action.payload.id ?
                            { ...product, qty: product.qty + 1 } : product) :
                    [...state.cart, { ...productData, qty: 1 }]
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((product) =>
                    product.id === action.payload.id ?
                        { ...product, qty: +action.payload.qty } :
                        product
                )
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                // currentItem: [action.payload]
                currentItem: action.payload
            };
        default:
            return state
    }
}

export default shopReducer; 