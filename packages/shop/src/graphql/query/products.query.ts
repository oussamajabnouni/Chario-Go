import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
  query getProducts(
    $type: String
    $searchText: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    products(
      type: $type
      searchText: $searchText
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        title
        slug
        unit
        price
        salePrice
        description
        discountInPercent
        type
        image
        gallery {
          url
        }
        categories {
          id
          title
          slug
        }
      }
      hasMore
    }
  }
`;
