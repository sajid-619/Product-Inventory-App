import React from 'react';
import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY } from '../graphql/productsQuery';

const ProductList: React.FC = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.products.map((product: any) => (
          <li key={product.id}>
            {product.name} - Stock: {product.stock}, Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
