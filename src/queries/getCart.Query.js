import { gql } from "@apollo/client";

export const GET_CART = gql`
  query {
    getCart {
      total
      user
      order_items {
        quantity
        product {
          _id
          product_image
          price
          name
          quantity
        }
      }
    }
  }
`;
