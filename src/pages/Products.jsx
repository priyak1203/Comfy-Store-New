import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils/helpers';

const url = '/products';

const allProductsQuery = (queryParams) => {
  const { search, category, company, order, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      order ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch.get(url, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        allProductsQuery(params)
      );
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
