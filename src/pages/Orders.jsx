import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }

  return null;
};

const Orders = () => {
  return <div>Orders</div>;
};

export default Orders;
