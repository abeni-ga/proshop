import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart: (state,payload) => {
      state.cartItems= state.cartItems.map((cartItem)=>{
        return cartItem._id===payload.product._id?
        state.cartItems.push({...payload.product,payload.qty}):
        cartItem
      })
    },
    removeFromCart: (state) => {
      
    },
  },
})

export const {addToCart,removeFromCart } = cartItemsSlice.actions

export default cartItemsSlice.reducer