import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query getProducts(
    $type: String
    $searchText: String
    $category: String
    $offset: Int
    $limit: Int
    $locationState: String
    $locationCity: String
  ) {
    products(
      type: $type
      searchText: $searchText
      category: $category
      locationState: $locationState
      locationCity: $locationCity
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        title
        slug
        unit
        price

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
