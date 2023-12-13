import React from "react";
import styled from "styled-components";
import Box from "../atoms/Box";
import Section from "../atoms/Section";
import Title from "../atoms/Title";
import reactImg from "../assets/react.svg";
import Text from "../atoms/Text";
import TechCard from "../organisms/TechCard";

const Container = styled.div`
  background-color: #2c3e50;
  width: 100%;
  height: fit-content;

  h2 {
    color: #fff;
    margin-top: 2%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 50px;
`;

const Skills = () => {
  return (
    <Container>
      <Section>
        <Title>
          <h2>Tecnologias</h2>
        </Title>

        <Text type="bright">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aspernatur sunt officia! Sunt dolorum itaque quo iste pariatur
          ducimus, exercitationem sequi enim id cumque voluptate, consequatur
          suscipit quas laborum at non voluptates incidunt molestias odio,
          praesentium quia rem commodi optio? Eum minima perspiciatis, suscipit
          iste accusamus odio asperiores veniam modi?
        </Text>
        <CardContainer>
          <TechCard>
            <Box size="sm">
              <img src={reactImg}></img>
              <Text type="number">6 meses</Text>
            </Box>
            <Text type="bright">HTML5</Text>
          </TechCard>
          <TechCard>
            <Box size="sm">
              <img src={reactImg}></img>
              <Text type="number">6 meses</Text>
            </Box>
            <Text type="bright">CSS3</Text>
          </TechCard>
          <TechCard>
            <Box size="sm">
              <img src={reactImg}></img>
              <Text type="number">6 meses</Text>
            </Box>
            <Text type="bright">Javascript</Text>
          </TechCard>
          <TechCard>
            <Box size="sm">
              <img src={reactImg}></img>
              <Text type="number">6 meses</Text>
            </Box>
            <Text type="bright">React</Text>
          </TechCard>
          <TechCard>
            <Box size="sm">
              <img src={reactImg}></img>
              <Text type="number">6 meses</Text>
            </Box>
            <Text type="bright">Python</Text>
          </TechCard>
          <TechCard>
            <Box size="sm">
              <img src={reactImg}></img>
              <Text type="number">6 meses</Text>
            </Box>
            <Text type="bright">Git</Text>
          </TechCard>
          <TechCard>
            <Box size="sm">
              <img src={reactImg}></img>
              <Text type="number">6 meses</Text>
            </Box>
            <Text type="bright">React native</Text>
          </TechCard>
        </CardContainer>
      </Section>
    </Container>
  );
};

export default Skills;
