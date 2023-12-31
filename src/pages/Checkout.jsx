import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  if (cartItems.length === 0) {
    return <SectionTitle text="your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
