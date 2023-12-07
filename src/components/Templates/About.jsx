import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Separator from "../atoms/Separator";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About = () => {
  return (
    <Container>
      <Title>
        <h2>Sobre mim</h2>
      </Title>
      <Separator />
      {/* Component com foto de perfil com informações aqui */}
      <Title>
        <h3>Sobre</h3>
      </Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse
        autem atque? Atque, veritatis. Eum, rerum pariatur. Sint tempora,
        ratione qui deserunt ea laborum inventore hic quisquam optio, quia error
        possimus dolore dignissimos at. Itaque deleniti quae corporis ipsam
        magnam illo totam officiis obcaecati, similique consectetur temporibus
        placeat explicabo voluptates! Ad repellat officiis dicta vitae explicabo
        quos debitis eius eos?
      </Text>
    </Container>
  );
};

export default About;
