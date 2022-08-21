import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.styles.scss';
import products from '../../products';
import Rating from '../../components/Rating/Rating.component';
import { useSelector,useDispatch } from 'react-redux';
import {addToCart} from '../../redux/cartSlice.js';
const ProductDetails = ()=>{
    const {id} = useParams();
    const {qty,setQty} = useState(1);
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    const product = products.find((p)=>p._id===id);
    const dispatch = useDispatch();
    const addToCartHandler = ()=>{
        let newCartItems ;
        if(cartItems.length>0){
            console.log("not empty")
const existItem = cartItems.find((cartItem)=>
      cartItem._id===product._id);
      if(existItem){
        console.log('not empty and item already exist');
        newCartItems= cartItems.map((cartItem)=>{
          return cartItem._id===product._id?
          {...cartItem,qty:cartItem.qty+qty}:cartItem
        })
      }else{
console.log('not empty and item not exist');
        newCartItems = [
          ...cartItems,
          {...product,qty:qty}]
      }
      }else {
        console.log('cart is empty')
        newCartItems =  [product];
      }
      console.log(newCartItems);
        dispatch(addToCart([...newCartItems]));
    }

return(
    <div className="product-details-container-parent">
    <div className='product-details-container'>
    <button>
    Go Back
    </button>
    <div className='product-details'>
    <img src={product.image} alt={product.name}/>
    <div className='product-description'>
    <h1>{product.name}</h1>
    <Rating value={product.rating}/>
    <h3>price: ${product.price}</h3>
    <p>{product.description}</p>
    </div>
    <div className='product-status'>
    <div className='space'><span>Price:</span><span>{product.price}</span></div>
    <div className='space'><span>Price:</span><span>{product.countInStock>=1?"In Stock":"Out of Stock"}</span></div>
    <div className='space'><span>Qty:</span><span>
    <select onChange={(e)=>{setQty(e.target.value)}}>
        {
            [...Array(product.countInStock).keys()].map((count)=>(
                <option value={count+1} key={count}>{count+1}</option>
            ))
        }
      </select></span></div>
    <button onClick={addToCartHandler}>Add To Cart</button>
    </div>
    </div>
    </div>
    </div>
    )
}

export default ProductDetails