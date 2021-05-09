import React from "react";
import styled from "styled-components";

export const StyledHeader = (props) => {
  return (
    <StyledWrapper>
      {props.title}
      <h1 className="random">Another heading</h1>
    </StyledWrapper>
  );
};

// example of nesting
//example of variable containing a CSS value
const color = "blue";
const StyledWrapper = styled.section`
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
