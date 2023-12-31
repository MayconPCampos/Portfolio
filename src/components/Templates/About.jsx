import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Separator from "../atoms/Separator";
import GridContainer from "../atoms/Grid";
import Section from "../atoms/Section";
import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";
import Button from "../atoms/Button";
import PerfilFrame from "../organisms/PerfilFrame";

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 30px;
    margin-top: 0;
  }

  ${BreakAt(BreakpointSize.sm)} {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }

  ${BreakAt(BreakpointSize.lg)} {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  }
`;

const InfoFrame = styled.div`
  ${BreakAt(BreakpointSize.sm)} {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  ${BreakAt(BreakpointSize.lg)} {
    grid-column: 8 / -1;
    grid-row: 1 / 2;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;

  button {
    margin-top: 0p;
  }
`;

const About = () => {
  return (
    <>
      <Title id="about-section">
        <h2>About me</h2>
      </Title>
      <Separator />
      <Section>
        <GridContainer sm={1} md={1} lg={12} xl={12} gap="50px">
          <InfoFrame>
            <PerfilFrame></PerfilFrame>
          </InfoFrame>
          <InfoSection>
            <Text className="info-text">
              I've always enjoyed creating and developing new ideas, I'm an
              enthusiast of new hardware and software technologies as well as
              new areas of programming, in my free time I enjoy hiking,
              composing songs, playing musical instruments, writing, creating
              new stories and many other hobbies.
            </Text>
            <Text type="grey" className="info-text">
              I have experience in creating and developing web apps and
              interfaces, also studied mobile development for Android and iOS,
              back-end development, data modeling, data science, and containers.
              At the moment I'm excited about the new artificial intelligence
              technologies and all the different ways to apply them to speed up
              and improve front-end and mobile development.
            </Text>
            <Separator />
            <ButtonContainer>
              <Button color="green">
                <a
                  href="../assets/resume-maycon-campos.pdf"
                  download="Resume - Maycon Campos"
                >
                  Download Resume
                </a>
              </Button>
              <Button color="purple">
                <a
                  href="../assets/maycon-pinheiro-campos.pdf"
                  download="Maycon Pinheiro Campos - Currículo"
                >
                  Download Currículo
                </a>
              </Button>
            </ButtonContainer>
          </InfoSection>
        </GridContainer>
      </Section>
    </>
  );
};

export default About;
