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
import projectsList from "../../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Projects = () => {
  return (
    <Section>
      <Container>
        <Title>
          <h2>Projetos</h2>
        </Title>
        <Separator />
        <Grid sm={1} md={2} lg={3} xl={3} gap="50px">
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
                </Card>
                <Title>
                  <h5>{project.title}</h5>
                </Title>
              </div>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
