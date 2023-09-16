import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };

  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-4 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm capitalize">
              Hello, {user.username}
            </p>
            <button
              className="btn btn-xs btn-primary btn-outline"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
