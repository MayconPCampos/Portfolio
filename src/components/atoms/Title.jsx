import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Title = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #333;
    font-weight: 800;
    text-transform: uppercase;
    font-family: "Roboto";
    text-align: center;
  }

  h1 {
    font-size: 1.8rem;
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 800;
    font-family: "Inter";
    line-height: 1.3;
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

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  h6 {
    font-size: 0.7rem;
  }

  span {
    color: #68c3a3;
  }

  ${BreakAt(BreakpointSize.sm)} {
    h1 {
      font-size: 2.5rem;
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 800;
    }

    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 1%;
    }
  }

  ${BreakAt(BreakpointSize.md)} {
    h1 {
      font-size: 3.7rem;
    }

    h2 {
      font-size: 1.7rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1%;
    }
  }
`;

export default Title;
