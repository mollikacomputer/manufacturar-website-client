import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
          <li className="mb-4">
            <NavLink to='/dashboard/' >AddService</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addadmin" >Add Admin</NavLink>
          </li><li>
            <NavLink to="/dashboard/addproduct" >Add Product</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
