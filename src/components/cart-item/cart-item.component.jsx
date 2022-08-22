import { useDispatch } from 'react-redux';
import { editQty,removeFromCart } from '../../redux/cartSlice';
import './cart-item.styles.scss';
const CartItem = ({product})=>{
    const dispatch = useDispatch();
    return (
        <div className="cart-item">
                    <img src={product.image} alt={product.name} height="100px" width="100px"/>
                    <span className='cart-item-name'>{product.name}</span>
                    <span>${product.price}</span>
                    <span className='cart-item-detail'>
                    <select onChange={
                        (e)=>{
                            dispatch(editQty({id:product._id,qty:e.target.value}))
                        }} 
                        value={product.qty}>
        {
            [...Array(product.countInStock).keys()].map((count)=>(
                <option value={count+1} key={count}>{count+1}</option>
            ))
        }
      </select>
                    </span>
                    <span><button onClick={()=>{dispatch(removeFromCart(product._id))}}><i className="fa-solid fa-trash"></i></button></span>
                </div>
    )
}

export default CartItem;