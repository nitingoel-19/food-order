import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items: []
    },
    reducers:{
        addItems: (state , action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {addItems,clearCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;