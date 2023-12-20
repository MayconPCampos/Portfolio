import React from "react";
import Title from "../atoms/Title";
import Section from "../atoms/Section";
import Grid from "../atoms/Grid";
import projectImage from "../assets/project1.jpg";
import styled from "styled-components";
import Separator from "../atoms/Separator";
import Card, { CardMedia, CardBody } from "../organisms/ProjectsCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Projects = () => {
  return (
    <Section>
      <Container>
        <Title>
          <h2>Projetos</h2>
        </Title>
        <Separator />
        <Grid sm={1} md={1} lg={2} xl={2} marginTop="5%" gap="50px">
          <Card>
            <CardMedia image={projectImage}></CardMedia>
            <CardBody>
              <Title>
                <h4>
                  Meu <span>site</span>
                </h4>
              </Title>
            </CardBody>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
