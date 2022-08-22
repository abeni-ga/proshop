import './cartScreen.styles.scss';
import CartItem from '../../components/cart-item/cart-item.component';
import {useSelector} from 'react-redux';
import Subtotal from '../../components/subtotal/subtotal.component';
const CartScreen = ()=>{

    const cartItems = useSelector((state) => state.cartItems.cartItems);
    const totalQty = cartItems.reduce((previousValue,currentValue)=>
        previousValue + currentValue.qty
    ,0)
    const totalPrice = cartItems.reduce((previousValue,currentValue)=>
        previousValue + (currentValue.qty*currentValue.price)
    ,0)
    return(
        <div className="cart">
            <div className="cart-items">
            {cartItems.map((cartItem,index)=>{
                return <CartItem key={index} product={cartItem}/>
            }
            )}
            </div>
            {totalQty>0&&<Subtotal totalQty={totalQty} totalPrice={totalPrice}/>}
        </div>
    )

}

export default CartScreen;