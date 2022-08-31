import { Link } from "react-router-dom";

import "./Product-Card.style.scss";
import Rating from "../Rating/Rating.component";

const ProductCard = ({ product }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/product/${product._id}`}
    >
      <div className="product-card-container">
        <div className="img-box">
          <img src={product.product_image[0]} alt={product.name} />
          <div className="img-color"></div>
        </div>
        <div className="product-text">
          <h3>{product.name}</h3>
          <Rating value={product.rating} num={product.review.length} />
          <h2>${product.price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
