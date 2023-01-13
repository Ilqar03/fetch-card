import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Card from "../Pages/ProductsDetail/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/card",
    element: <Card />,
  },
]);

export default router;
