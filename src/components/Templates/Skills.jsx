import React, { useEffect } from "react";
import Title from "../atoms/Title";
import styled from "styled-components";
import backgroundImg from "../../assets/images/bg3.avif";
import { softSkills } from "../../data";
import CircleBar from "../atoms/ProgressCircle";
import ProgressBar from "../atoms/ProgressBar";

const Parallax = styled.div`
  width: 100%;
  height: 100%;
  background: url(${backgroundImg}), rgba(16, 20, 22, 0.98);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover cover;
  background-attachment: fixed;
`;

const SkillsContainer = styled.div`
  background-repeat: no-repeat;
  padding: 5% 15%;

  p {
    margin: 0;
    color: #ddd;
  }
`;

const SkillBars = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  column-gap: 50px;
`;

const CirclesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 45px;
`;

const Skills = ({ skills }) => {
  const handleScroll = () => {
    let skillSectionPositionY = document
      .querySelector(".skill-section")
      .getBoundingClientRect().top;
    let parallax = document.querySelector(".parallax");
    parallax.style.backgroundPositionY = skillSectionPositionY * 0.5 + "px";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="skill-section">
      <Title>
        <h2>Skills</h2>
      </Title>
      <Parallax className="parallax">
        <SkillsContainer>
          <SkillBars>
            {skills.map((skill) => {
              return <ProgressBar data={skill} />;
            })}
          </SkillBars>
          <CirclesContainer>
            {softSkills.map((softSkill) => {
              return (
                <CircleBar
                  degrees={softSkill.degrees}
                  percent={softSkill.percent}
                  label={softSkill.label}
                />
              );
            })}
          </CirclesContainer>
        </SkillsContainer>
      </Parallax>
    </div>
  );
};

export default Skills;
