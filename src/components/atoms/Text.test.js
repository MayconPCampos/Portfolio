import React from "react";
import { render } from "@testing-library/react";

import Text from "./Text";

test("Renderiza Text com children", () => {
  const view = render(<Text>teste</Text>);

  // eslint-disable-next-line testing-library/no-debugging-utils
  view.debug();

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(view.getByText("teste")).toBeInTheDocument();
});

test("Renderiza texto na cor especificada", () => {
  const view = render(<Text type="number">12345</Text>);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(view.getByText("12345")).toHaveStyleRule({ color: "#68c3a3" });
});
