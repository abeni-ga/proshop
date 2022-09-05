import { useState, useEffect } from "react";
// import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import "./cartScreen.styles.scss";
// import { listCartItems } from "../../redux/cartSlice.js";
// import { GET_CART } from "../../queries/getCart.Query";
import CartItem from "../../components/cart-item/cart-item.component";
import { useSelector } from "react-redux";
import Subtotal from "../../components/subtotal/subtotal.component";
const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItemsRedux = useSelector((state) => state.cartItems.cartItems);
  const cartItems = cartItemsRedux;
  console.log(cartItems);
  // console.log(localCartItems);
  // const totalQty = localCartItems?.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue.qty,
  //   0
  // );
  // const totalPrice = cartItems.reduce(
  //   (previousValue, currentValue) =>
  //     previousValue + currentValue.qty * currentValue.price,
  //   0
  // );
  // useEffect(() => {
  //   if (data) {
  //     const cartData = data?.getCart?.order_items?.map((order_item, index) => {
  //       return {
  //         ...order_item.product,
  //         ordered_quantity: Number(order_item.quantity),
  //       };
  //     });

  // localStorage.setItem("getCart", JSON.stringify(data.getCart));
  // const getCartData = localStorage.getItem("getCart");
  // const parsedData = JSON.parse(getCartData);
  // const cartData = data.getCart.order_items.map((order_item, index) => {
  //   return { ...order_item.product, ordered_quantity: order_item.quantity };
  // });
  //     // localStorage.setItem("cartItems", JSON.stringify(cartData));
  //   } else if (error) {
  //     console.log(error.message);
  //   }
  // }, [data, loading, error]);
  return (
    <div className="cart-screen-container">
      <div className="cart-screen">
        <div className="cart">
          <div className="cart-items">
            <h1>SHOPPING CART</h1>
            {cartItems?.length <= 0 ? (
              <h3>Your cart is empty!</h3>
            ) : (
              cartItems?.map((cartItem, index) => {
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
