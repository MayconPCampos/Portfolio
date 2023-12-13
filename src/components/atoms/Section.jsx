import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Section = styled.div`
  ${BreakAt(BreakpointSize.lg)} {
    margin: 5%;
  }

  ${BreakAt(BreakpointSize.xl)} {
    margin: 10%;
  }
`;

export default Section;
