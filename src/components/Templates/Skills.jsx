import React from "react";
import styled from "styled-components";
import Box from "../atoms/Box";
import Section from "../atoms/Section";
import Title from "../atoms/Title";
import reactImg from "../assets/react.svg";
import Text from "../atoms/Text";
import TechCard from "../organisms/TechCard";
import Grid from "../atoms/Grid";

const Container = styled.div`
  background-color: #2c3e50;
  width: 100%;
  height: fit-content;

  h2 {
    color: #fff;
    margin-top: 2%;
  }
`;

const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 15%;
  margin-bottom: 5%;
`;

const Skills = () => {
  return (
    <Container>
      <Section>
        <Grid sm={1} md={1} lg={2} xl={2}>
          <TechInfo>
            <Title>
              <h2>Tecnologias</h2>
            </Title>

            <Text type="bright">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              aspernatur sunt officia! Sunt dolorum itaque quo iste pariatur
              ducimus, exercitationem sequi enim id cumque voluptate,
              consequatur suscipit quas laborum at non voluptates incidunt
              molestias odio, praesentium quia rem commodi optio? Eum minima
              perspiciatis, suscipit iste accusamus odio asperiores veniam modi?
            </Text>
          </TechInfo>
          <Grid sm={2} md={4} lg={3} xl={4}>
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
              <Text type="bright">Flask</Text>
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
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Skills;
