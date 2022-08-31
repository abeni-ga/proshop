import * as React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import "./cartScreen.styles.scss";
import { GET_CART } from "../../queries/getCart.Query";
import CartItem from "../../components/cart-item/cart-item.component";
import { useSelector } from "react-redux";
import Subtotal from "../../components/subtotal/subtotal.component";
const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const { loading, error, data } = useQuery(GET_CART);
  // const cartItems = useSelector((state) => state.cartItems.cartItems);
  // const totalQty = cartItems.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue.qty,
  //   0
  // );
  // const totalPrice = cartItems.reduce(
  //   (previousValue, currentValue) =>
  //     previousValue + currentValue.qty * currentValue.price,
  //   0
  // );
  useEffect(() => {
    if (data) {
      console.log(data);
      setCartItems(data.getCart.order_items);
    } else if (error) {
      console.log(error.message);
    }
  }, [data, error]);
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
                console.log(cartItem);
                return <CartItem key={index} product={cartItem} />;
              })
            )}
          </div>
          <div className="subtotal-flex">
            <Subtotal totalQty={1} totalPrice={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
