import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Section = styled.div`
  margin: 2%;

  ${BreakAt(BreakpointSize.md)} {
    margin: 5%;
  }

  ${BreakAt(BreakpointSize.lg)} {
    margin: 5%;
  }

  ${BreakAt(BreakpointSize.xl)} {
    margin: 7%;
  }
`;

export default Section;
