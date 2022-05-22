import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
// import Contact from "../pages/Contact";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
//   { path: "/contact", name: "Contact", Component: Contact },
  { path: "/login", name: "Login", Component: Login },
];