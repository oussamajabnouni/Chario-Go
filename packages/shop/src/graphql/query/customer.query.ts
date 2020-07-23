import gql from "graphql-tag";

export const GET_LOGGED_IN_CUSTOMER = gql`
  query getUser($id: String!) {
    me(id: $id) {
      id
      name
      email
      addresses {
        id
        city
        state
        info
      }
      contacts {
        id
        type
        number
      }
      cards {
        id
        type
        cardType
        name
        lastFourDigit
      }
      orders {
        id
        status
        deliveryAddress
        amount
        subtotal
        deliveryFee
        discount
        deliveryTime
        products {
          title
          price
          total
          image
          quantity
          id
        }
      }
    }
  }
`;
