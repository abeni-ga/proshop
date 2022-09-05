import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { listCartItems } from "../../redux/cartSlice.js";
import { GET_PRODUCTS } from "../../queries/getProducts.query";
import { GET_CART } from "../../queries/getCart.Query";
import ProductCard from "../../components/Product-Card/Product-Card.component";
import "./Product_list.styles.scss";
const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const { data: cartData } = useQuery(GET_CART);
  console.log(cartData);

  useEffect(() => {
    if (data) {
      // console.log(localStorage.getItem("Token"));
      console.log(data.getProducts);
      setProducts(data.getProducts);
    } else if (error) {
      console.log(error.message);
    }
  }, [data]);
  useEffect(() => {
    if (cartData) {
      // const cart = cartData.getCart.order_items;
      // const newCartItems = cart.map((cartItem) => {
      //   return {
      //     ...cartItem.product,
      //     ordered_quantity: cartItem.quantity,
      //   };
      // });
      // console.log(newCartItems);
      // dispatch(listCartItems(newCartItems));
      console.log(cartData.getCart.order_items);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(cartData.getCart.order_items)
      );
    }
  }, [cartData]);
  return (
    <div className="product-list-container">
      <div className="product-list-screen">
        <h1>LATEST PRODUCTS</h1>
        <div className="product-list">
          {products.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
