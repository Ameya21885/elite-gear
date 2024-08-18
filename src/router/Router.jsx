import { createBrowserRouter } from "react-router-dom";
import {
  Root,
  Home,
  Cart,
  Categories,
  SingleProduct,
  Favourites,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
     
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "categories",
        element: <Categories/>,
      },
      {
        path: "favourite",
        element: <Favourites />,
      },
      {
        path: "categories/:id",
        element: <SingleProduct />,
      },
      {
        path: "*",
        element: <p>404 Error- Nothing here...</p>,
      },
    ],
  },
]);

export default router;