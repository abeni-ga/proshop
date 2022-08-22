import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      // state.cartItems = action.payload

        if(state.cartItems.length>0){
            console.log("not empty")
const existItem = state.cartItems.find((cartItem)=>
      cartItem._id===action.payload.product._id);
      if(existItem){
        console.log('not empty and item already exist');
        state.cartItems= action.payload.cartItems.map((cartItem)=>{
          return cartItem._id===action.payload.product._id?
          {...cartItem,qty:cartItem.qty+action.payload.qty}:cartItem
        })
      }else{
console.log('not empty and item not exist');
        state.cartItems = [
          ...state.cartItems,
          {...action.payload.product,qty:action.payload.qty}]
      }
      }else {
        console.log('cart is empty')
        state.cartItems =  [{...action.payload.product,qty:action.payload.qty}];
      }
      
    },
    removeFromCart: (state) => {
      
    },
  },
})

export const {addToCart,removeFromCart } = cartItemsSlice.actions

export default cartItemsSlice.reducer