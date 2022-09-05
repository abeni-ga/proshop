import react, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { removeFromCartQuery } from "../../queries/removeFromCart.mutation";
import { editQty, removeFromCart } from "../../redux/cartSlice";
import "./cart-item.styles.scss";
const CartItem = ({ product }) => {
  const [qty, setQty] = useState(product.ordered_quantity);
  console.log(product.ordered_quantity);
  console.log(qty);
  const [removeFromCartFun, { loading, error, data }] =
    useMutation(removeFromCartQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="cart-item">
      <div className="cart-item-img-color"></div>
      <img src={product.product_image[0]} alt={product.name} />
      <span className="cart-item-name">{product.name}</span>
      <span className="cart-item-price">${product.price}</span>
      <span className="cart-item-qty">
        <select
          value={Number(qty)}
          onChange={async (e) => {
            setQty(Number(e.target.value));
            // console.log(qty);
            dispatch(editQty({ id: product._id, qty: Number(e.target.value) }));
          }}
        >
          {[...Array(product.quantity).keys()].map((count) => (
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
            removeFromCartFun({ variables: { id: product._id } });
            dispatch(removeFromCart(product._id));
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </span>
    </div>
  );
};

export default CartItem;
