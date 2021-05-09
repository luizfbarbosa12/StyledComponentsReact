import React from "react";
import styled from "styled-components";

export const StyledHeader = ({ title, className }) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h1 className="random">Another heading</h1>
    </section>
  );
};

// example of nesting
//example of variable containing a CSS value
const color = "blue";

const StyledWrapper = styled(StyledHeader)`
  background-color: red;
  transition: all 2s ease-in-out h1 {
    color: ${color};
  }

  .random {
    color: green;
  }

  &:hover {
    background: black;
  }
`;

export default StyledWrapper;
