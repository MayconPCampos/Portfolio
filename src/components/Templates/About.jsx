import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Separator from "../atoms/Separator";
import Box from "../atoms/Box";
import GridContainer from "../atoms/Grid";
import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";
import Button from "../atoms/Button";

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;

  ${BreakAt(BreakpointSize.sm)} {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }

  ${BreakAt(BreakpointSize.lg)} {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
  }
`;

const InfoFrame = styled.div`
  ${BreakAt(BreakpointSize.sm)} {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  ${BreakAt(BreakpointSize.lg)} {
    grid-column: 6 / -1;
    grid-row: 1 / 2;
  }
`;

const SectionContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${BreakAt(BreakpointSize.lg)} {
    margin: 5%;
  }

  ${BreakAt(BreakpointSize.xl)} {
    margin: 10%;
  }
`;

const About = () => {
  return (
    <SectionContainer>
      <Title>
        <h2>Sobre mim</h2>
      </Title>
      <Separator />
      <GridContainer sm={1} md={1} lg={8} xl={8} marginTop="5%" gap="50px">
        <InfoFrame>
          <Box size="xl">
            <h2>frame</h2>
          </Box>
        </InfoFrame>
        <InfoSection>
          <Title>
            <h3>Sobre</h3>
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse
            autem atque? Atque, veritatis. Eum, rerum pariatur. Sint tempora,
            ratione qui deserunt ea laborum inventore hic quisquam optio, quia
            error possimus dolore dignissimos at. Itaque deleniti quae corporis
            ipsam magnam illo totam officiis obcaecati, similique consectetur
            temporibus placeat explicabo voluptates! Ad repellat officiis dicta
            vitae explicabo quos debitis eius eos?
          </Text>
          <Title>
            <h3>Objetivo</h3>
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse
            autem atque? Atque, veritatis. Eum, rerum pariatur. Sint tempora,
            ratione qui deserunt ea laborum inventore hic quisquam optio.
          </Text>
          <Title>
            <h3>O que eu faço?</h3>
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse
            autem atque? Atque, veritatis. Eum, rerum pariatur. Sint tempora,
            ratione qui deserunt ea laborum inventore hic quisquam optio, quia
            error possimus dolore dignissimos at. Itaque deleniti quae corporis.
          </Text>
          <Button>Baixar meu currículo</Button>
        </InfoSection>
      </GridContainer>
    </SectionContainer>
  );
};

export default About;
