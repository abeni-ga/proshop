import { gql } from "@apollo/client";

export const ADD_TO_CART = gql`
  mutation addToCart($cartInput: [CartInput]) {
    addToCart(CartInput: $cartInput) {
      _id
      order_items {
        _id
        quantity
      }
    }
  }
`;
