import gql from 'graphql-tag';

export const GET_VENDOR = gql`
  query getVendor($slug: String!) {
    vendor(slug: $slug) {
      id
      slug
      name
      categories
      previewUrl
      thumbnailUrl
      type
        charge
        minimumOrder
        isFree
      address
      products {
        id
        name
        type
        description
        price
      }
    }
  }
`;
