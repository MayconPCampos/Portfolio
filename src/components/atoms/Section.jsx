import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Section = styled.div`
  padding: 0% 2% 5%;
  box-sizing: border-box;
  margin: auto;

  ${BreakAt(BreakpointSize.md)} {
    width: 650px;
  }

  ${BreakAt(BreakpointSize.lg)} {
    width: 970px;

    padding-top: 80px;
  }

  ${BreakAt(BreakpointSize.xl)} {
    width: 1280px;
  }
`;

export default Section;
