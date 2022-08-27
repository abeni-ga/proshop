import "./subtotal.styles.scss";
import Button from "../button/button.component";
const Subtotal = ({ totalQty, totalPrice }) => {
  return (
    <div className="subtotal-container">
      <div className="subtotal-title">{`SUBTOTAL (${totalQty}) ITEMS`}</div>
      <div className="subtotal-price">${totalPrice}</div>
      <div className="checkout-button">
        <Button>PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default Subtotal;
