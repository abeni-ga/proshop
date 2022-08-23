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
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <Rating value={product.rating} />
        <h4> from {product.numReviews} Reviews </h4>
      </div>
    </Link>
  );
};

export default ProductCard;
