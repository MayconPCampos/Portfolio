import Title from "./Title";
import React from "react";
import { TitleColorSpan } from "./Title";

export default {
  title: "Components/Atoms/Title",
  component: Title,
};

export const Primary = {
  render: () => (
    <Title>
      <h1>
        Meu <TitleColorSpan>site</TitleColorSpan>
      </h1>
      <h2>
        Meu <TitleColorSpan>site</TitleColorSpan>
      </h2>
      <h3>
        Meu <TitleColorSpan>site</TitleColorSpan>
      </h3>
      <h4>
        Meu <TitleColorSpan>site</TitleColorSpan>
      </h4>
      <h5>
        Meu <TitleColorSpan>site</TitleColorSpan>
      </h5>
      <h6>
        Meu <TitleColorSpan>site</TitleColorSpan>
      </h6>
    </Title>
  ),
};
