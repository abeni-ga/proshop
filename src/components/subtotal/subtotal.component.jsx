import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../../queries/addToCart.mutation";
import "./subtotal.styles.scss";

import Button from "../button/button.component";
const Subtotal = ({ totalQty, totalPrice }) => {
  const [addToCart, { data, loading, error }] = useMutation(ADD_TO_CART);
  const LocalcartItems = useSelector((state) => state.cartItems.cartItems);
  const onClickHandler = async () => {
    console.log("clicked");
    const cartInput = await LocalcartItems.map((cartItem) => {
      return {
        product: cartItem._id,
        quantity: cartItem.ordered_quantity,
      };
    });
    addToCart({
      variables: {
        cartInput: cartInput,
      },
    });
    console.log(cartInput);
  };
  return (
    <div className="subtotal-container">
      <div className="subtotal-title">{`SUBTOTAL (${totalQty}) ITEMS`}</div>
      <div className="subtotal-price">${totalPrice}</div>
      <div className="checkout-button">
        <Button onClick={onClickHandler}>PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default Subtotal;
