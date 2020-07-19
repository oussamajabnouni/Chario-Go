import gql from "graphql-tag";

export const GET_LOGGED_IN_CUSTOMER = gql`
  query getUser($id: String = "1") {
    me(id: $id) {
      name
      email
      address {
        id
        city
        state
        info
      }
      contact {
        id
        type
        number
      }
      card {
        id
        type
        cardType
        name
        lastFourDigit
      }
    }
  }
`;
