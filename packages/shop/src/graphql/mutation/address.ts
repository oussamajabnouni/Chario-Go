import gql from 'graphql-tag';

export const ADD_ADDRESS = gql`
  mutation($id:String!,$addressInput: AddAddressInput!) {
    addAddress(id:$id, addressInput: $addressInput) {
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
