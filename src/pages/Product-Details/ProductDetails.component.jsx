import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import "./ProductDetails.styles.scss";
import { GET_PRODUCT } from "../../queries/getProduct.Query";
import { ADD_TO_CART } from "../../queries/addToCart.mutation";
import Rating from "../../components/Rating/Rating.component";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";
import { useQuery, useMutation } from "@apollo/client";
const ProductDetails = () => {
  const { id } = useParams();
  const query = useQuery(GET_PRODUCT, {
    variables: {
      id: id,
    },
  });
  const [addToCartMut, { data, loading, error }] = useMutation(ADD_TO_CART);
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState({ review: [] });
  const dispatch = useDispatch();
  const addToCartHandler = async () => {
    console.log(product._id, product.quantity);
    await addToCartMut({
      variables: {
        cartInput: [
          {
            product: product._id,
            quantity: product.quantity,
          },
        ],
      },
    });
    dispatch(addToCart({ product: product, qty: qty }));
  };
  useEffect(() => {
    console.log(data);
  }, [data, error]);
  useEffect(() => {
    const getData = async () => {
      await setProduct(query.data.getProduct);
    };
    if (query.data) {
      console.log(query.data);
      getData();
      console.log(Number(query.data.getProduct.rating + 1));
    } else if (query.error) {
      console.log(query.error);
    }
  }, [query.data, query.error]);

  return (
    <div className="product-details-container-parent">
      <div className="product-details-container">
        <Link to="/">
          <h4>Go Back</h4>
        </Link>
        <div className="product-details">
          <div className="detail-img-color"></div>
          <img src={product.product_image} alt={product.name} />
          <div className="product-description">
            <h1>{product.name}</h1>
            <Rating
              value={Number(product.rating)}
              num={product.review.length}
            />
            <h3>price: ${product.price}</h3>
            <p>Description: {product.description}</p>
          </div>
          <div className="product-status">
            <span className="status-grid-item-left">Price:</span>
            <span className="status-grid-item-right">${product.price}</span>
            <span className="status-grid-item-left">Status:</span>
            <span className="status-grid-item-right">
              {product.quantity >= 1 ? "In Stock" : "Out of Stock"}
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
                    {[...Array(product.quantity).keys()].map((count) => (
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
