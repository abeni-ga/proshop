import { createSlice } from "@reduxjs/toolkit";

const cartItems = JSON.parse(localStorage.getItem("cartItems"));

const initialState = {
  cartItems: cartItems ? cartItems : [],
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    listCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action) => {
      state.cartItems = action.payload;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload
      );
    },
    editQty: (state, action) => {
      state.cartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload.id) {
          return { ...cartItem, ordered_quantity: action.payload.qty };
        } else {
          return cartItem;
        }
      });
    },
  },
});

export const { listCartItems, addToCart, removeFromCart, editQty } =
  cartItemsSlice.actions;

export default cartItemsSlice.reducer;
