import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // adjust the path to your store file
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = (): JSX.Element => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
