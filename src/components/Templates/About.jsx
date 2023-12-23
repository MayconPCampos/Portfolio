import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Separator from "../atoms/Separator";
import GridContainer from "../atoms/Grid";
import Section from "../atoms/Section";
import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";
import Button from "../atoms/Button";
import PerfilFrame from "../organisms/PerfilFrame";

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 50px;
  }

  ${BreakAt(BreakpointSize.sm)} {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }

  ${BreakAt(BreakpointSize.lg)} {
    grid-column: 1 / 9;
    grid-row: 1 / 2;
  }
`;

const InfoFrame = styled.div`
  p {
    margin-bottom: 5px;
  }

  ${BreakAt(BreakpointSize.sm)} {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  ${BreakAt(BreakpointSize.lg)} {
    grid-column: 9 / -1;
    grid-row: 1 / 2;
  }
`;

const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;

  button {
    margin-top: 0p;
  }
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Title>
          <h2>Sobre mim</h2>
        </Title>
        <Separator />
        <GridContainer sm={1} md={1} lg={12} xl={12} marginTop="5%" gap="50px">
          <InfoFrame>
            <PerfilFrame></PerfilFrame>
          </InfoFrame>
          <InfoSection>
            <Title>
              <h3>Sobre</h3>
            </Title>
            <Text className="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              esse autem atque? Atque, veritatis. Eum, rerum pariatur. Sint
              tempora, ratione qui deserunt ea laborum inventore hic quisquam
              optio, quia error possimus dolore dignissimos at. Itaque deleniti
              quae corporis ipsam magnam illo totam officiis obcaecati,
              similique consectetur temporibus placeat explicabo voluptates! Ad
              repellat officiis dicta vitae explicabo quos debitis eius eos?
            </Text>
            <Title>
              <h3>Objetivo</h3>
            </Title>
            <Text className="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              esse autem atque? Atque, veritatis. Eum, rerum pariatur. Sint
              tempora, ratione qui deserunt ea laborum inventore hic quisquam
              optio.
            </Text>
            <Title>
              <h3>O que eu faço?</h3>
            </Title>
            <Text className="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              esse autem atque? Atque, veritatis. Eum, rerum pariatur. Sint
              tempora, ratione qui deserunt ea laborum inventore hic quisquam
              optio, quia error possimus dolore dignissimos at. Itaque deleniti
              quae corporis.
            </Text>
            <ButtonContainer>
              <Button color="green">Baixar meu currículo</Button>
              <Button color="blue">Baixar meu currículo</Button>
            </ButtonContainer>
          </InfoSection>
        </GridContainer>
      </Container>
    </Section>
  );
};

export default About;
