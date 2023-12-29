import React from "react";
import Title from "../components/atoms/Title";
import styled from "styled-components";
import Text from "../components/atoms/Text";

const Container = styled.div`
  margin: 50px;
`;

export default {
  title: "Bem vindo(a)/Apresentação",
};

export const Portifolio = {
  render: () => (
    <Container>
      <Title>
        <h1>Seja bem vindo(a)</h1>
      </Title>
      <Text>
        <p>
          Este storybook foi criado para documentar visualmente o site com meu
          portifólio.<br></br>Você pode acessar minha página através do link
          {"  "}
          <a href="https://maycon-campos.vercel.app/" target="_blank">
            meu site
          </a>{" "}
          para ver mais de meus projetos desenvolvidos até o momento e aqueles
          que serão públicados no futuro.
        </p>
        <p>
          Abaixo você encontra os componentes criados estruturados com Atomic
          Design.
        </p>
        <p>Obrigado pela visita!</p>
      </Text>
    </Container>
  ),
};
