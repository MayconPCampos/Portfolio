import React from "react";
import styled from "styled-components";
import Section from "../atoms/Section";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import SkillCard from "../organisms/SkillCard";
import Grid from "../atoms/Grid";

const Container = styled.div`
  background-color: #2c3e50;
  width: 100%;
  height: fit-content;

  h2 {
    color: #fff;
    margin-top: 5%;
  }
`;

const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 15%;
  margin-bottom: 5%;
`;

const Skills = ({ images }) => {
  return (
    <Container>
      <Section>
        <Grid sm={1} md={1} lg={1} xl={2}>
          <TechInfo>
            <Title>
              <h2>Tecnologias</h2>
            </Title>
            <Text type="bright">
              Python, Flask, Django Framework, Aquitetura REST, APIs, entre
              outras são algumas das ferramentas e conceitos com quais já
              desenvolvi pequenos projetos pessoais, atualmente tenho programado
              com React e Storybook para documentar e testar diferentes idéias
              durante o desenvolvimento.
            </Text>
          </TechInfo>
          <Grid sm={2} md={4} lg={4} xl={4}>
            {images.map((images) => {
              return (
                <SkillCard key={images.key}>
                  <img src={images.url} alt="not" />
                  <Text type="bright">{images.title}</Text>
                </SkillCard>
              );
            })}
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Skills;
