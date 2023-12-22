import React from "react";
import Title from "../atoms/Title";
import Section from "../atoms/Section";
import Grid from "../atoms/Grid";
import projectImage from "../assets/project1.jpg";
import styled from "styled-components";
import Separator from "../atoms/Separator";
import Card, { CardMedia, CardBody } from "../organisms/ProjectsCard";
import Button from "../atoms/Button";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 50px;
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
        <Grid sm={1} md={2} lg={3} xl={3} marginTop="5%" gap="50px">
          <div>
            <Card>
              <CardMedia image={projectImage}></CardMedia>
              <CardBody>
                <Button color="transparent">Ver no GitHub</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardMedia image={projectImage}></CardMedia>
              <CardBody>
                <Button color="transparent">Ver no GitHub</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardMedia image={projectImage}></CardMedia>
              <CardBody>
                <Button color="transparent">Ver no GitHub</Button>
              </CardBody>
            </Card>
            <Button>Vizualizar</Button>
          </div>
          <div>
            <Card>
              <CardMedia image={projectImage}></CardMedia>
              <CardBody>
                <Button color="transparent">Ver no GitHub</Button>
              </CardBody>
            </Card>
            <Button>Vizualizar</Button>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
