import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils/helpers';
import { clearCart } from '../features/cart/cartSlice';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, numItemsInCart, orderTotal } =
      store.getState().cartState;

    const info = {
      name,
      address,
      cartItems,
      numItemsInCart,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
    };

    try {
      const response = await customFetch.post(
        `/orders`,
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      store.dispatch(clearCart());
      toast.success('Order placed successfully');
      return redirect('/orders');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order';
      toast.error(errorMessage);
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput type="text" name="name" label="first name" />
      <FormInput type="text" name="address" label="address" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
