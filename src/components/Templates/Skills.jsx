import React from "react";
import styled from "styled-components";
import Section from "../atoms/Section";
import Title from "../atoms/Title";
import reactImg from "../assets/react.svg";
import Text from "../atoms/Text";
import SkillCard from "../organisms/SkillCard";
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
        <Grid sm={1} md={1} lg={1} xl={2}>
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
          <Grid sm={2} md={4} lg={4} xl={4}>
            <SkillCard>
              <img src={reactImg}></img>
              <Text type="bright">Tech</Text>
            </SkillCard>
            <SkillCard>
              <img src={reactImg}></img>
              <Text type="bright">Tech</Text>
            </SkillCard>
            <SkillCard>
              <img src={reactImg}></img>
              <Text type="bright">Tech</Text>
            </SkillCard>
            <SkillCard>
              <img src={reactImg}></img>
              <Text type="bright">Tech</Text>
            </SkillCard>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Skills;
