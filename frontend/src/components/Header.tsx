import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Using Link from 'react-router-dom' instead of 'LinkContainer'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import React from 'react';

import { logout } from '../slices/authSlice';

interface RootState {
  auth: {
    userInfo: { name: string } | null;
  };
}

const Header: React.FC = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            MERN Auth
          </Link>

          <div className="flex items-center space-x-4">
            {userInfo ? (
              <div className="relative">
                <button className="text-white hover:text-gray-300">
                  {userInfo.name}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
                  <Link to="/profile" className="block px-4 py-2">
                    Profile
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="flex items-center space-x-2">
                  <FaSignInAlt />
                  <span>Sign In</span>
                </Link>
                <Link to="/register" className="flex items-center space-x-2">
                  <FaSignOutAlt />
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
