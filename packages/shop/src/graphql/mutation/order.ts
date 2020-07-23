import gql from 'graphql-tag';

export const ADD_ORDER = gql`
  mutation($orderInput: AddOrderInput!) {
    addOrder(orderInput: $orderInput) {
      id
    }
  }
`;

export const GET_PAYMENT = gql`
  mutation($paymentInput: String!) {
    charge(paymentInput: $paymentInput) {
      status
    }
  }
`;
