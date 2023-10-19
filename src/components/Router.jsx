import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/Home";
import ShopPage from "../pages/Shop";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      //errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <ShopPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
