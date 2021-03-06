import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
<div class="drawer drawer-mobile mt-16">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-accent flex flex-col items-center pt-6">
        {/* <!-- Page content here --> */}
        <Outlet/>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="mb-2">
            <NavLink to='/dashboard/' >AddService</NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/addadmin" >Add Admin</NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/manageproducts" >Manage Products</NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/addnewproduct" >Add New Product</NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/updateproduct" >Update Product</NavLink>
          </li>
 
        </ul>
      </div>
    </div>
    );
};

export default DashboardSidebar;