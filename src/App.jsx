import React from "react";
import GlobalStyles from "./assets/styles/GlobalStyles";

import routes from "./routes/router";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
