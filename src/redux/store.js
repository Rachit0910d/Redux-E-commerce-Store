import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slice.js";
import productsReducer from "./productSlice.js"

const store = configureStore({
    reducer:{
        cart: cartReducer,
        Products:productsReducer
    }
})

export default store;