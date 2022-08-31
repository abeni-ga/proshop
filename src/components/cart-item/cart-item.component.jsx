import * as React from "react";
import { useDispatch } from "react-redux";
import { editQty, removeFromCart } from "../../redux/cartSlice";
import "./cart-item.styles.scss";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item-img-color"></div>
      <img src={product.product.product_image[0]} alt={product.product.name} />
      <span className="cart-item-name">{product.product.name}</span>
      <span className="cart-item-price">${product.product.price}</span>
      <span className="cart-item-qty">
        <select
          onChange={(e) => {
            console.log(product.product._id);
            dispatch(
              editQty({ id: product.product._id, qty: Number(e.target.value) })
            );
          }}
          value={product.quantity}
        >
          {[...Array(product.product.quantity).keys()].map((count) => (
            <option value={count + 1} key={count}>
              {count + 1}
            </option>
          ))}
        </select>
      </span>
      <span className="cart-item-remove">
        <button
          onClick={() => {
            console.log("clicked");
            dispatch(removeFromCart(product.product._id));
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </span>
    </div>
  );
};

export default CartItem;
