import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import "./ProductDetails.styles.scss";
import { GET_PRODUCT } from "../../queries/getProduct.Query";
import { ADD_TO_CART } from "../../queries/addToCart.mutation";
import Rating from "../../components/Rating/Rating.component";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, editQty } from "../../redux/cartSlice.js";
import { useQuery, useMutation } from "@apollo/client";
const ProductDetails = () => {
  const cartItemsRedux = useSelector((state) => state.cartItems.cartItems);
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
    // await addToCartMut({
    //   variables: {
    //     cartInput: [
    //       {
    //         product: product._id,
    //         quantity: product.ordered_quantity,
    //       },
    //     ],
    //   },
    // });
    let newCartItems;
    if (cartItemsRedux.length > 0) {
      console.log("1");
      const existItem = cartItemsRedux.find(
        (cartItem) => cartItem._id === product._id
      );
      if (existItem) {
        console.log("exist");
        newCartItems = cartItemsRedux.map((cartItem) => {
          // console.log(cartItem.ordered_quantity + qty);
          return cartItem._id === product._id
            ? {
                ...cartItem,
                ordered_quantity: Number(cartItem.ordered_quantity) + qty,
              }
            : cartItem;
        });
      } else {
        console.log("new");
        newCartItems = [
          ...cartItemsRedux,
          { ...product, ordered_quantity: qty },
        ];
      }
    } else {
      console.log("empty");
      newCartItems = [
        {
          ...product,
          qty: qty,
        },
      ];
    }

    dispatch(addToCart(newCartItems));
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
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

            {product.quantity > 0 ? (
              <>
                <span className="status-grid-item-left">Qty:</span>
                <span className="status-grid-item-right">
                  <select
                    onChange={(e) => {
                      setQty(Number(e.target.value));
                      dispatch(editQty(qty));
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
                disabled={product.quantity <= 0}
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
