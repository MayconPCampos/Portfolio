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
    padding-bottom: 100px;
  }

  ${BreakAt(BreakpointSize.lg)} {
    width: 970px;
    padding: 0%;
    padding-top: 5%;
    padding-bottom: 150px;
  }

  ${BreakAt(BreakpointSize.xl)} {
    width: 1024px;
    padding: 0%;
    padding-top: 5%;
    padding-bottom: 150px;
  }
`;

export default Section;
