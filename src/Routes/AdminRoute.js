import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
const AdminRoute = () => {
    const location = useLocation();
    const [admin] = useAdmin(false)
  
    if (!admin) {
      return <Navigate to='/admin' state={{ from: location }} replace />;
    }
  
    return <Outlet />;
};

export default AdminRoute;