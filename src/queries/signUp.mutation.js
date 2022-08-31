import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation signUp($userInput: UserInput!) {
    signUp(UserInput: $userInput) {
      _id
      email
      name
      token
    }
  }
`;
