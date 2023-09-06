import axios from 'axios';

const productionURL = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionURL,
});

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((number / 100).toFixed(2));
};
