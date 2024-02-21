import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CircleContainer = styled.div`
  width: fit-content;
  text-align: center;
  animation: all 1s;
  margin-top: 30px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background-color: #222;
  }

  .is-animated {
    animation: conic-effect 1.5s ease-in-out forwards;

    @keyframes conic-effect {
      0% {
        --angle: 0deg;
      }

      100% {
        --angle: ${(props) => props.degrees}deg;
      }
    }
  }

  @property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }

  .progress-value {
    position: relative;
    top: 55px;
    left: 0;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: #fff;
  }
`;

const Fill = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(#21c98e var(--angle), #333 var(--angle));
`;

const Label = styled.p`
  color: #ddd;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const CircleBar = ({ degrees, percent, label }) => {
  const [startedAnimation, setStartedAnimation] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 1300 && !startedAnimation) {
      setStartedAnimation(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <CircleContainer>
      <Circle degrees={degrees}>
        <Fill className={startedAnimation ? "is-animated" : ""}>
          <span className="progress-value">{percent}%</span>
        </Fill>
      </Circle>
      <Label className="label">{label}</Label>
    </CircleContainer>
  );
};

CircleBar.propTypes = {
  degrees: PropTypes.number,
  percent: PropTypes.number,
  label: PropTypes.string,
};

export default CircleBar;
