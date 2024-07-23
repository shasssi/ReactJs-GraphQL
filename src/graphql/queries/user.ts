import { gql, useMutation } from "@apollo/client";

export const SIGNIN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

export const GET_ALL_USERS = gql`
  mutation FetchAllUsers {
    fetchAllUsers {
      id
      email
      name
    }
  }
`;