import * as React from "react";
import products from "../../products";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries/getProducts.query";
import ProductCard from "../../components/Product-Card/Product-Card.component";
import "./Product_list.styles.scss";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  useEffect(() => {
    if (data) {
      console.log(data.getProducts);
      setProducts(data.getProducts);
    } else if (error) {
      console.log(error.message);
    }
  }, [data]);
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
