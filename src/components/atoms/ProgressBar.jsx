import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "./Text";

const ProgressBarWrapper = styled.div`
  width: 600px;

  @media screen and ((min-width: 992px )and (max-width: 1600px)) {
    width: 400px;
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
`;

const ProgressBarFill = styled.div`
  display: block;
  width: 100%;
  height: 10px;
  border: 1px solid #111;
  border-radius: 5px;
  background-color: #333;
  margin: 0;

  .is-loading {
    animation: progress 2s ease-in-out forwards;

    @keyframes progress {
      0% {
        width: 0;
      }
      100% {
        width: ${(props) => props.progress};
      }
    }
  }
`;

const ProgressBarFillProgress = styled.div`
  background-color: #21c98e;
  height: 100%;
  width: ${(props) => props.progress}%;
  border: none;
  border-radius: 5px;
`;

const Label = styled.p`
  p {
    margin: 0;
    color: #fff;
  }
`;

const ProgressBar = ({ data }) => {
  const { title, progress } = data;
  const [offsetY, setOffsetY] = useState(0);
  const [startedAnimation, setStartedAnimation] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 1200 && !startedAnimation) {
      setStartedAnimation(true);
      setOffsetY(window.scrollY);
      window.removeEventListener("scroll", handleScroll);
    }
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <ProgressBarWrapper>
      <Text type="">{title}</Text>
      <ProgressBarContainer>
        <ProgressBarFill>
          <ProgressBarFillProgress
            className={offsetY > 1200 ? "is-loading" : ""}
            progress={progress}
          ></ProgressBarFillProgress>
        </ProgressBarFill>
        <Label>{progress}%</Label>
      </ProgressBarContainer>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
