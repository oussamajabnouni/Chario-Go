import gql from 'graphql-tag';

export const UPDATE_ADDRESS = gql`
  mutation($id:String!,$address: AddAddressInput!) {
    addAddress(id:$id, address: $address) {
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
