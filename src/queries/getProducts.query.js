import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    getProducts {
      _id
      name
      product_image
      price
      quantity
      rating
      review {
        _id
      }
    }
  }
`;
