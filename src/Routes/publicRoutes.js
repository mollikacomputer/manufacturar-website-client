import AllProducts from "../Components/AllProducts";
import Persage from "../Components/Persage";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
// import Contact from "../pages/Contact";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
//   { path: "/contact", name: "Contact", Component: Contact },
{ path: "/login", name: "Login", Component: Login },
{ path: "/register", name: "register", Component: Register },
{ path: "/allproducts", name: "allproducts", Component: AllProducts },
{ path: "/persage", name: "persage", Component: Persage },
{ path: "/blog", name: "blog", Component: Blog },
{ path: "/singleblog", name: "singleblog", Component: SingleBlog },
];