import './subtotal.styles.scss'
const Subtotal = ({totalQty,totalPrice})=>{
    return (
        <div className="subtotal-container">
        <div className="subtotal-title">{`SUBTOTAL (${totalQty}) ITEMS`}</div>
        <div className="subtotal-price">{totalPrice}</div>
        <button>PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default Subtotal