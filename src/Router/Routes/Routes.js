import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SeeAll from "../../Pages/SeeAll/SeeAll";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:6600/services/${params.id}`),
      },
      {
        path: "/seeall",
        element: <SeeAll></SeeAll>,
      },
    ],
  },
]);

export default router;
