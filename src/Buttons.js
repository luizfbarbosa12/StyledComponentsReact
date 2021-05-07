import styled from "styled-components";

const color = "#f15025";

export const Button = styled.button`
  color: red;
  background: blue;
  text-transform: uppercase;
`;

export const SecondButton = styled.button`
  color: ${color}; //it is possible to access javascript variables in styled components like this
  background: var(--primaryColor);
  text-transform: uppercase;
`;

// It is possible to access the variables created in the global css on styled components as well
