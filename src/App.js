import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
// animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import AdminRoute from "./Routes/AdminRoute";
import Dashboard from "./Dashboard/Dashboard";
import { publicRoutes } from "./Routes/publicRoutes";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import { privateRoutes } from "./Routes/privateRoutes";
import AddService from "./Dashboard/AddService";
import AddAdmin from "./Dashboard/AddAdmin";
import PageNotFound from "./Components/PageNotFound";
import AddProducts from "./Dashboard/AddProducts";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./Hooks/AdminRoute";
import ProtectedByAdmin from "./Authentication/ProtectedByAdmin";

function App() {
  // for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar>
        <Routes>
          {/* Publick route */}
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          {/* Private route */}
          <Route element={<ProtectedRoute/>}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<ProtectedByAdmin/>}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<AddService />}></Route>
              <Route path="addservice" element={<AddService />} />
              <Route path="addadmin" element={<AddAdmin />}></Route>
              <Route path="addproducts" element={<AddProducts />} />
            </Route>
          </Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}
export default App;
