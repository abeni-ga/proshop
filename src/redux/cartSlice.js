import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart: (state,action) => {

        if(state.cartItems.length>0){
const existItem = state.cartItems.find((cartItem)=>
      cartItem._id===action.payload.product._id);
      if(existItem){
        state.cartItems= state.cartItems.map((cartItem)=>{
          return cartItem._id===action.payload.product._id?
          {...cartItem,qty:cartItem.qty+action.payload.qty}:cartItem
        })
      }else{
        state.cartItems = [
          ...state.cartItems,
          {...action.payload.product,qty:action.payload.qty}]
      }
      }else {
        state.cartItems =  [
          {
            ...action.payload.product,
            qty:action.payload.qty
          }
        ];
      }
      
    },
    removeFromCart: (state,action) => {
      state.cartItems = state.cartItems.filter(cartItem=>cartItem._id!==action.payload)
    },
    editQty:(state,action)=>{
      state.cartItems = state.cartItems.map((cartItem)=>{
        if(cartItem._id===action.payload.id){
          return {...cartItem,qty:action.payload.qty}
        }else {
          return cartItem
        }
      })
    }
  },
})

export const {addToCart,removeFromCart,editQty } = cartItemsSlice.actions

export default cartItemsSlice.reducer