import { configureStore } from "@reduxjs/toolkit";
import ShowCart from "./Show";

const store = configureStore({
    reducer : {
        showCart : ShowCart
    }
})
export default store;