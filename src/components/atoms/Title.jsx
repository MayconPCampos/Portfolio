import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../assets/styles/Breakpoints";

const TitleContainer = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #444;
    font-weight: 800;
    text-transform: uppercase;
    font-family: "Poppins";
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    color: #52b3d9;
    padding-bottom: 0px;
    font-weight: 800;
    font-family: "Poppins";
    line-height: 1.3;
    text-shadow: none;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1%;
  }

  span {
    color: #68c3a3;
  }

  ${BreakAt(BreakpointSize.sm)} {
    h1 {
      font-size: 3rem;
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 800;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 1%;
    }
  }

  ${BreakAt(BreakpointSize.md)} {
    h1 {
      font-size: 4rem;
    }
  }
`;

export default TitleContainer;
