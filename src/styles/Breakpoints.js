const BreakpointSize = {
  sm: 414,
  md: 676,
  lg: 1024,
  xl: 1360,
};

export const BreakAt = (size) => `@media screen and (min-width: ${size}px)`;

export default BreakpointSize;
