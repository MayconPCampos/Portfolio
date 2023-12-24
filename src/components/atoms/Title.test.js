import React from "react";

import { render, screen } from "@testing-library/react";

import Title from "./Title";

test("Renderiza um texto na tela personalizado como titulo", () => {
  render(<Title>#titulo</Title>);

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();

  expect(screen.getByText("#titulo")).toBeInTheDocument();
});
