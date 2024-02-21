import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import Project from "../components/pages/Project";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/:id/",
    element: <Project />,
  },
]);

export default routes;
