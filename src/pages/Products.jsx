import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils/helpers';

const url = '/products';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const response = await customFetch(url, { params });
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
