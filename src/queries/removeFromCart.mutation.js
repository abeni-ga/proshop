import { gql } from "@apollo/client";

export const removeFromCartQuery = gql`
  mutation removeFromCart($id: String!) {
    removeFromCart(id: $id) {
      _id
    }
  }
`;
