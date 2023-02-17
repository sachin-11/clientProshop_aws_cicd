import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import { userLoginReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'

import thunk from "redux-thunk";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null 

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const preloadedState = {};

const store = configureStore({
  reducer,
  initialState,
  preloadedState,
  middleware: [thunk],
});

export default store;
