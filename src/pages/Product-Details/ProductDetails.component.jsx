import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import "./ProductDetails.styles.scss";
import products from "../../products";
import Rating from "../../components/Rating/Rating.component";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";
const ProductDetails = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const product = products.find((p) => p._id === id);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart({ product: product, qty: qty }));
  };

  return (
    <div className="product-details-container-parent">
      <div className="product-details-container">
        <Link to="/">
          <button>Go Back</button>
        </Link>
        <div className="product-details">
          <img src={product.image} alt={product.name} />
          <div className="product-description">
            <h1>{product.name}</h1>
            <Rating value={product.rating} />
            <h3>price: ${product.price}</h3>
            <p>{product.description}</p>
          </div>
          <div className="product-status">
            <div className="space">
              <span>Price:</span>
              <span>{product.price}</span>
            </div>
            <div className="space">
              <span>Price:</span>
              <span>
                {product.countInStock >= 1 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="space">
              <span>Qty:</span>
              <span>
                <select
                  onChange={(e) => {
                    setQty(Number(e.target.value));
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((count) => (
                    <option value={count + 1} key={count}>
                      {count + 1}
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <Button onClick={addToCartHandler}>ADD TO CART</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
