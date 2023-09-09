import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      console.log(payload);
    },
    clearCart: () => {
      console.log('clear cart');
    },
    removeItem: () => {
      console.log('remove item');
    },
    editItem: () => {
      console.log('edit item');
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
