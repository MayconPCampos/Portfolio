import React from "react";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Icon from "../atoms/Icon";
import Section from "../atoms/Section";

import styled from "styled-components";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const Introduction = () => {
  return (
    <Section>
      <Container>
        <Text type="bold">Maycon P. Campos</Text>
        <Title>
          <h1>
            Desenvolvedor <span>Front-end</span>
          </h1>
        </Title>
        <Text type="bright">
          Programador com conhecimentos<br></br>
          em tecnologias para desenvolvimento front-end
          <br></br>
          HTML, CSS, Javascript, React & React Native
        </Text>
        <IconContainer>
          <Icon>
            <img src={linkedinIcon} alt="" />
          </Icon>
          <Icon>
            <img src={githubIcon} alt="" />
          </Icon>
        </IconContainer>
      </Container>
    </Section>
  );
};

export default Introduction;
