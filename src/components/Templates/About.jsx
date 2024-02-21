import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { Grid } from "@mui/material";
import styled from "styled-components";
import ProfileCard from "../organisms/ProfileCard";
import Section from "../atoms/Section";

const AboutSection = styled.div`
  padding-bottom: 2%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: center;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
  padding-right: 5%;

  @media screen and (max-width: 900px) {
    margin: auto;
    padding: 2%;
  }

  p {
    margin-bottom: 30px;
    margin-top: 0;
  }

  hr {
    width: 100%;
  }
`;

const InfoParagraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  p {
    margin-bottom: 0;
    color: #777;
    font-weight: 300;
    font-size: 0.9rem;
  }

  span {
    color: #333;
    font-weight: 400;
    margin-right: 4px;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Title>
        <h2>About me</h2>
      </Title>
      <hr></hr>
      <Section>
        <Grid container spacing={1}>
          <Grid sm={12} md={12} lg={7} xl={7}>
            <DescriptionContainer>
              <div>
                <Text>
                  I've always enjoyed creating and developing new ideas, I'm an
                  enthusiast of new hardware and software technologies as well
                  as new areas of programming, in my free time I enjoy hiking,
                  composing songs, playing musical instruments, writing,
                  creating new stories and many other hobbies.
                </Text>
                <Text type="grey">
                  I have experience in creating and developing web apps and
                  interfaces, also studied mobile development for Android and
                  iOS, back-end development, data modeling, data science, and
                  containers. At the moment I'm excited about the new artificial
                  intelligence technologies and all the different ways to apply
                  them to speed up and improve front-end and mobile development.
                </Text>
              </div>
              <hr></hr>
              <InfoParagraph>
                <p>
                  <span>
                    <b>Email: </b>
                  </span>
                  mayconpinheirocampos@outlook.com
                </p>
              </InfoParagraph>
              <InfoParagraph>
                <p>
                  <span>
                    <b>Address: </b>
                  </span>
                  Curitiba, PR
                </p>
              </InfoParagraph>
            </DescriptionContainer>
          </Grid>
          <Grid sm={12} md={12} lg={5} xl={5}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Section>
    </AboutSection>
  );
};

export default About;
