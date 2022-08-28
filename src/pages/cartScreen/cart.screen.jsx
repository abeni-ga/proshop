import "./cartScreen.styles.scss";
import CartItem from "../../components/cart-item/cart-item.component";
import { useSelector } from "react-redux";
import Subtotal from "../../components/subtotal/subtotal.component";
const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const totalQty = cartItems.reduce(
    (previousValue, currentValue) => previousValue + currentValue.qty,
    0
  );
  const totalPrice = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.qty * currentValue.price,
    0
  );
  return (
    <div className="cart-screen-container">
      <div className="cart-screen">
        <div className="cart">
          <div className="cart-items">
            <h1>SHOPPING CART</h1>
            {cartItems.length <= 0 ? (
              <h3>Your cart is empty!</h3>
            ) : (
              cartItems.map((cartItem, index) => {
                return <CartItem key={index} product={cartItem} />;
              })
            )}
          </div>
          <div className="subtotal-flex">
            <Subtotal totalQty={totalQty} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
