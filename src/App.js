import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Service from "./Pages/Service";
// animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PrivateRoute from "./Authentication/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute";
import Dashboard from "./Dashboard/Dashboard";


function App() {
  
  // for animation
  useEffect(() => {
    AOS.init();
  } ,[])

  return (
    <div >
      <Navbar>
        <Routes>
          {/* Publick route */}
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>

          {/* Private route */}
          <Route element={<PrivateRoute/>} >
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/service" element={<Service/>} >
          </Route>

          </Route>

          <Route element={<AdminRoute/>} >
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}
export default App;
