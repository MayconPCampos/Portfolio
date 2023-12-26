import styled from "styled-components";
import propTypes from "prop-types";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

// grid responsiva
const GridContainer = styled.div`
  display: grid;
  gap: ${(props) => props.gap};

  ${BreakAt(BreakpointSize.sm)} {
    grid-template-columns: repeat(${(props) => props.sm}, 1fr);
  }

  ${BreakAt(BreakpointSize.md)} {
    grid-template-columns: repeat(${(props) => props.md}, 1fr);
  }
  ${BreakAt(BreakpointSize.lg)} {
    grid-template-columns: repeat(${(props) => props.lg}, 1fr);
  }
  ${BreakAt(BreakpointSize.xl)} {
    grid-template-columns: repeat(${(props) => props.xl}, 1fr);
  }
`;

GridContainer.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  gap: "16px",
};

GridContainer.propTypes = {
  sm: propTypes.number,
  md: propTypes.number,
  lg: propTypes.number,
  xl: propTypes.number,
  gap: propTypes.string,
};

export default GridContainer;
