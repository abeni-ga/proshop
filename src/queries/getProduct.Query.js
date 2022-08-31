import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProduct($id: String!) {
    getProduct(_id: $id) {
      _id
      name
      rating
      product_image
      quantity
      price
      description
      review {
        _id
      }
    }
  }
`;
