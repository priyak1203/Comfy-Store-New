import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils/helpers';

const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  try {
    const { data } = await queryClient.ensureQueryData(featuredProductsQuery);
    const products = data.data;
    return { products };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
