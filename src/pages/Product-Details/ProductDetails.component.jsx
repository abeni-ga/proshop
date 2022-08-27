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
          <h4>Go Back</h4>
        </Link>
        <div className="product-details">
          <div className="detail-img-color"></div>
          <img src={product.image} alt={product.name} />
          <div className="product-description">
            <h1>{product.name}</h1>
            <Rating value={product.rating} num={product.numReviews} />
            <h3>price: ${product.price}</h3>
            <p>Description: {product.description}</p>
          </div>
          <div className="product-status">
            <span className="status-grid-item-left">Price:</span>
            <span className="status-grid-item-right">${product.price}</span>
            <span className="status-grid-item-left">Status:</span>
            <span className="status-grid-item-right">
              {product.countInStock >= 1 ? "In Stock" : "Out of Stock"}
            </span>

            {product.countInStock > 0 ? (
              <>
                <span className="status-grid-item-left">Qty:</span>
                <span className="status-grid-item-right">
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
              </>
            ) : null}
            <div className="button-cover">
              <Button
                onClick={addToCartHandler}
                disabled={product.countInStock <= 0}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
