import styled from "styled-components";
import propTypes from "prop-types";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

// grid responsiva
const GridContainer = styled.div`
  display: grid;
  gap: ${(props) => props.gap};
  margin-top: ${(props) => props.marginTop};
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
  marginTop: undefined,
  gap: "16px",
};

GridContainer.propTypes = {
  sm: propTypes.number,
  md: propTypes.number,
  lg: propTypes.number,
  xl: propTypes.number,
  marginTop: propTypes.string,
  gap: propTypes.string,
};

// ajustes das linhas e colunas de cada item
export const GridItem = styled.div`
  grid-column: ${(props) => props.colStart} / ${(props) => props.colEnd};
  grid-row: ${(props) => props.rowStart} / ${(props) => props.rowEnd};
`;

GridItem.defaultProps = {
  colStart: 0,
  colEnd: 1,
  rowStart: 0,
  rowEnd: 1,
};

GridItem.propTypes = {
  colStart: propTypes.number,
  colEnd: propTypes.number,
  rowStart: propTypes.number,
  rowEnd: propTypes.number,
};

export default GridContainer;
