import React from "react";
import Title from "../atoms/Title";
import Section from "../atoms/Section";
import Grid from "../atoms/Grid";
import styled from "styled-components";
import Separator from "../atoms/Separator";
import Card, { CardMedia, CardBody } from "../organisms/ProjectsCard";
import Icon from "../atoms/Icon";

import siteLink from "../assets/visit-site.svg";
import gitLink from "../assets/github.svg";
import projectsList, { Storybooks } from "../../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Projects = () => {
  return (
    <>
      <Section>
        <Container>
          <Title>
            <h2>Projetos</h2>
          </Title>
          <Separator />
          <Grid sm={1} md={1} lg={2} xl={3} gap="50px">
            {projectsList.map((project) => {
              return (
                <div key={project.key}>
                  <Card>
                    <CardMedia image={project.imageUrl}></CardMedia>
                    <CardBody>
                      <a href={project.link} target="_blank">
                        <Icon>
                          <img src={siteLink} alt="" />
                        </Icon>
                      </a>
                      <a href={project.gitHub} target="_blank">
                        <Icon>
                          <img src={gitLink} alt="" />
                        </Icon>
                      </a>
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
      <Section>
        <Container>
          <Title>
            <h2>Storybooks</h2>
          </Title>
          <Separator />
          <Grid lg={2} gap="50px">
            {Storybooks.map((story) => {
              return (
                <div key={story.key}>
                  <Card>
                    <CardMedia image={story.imageUrl}></CardMedia>
                    <CardBody>
                      <a href={story.link} target="_blank">
                        <Icon>
                          <img src={siteLink} alt="" />
                        </Icon>
                      </a>
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
