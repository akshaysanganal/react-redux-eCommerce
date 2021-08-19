import { combineReducers } from "redux";
import { productInCartReducer, productReducer, selectedProductReducer } from "./productReducer";

export const allReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: productInCartReducer,
});
