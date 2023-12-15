
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const storeShare = configureStore({
    reducer : {
        cart: cartSlice,
    }
});

export default storeShare;