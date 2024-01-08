import React from "react";
import Section from "../atoms/Section";
import Title from "../atoms/Title";
import SkillBar from "../organisms/SkillBar";
import Grid from "../atoms/Grid";
import Separator from "../atoms/Separator";
import styled from "styled-components";

const Skills = ({ skills }) => {
  return (
    <>
      <Title id="skill-section">
        <h2>Skills</h2>
      </Title>
      <Separator />

      <Section>
        <Grid xl={2}>
          {skills.map((data) => {
            return <SkillBar skills={data}></SkillBar>;
          })}
        </Grid>
      </Section>
    </>
  );
};

Skills.defaultProps = {
  skills: [
    {
      title: "React",
      progress: 100,
    },
    {
      title: "HTML5",
      progress: 100,
    },
    {
      title: "CSS3",
      progress: 100,
    },
    {
      title: "Javascript",
      progress: 100,
    },
  ],
};

export default Skills;
