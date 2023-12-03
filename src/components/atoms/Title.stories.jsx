import Title from "./Title";
import React from "react";

export default {
  title: "Components/Atoms/Title",
  component: Title,
};

export const Primary = {
  render: () => (
    <Title>
      <h1>
        Meu <span>site</span>
      </h1>
      <h2>
        Meu <span>site</span>
      </h2>
      <h3>
        Meu <span>site</span>
      </h3>
      <h4>
        Meu <span>site</span>
      </h4>
      <h5>
        Meu <span>site</span>
      </h5>
      <h6>
        Meu <span>site</span>
      </h6>
    </Title>
  ),
};
