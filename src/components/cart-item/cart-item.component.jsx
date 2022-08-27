import { useDispatch } from "react-redux";
import { editQty, removeFromCart } from "../../redux/cartSlice";
import "./cart-item.styles.scss";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="cart-item-img-color"></div>
      <img src={product.image} alt={product.name} />
      <span className="cart-item-name">{product.name}</span>
      <span className="cart-item-price">${product.price}</span>
      <span className="cart-item-qty">
        <select
          onChange={(e) => {
            dispatch(editQty({ id: product._id, qty: Number(e.target.value) }));
          }}
          value={product.qty}
        >
          {[...Array(product.countInStock).keys()].map((count) => (
            <option value={count + 1} key={count}>
              {count + 1}
            </option>
          ))}
        </select>
      </span>
      <span className="cart-item-remove">
        <button
          onClick={() => {
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
