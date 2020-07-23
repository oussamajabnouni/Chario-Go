import gql from 'graphql-tag';

export const ADD_ADDRESS = gql`
  mutation($userId:String!,$addressInput: AddAddressInput!) {
    addAddress(userId:$userId, addressInput: $addressInput) {
      id
    }
  }
`;

export const DELETE_ADDRESS = gql`
  mutation($addressId: String!) {
    deleteAddress(addressId: $addressId) {
      id
    }
  }
`;
