import { configureStore } from "@reduxjs/toolkit";
import ShowCart from "./Show";
import cartSlice from './Cart'
const store = configureStore({
    reducer : {
        showCart : ShowCart,
        cart : cartSlice
    }
})
export default store;