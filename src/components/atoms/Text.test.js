import React from "react";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

test("Renderiza Text com children", () => {
  render(<Text>teste</Text>);

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();

  expect(screen.getByText("teste")).toBeInTheDocument();
});

test("Renderiza texto na cor especificada", () => {
  render(<Text type="number">12345</Text>);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(screen.getByText("12345")).toHaveStyleRule({ color: "#68c3a3" });
});
