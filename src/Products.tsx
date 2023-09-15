import React from 'react';
import ProductList from './components/ProductList';
import TotalValue from './components/TotalValue';
import ProductForm from './components/ProductForm';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql', // Your GraphQL server endpoint
  cache: new InMemoryCache(),
});

const Products: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Product Inventory App</h1>
        <ProductList />
        <TotalValue />
        <ProductForm />
      </div>
    </ApolloProvider>
  );
};

export default Products;
