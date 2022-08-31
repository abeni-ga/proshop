import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation logIn($logInInput: LogInInput) {
    logIn(LogInInput: $logInInput) {
      _id
      role
      token
      name
    }
  }
`;
