import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from './useAdmin';
const AdminRoute = () => {
    const location = useLocation();
    const [admin] = useAdmin(false)
  
    if (!admin) {
      return <Navigate to='/' />;
    }
  
    return <Outlet />;
};

export default AdminRoute;