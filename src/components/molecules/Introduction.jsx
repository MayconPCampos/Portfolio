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
  gap: 40px;
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
          <a href="https://github.com/MayconPCampos" target="_blank">
            <Icon>
              <img src={githubIcon} alt="" />
            </Icon>
          </a>
          <a
            href="https://www.linkedin.com/in/maycon-pinheiro-campos-6209a222b/"
            target="_blank"
          >
            <Icon>
              <img src={linkedinIcon} alt="" />
            </Icon>
          </a>
        </IconContainer>
      </Container>
    </Section>
  );
};

export default Introduction;
