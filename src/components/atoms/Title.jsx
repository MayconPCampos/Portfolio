import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Title = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #2c3e50;
    font-weight: 800;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.8rem;
    color: #52b3d9;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 800;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 3%;
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
      color: #52b3d9;
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 800;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 3%;
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 1%;
    }
  }

  ${BreakAt(BreakpointSize.md)} {
    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 3%;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1%;
    }
  }
`;

export default Title;
