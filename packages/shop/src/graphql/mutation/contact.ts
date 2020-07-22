import gql from 'graphql-tag';

export const ADD_CONTACT = gql`
  mutation($userId: String!,$contactInput: AddContactInput!) {
    addContact(userId: $userId,contactInput: $contactInput) {
      id
    }
  }
`;
export const DELETE_CONTACT = gql`
  mutation($contactId: String!) {
    deleteContact(contactId: $contactId) {
      id
    }
  }
`;
