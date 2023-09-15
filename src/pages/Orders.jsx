import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils/helpers';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn('You must be logged in to view the orders');
      return redirect('/login');
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get(`/orders`, {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error accessing your order';
      toast.error(errorMessage);

      const status = error?.response?.status;
      if (status === 401 || status === 403) return redirect('/login');

      return null;
    }
  };

const Orders = () => {
  return <div>Orders</div>;
};

export default Orders;
