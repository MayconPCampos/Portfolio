import styled from "styled-components";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Section = styled.div`
  padding: 2%;
  padding-top: 8%;
  box-sizing: border-box;
  display: flex;
  margin: auto;

  ${BreakAt(BreakpointSize.md)} {
    width: 650px;
    padding: 0%;
    padding-bottom: 80px;
  }

  ${BreakAt(BreakpointSize.lg)} {
    width: 970px;
    padding: 0%;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  ${BreakAt(BreakpointSize.xl)} {
    width: 1024px;
    padding: 0%;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  &:nth-last-child(2) {
    padding-top: 0;
  }
`;

export default Section;
