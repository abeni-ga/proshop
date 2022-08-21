import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart: (state,payload) => {
      state.cartItems = payload
      
    },
    removeFromCart: (state) => {
      
    },
  },
})

export const {addToCart,removeFromCart } = cartItemsSlice.actions

export default cartItemsSlice.reducer