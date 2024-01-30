import React, { useState, useEffect } from "react";
import Title from "../atoms/Title";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../organisms/Card";
import projectsList from "../../data";
import Section from "../atoms/Section";
import styled from "styled-components";

const Container = styled.div`
  .scrolling {
    opacity: 0;
    transform: translateY(150px);
    transition: all 1.8s;
  }
`;

const CardListContainer = styled.div`
  transition: all 1.8s;
`;

const Projects = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const handleScroll = () => {
    setScrollOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container id="projects">
      <Title>
        <h2>Projects</h2>
      </Title>
      <hr />
      <CardListContainer className={scrollOffset > 2000 ? "" : "scrolling"}>
        <Section>
          <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="center">
            {projectsList.map((project) => {
              return (
                <Grid sm={12} md={6} xl={4} key={project.id}>
                  <Card
                    url={project.link}
                    image={project.imageUrl}
                    description={project.title}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Section>
      </CardListContainer>
    </Container>
  );
};

export default Projects;
