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
          <img src={product.image} alt={product.name} />
          <div className="img-color"></div>
        </div>
        <div className="product-text">
          <h3>{product.name}</h3>
          <Rating value={product.rating} num={product.numReviews} />
          <h2>${product.price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
