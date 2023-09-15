import { gql } from '@apollo/client';

export const ADD_PRODUCT_MUTATION = gql`
  mutation AddProduct($name: String!, $stock: Int!, $price: Float!) {
    insert_products_one(object: { name: $name, stock: $stock, price: $price }) {
      id
      name
      stock
      price
    }
  }
`;
