import React from "react";
import Title from "../atoms/Title";
import Section from "../atoms/Section";
import Grid from "../atoms/Grid";
import image from "../assets/project1.jpg";
import styled from "styled-components";

const Image = styled.div`
  img {
    width: 600px;
    min-width: 300px;
    border-radius: 10px;
  }
`;

const Projects = () => {
  return (
    <Section>
      <Title>
        <h2>Meus projetos</h2>
      </Title>
      <Grid sm={1} md={1} lg={2} xl={2}>
        <Image>
          <img src={image} alt="" />
        </Image>
      </Grid>
    </Section>
  );
};

export default Projects;
