import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT_MUTATION } from '../graphql/addProductMutation';

const ProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const [addProduct] = useMutation(ADD_PRODUCT_MUTATION);

  const handleAddProduct = async () => {
    try {
      await addProduct({
        variables: {
          name,
          stock,
          price,
        },
      });
      // Clear the form after successful addition
      setName('');
      setStock(0);
      setPrice(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
