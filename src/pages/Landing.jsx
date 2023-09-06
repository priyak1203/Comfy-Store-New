import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils/helpers';

const url = '/products?featured=true';

export const loader = async () => {
  try {
    const { data } = await customFetch(url);
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
