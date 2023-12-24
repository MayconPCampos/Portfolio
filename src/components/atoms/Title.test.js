import React from "react";

import { render } from "@testing-library/react";

import Title from "./Title";

test("Renderiza um texto na tela personalizado como titulo", () => {
  const view = render(<Title>#titulo</Title>);

  // eslint-disable-next-line testing-library/no-debugging-utils
  view.debug();

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(view.getByText("#titulo")).toBeInTheDocument();
});
