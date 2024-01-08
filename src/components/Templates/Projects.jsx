import React from "react";
import Title from "../atoms/Title";
import Section from "../atoms/Section";
import Grid from "../atoms/Grid";
import Separator from "../atoms/Separator";
import Card, { CardMedia, CardBody } from "../organisms/ProjectsCard";
import styled from "styled-components";

import siteLink from "../assets/visit-site.svg";
import projectsList, { Storybooks } from "../../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Projects = () => {
  return (
    <>
      <Title id="projects-section">
        <h2>Projects</h2>
      </Title>
      <Separator />
      <Section>
        <Container>
          <Grid sm={1} md={2} lg={3} xl={3} gap="90px">
            {projectsList.map((project) => {
              return (
                <div key={project.key}>
                  <Card href={project.link}>
                    <CardMedia image={project.imageUrl}></CardMedia>
                    <CardBody>
                      <img src={siteLink} alt="" />
                    </CardBody>
                    <Title>
                      <h5>{project.title}</h5>
                    </Title>
                  </Card>
                </div>
              );
            })}
          </Grid>
        </Container>
      </Section>
      <Title>
        <h2>Storybooks</h2>
      </Title>
      <Separator />
      <Section>
        <Container>
          <Grid lg={2} gap="90px">
            {Storybooks.map((story) => {
              return (
                <div key={story.key}>
                  <Card href={story.link}>
                    <CardMedia image={story.imageUrl}></CardMedia>
                    <CardBody>
                      <img src={siteLink} alt="" />
                    </CardBody>
                    <Title>
                      <h5>{story.title}</h5>
                    </Title>
                  </Card>
                </div>
              );
            })}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Projects;
