import * as React from "react";
import { useRoutes } from "react-router-dom";
import Register from "../views/Register/Register";

function Router() {
  let element = useRoutes([
    {
        path: "/register",
      element: <Register />,
    }
  ]);
  return element;
}
export default Router;