import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/CArt";
import AllUser from "../pages/Dashboard/AllUser/AllUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/shop/:category",
        element: <OrderFood></OrderFood>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [


      // user routes 
      {
        path: "cart",
        element: <Cart></Cart>
      },

      // admin routes 
      {
        path: "users",
        element: <AllUser></AllUser>
      },
    ]
  }
]);

export default router;
