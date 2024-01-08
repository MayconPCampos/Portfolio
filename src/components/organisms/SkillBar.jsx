import React from "react";
import ProgressBar from "../atoms/ProgressBar";
import Text from "../atoms/Text";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  text-align: start;
  margin: auto;
`;

const SkillBar = ({ skills }) => {
  const { title, progress } = skills;

  return (
    <Container>
      <Text type="">{title}</Text>
      <ProgressBar progress={progress} />
    </Container>
  );
};

SkillBar.propTypes = {
  skills: propTypes.shape({
    title: propTypes.string,
    progress: propTypes.number,
  }),
};
export default SkillBar;
