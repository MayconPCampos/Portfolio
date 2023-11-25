import Title from "./Title";
import React from "react";

export default {
  title: "Components/Atoms/Title",
  component: Title,
};

export const Primary = {
  render: () => (
    <Title>
      <h1>Meu site</h1>
      <h2>Meu site</h2>
      <h3>Meu site</h3>
      <h4>Meu site</h4>
      <h5>Meu site</h5>
      <h6>Meu site</h6>
    </Title>
  ),
};
