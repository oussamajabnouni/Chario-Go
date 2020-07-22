import gql from 'graphql-tag';

export const ADD_CARD = gql`
  mutation($userId: String!,$cardInput: AddCardInput!) {
    addPaymentCard(userId: $userId,cardInput: $cardInput) {
      id
    }
  }
`;

export const DELETE_CARD = gql`
  mutation($cardId: String!) {
    deletePaymentCard(cardId: $cardId) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;
