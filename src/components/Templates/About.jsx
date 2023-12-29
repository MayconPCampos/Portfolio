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
        <GridContainer sm={1} md={1} lg={12} xl={12} gap="50px">
          <InfoFrame>
            <PerfilFrame></PerfilFrame>
          </InfoFrame>
          <InfoSection>
            <Title>
              <h3>Sobre</h3>
            </Title>
            <Text className="info-text">
              Eu sempre gostei de criar e desenvolver novas idéias, sou
              entusiasta de novas tecnologias de hardware, software e novas
              áreas dentro da programação. Gosto de programar, fazer músicas,
              viajar, fazer trekking, escrever e criar estórias entre vários
              outros hobbies.
            </Text>
            <Title>
              <h3>Objetivo</h3>
            </Title>
            <Text className="info-text">
              Oportunidade de trabalhar para uma companhia onde eu possa
              desenvolver meu lado profissional e pessoal, fazer parte de uma
              equipe para compartilhar experiências e atingir o máximo do meu
              potêncial.
            </Text>
            <Title>
              <h3>O que eu faço?</h3>
            </Title>
            <Text className="info-text">
              Maior experiência no desenvolvimento de páginas e interfaces para
              web, tendo também contato com programação mobile, back-end, banco
              de dados, ciência de dados e criação de containers, atualmente
              iniciei estudos em inteligência artificial nas área de machine
              learning e deep learning com objetivos de aplicar e usar tais
              ferramentas no desenvolvimento nas áreas de desenvolvimento web e
              mobile.
            </Text>
            <ButtonContainer>
              <Button color="green">
                <a
                  href="../assets/cv.pdf"
                  download="Maycon Pinheiro Campos - Currículo"
                >
                  Download currículo
                </a>
              </Button>
              <Button color="blue">
                <a href="../assets/cv.png" target="_blank">
                  Visualizar online
                </a>
              </Button>
            </ButtonContainer>
          </InfoSection>
        </GridContainer>
      </Container>
    </Section>
  );
};

export default About;
