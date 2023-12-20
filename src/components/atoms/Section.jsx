import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Section = styled.div`
  padding: 2%;
  padding-top: 8%;

  ${BreakAt(BreakpointSize.md)} {
    padding: 10%;
  }

  ${BreakAt(BreakpointSize.lg)} {
    padding: 10%;
    padding-top: 5%;
  }

  ${BreakAt(BreakpointSize.xl)} {
    padding: 15%;
    padding-top: 5%;
  }
`;

export default Section;
