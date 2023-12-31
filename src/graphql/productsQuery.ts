import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
  query ProductsQuery {
    products {
      id
      name
      stock
      price
    }
  }
`;
