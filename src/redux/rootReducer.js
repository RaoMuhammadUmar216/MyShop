import { combineReducers } from "redux";
import shopReducer from './shopping/shopping_reducer';

const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;