import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY } from '../graphql/productsQuery';

const useTotalValue = () => {
  const { data } = useQuery(PRODUCTS_QUERY);

  const calculateTotalValue = () => {
    const products = data?.products || [];
    return products.reduce((total: number, product: any) => {
      return total + product.stock * product.price;
    }, 0);
  };

  return calculateTotalValue;
};

export default useTotalValue;
