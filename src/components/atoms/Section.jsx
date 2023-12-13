import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Section = styled.div`
  padding: 2%;
  padding-top: 8%;

  ${BreakAt(BreakpointSize.md)} {
    padding: 5%;
  }

  ${BreakAt(BreakpointSize.lg)} {
    padding: 5%;
    padding-top: 5%;
  }

  ${BreakAt(BreakpointSize.xl)} {
    padding: 7%;
    padding-top: 5%;
  }
`;

export default Section;
