import styled, { css } from "styled-components";
import { rotate } from "./AnimatedBox";
const green = "green";
//CSS helper function

const Box = css`
  width: 150px;
  height: 150px;
  margin: 1rem;
  border: 2px solid ${(props) => props.color};
  animation: ${rotate} 3s ease-in-out infinite;
`;
// Se não usar o CSS helper function, a animação nao funciona aqui
export const RedBox = styled.div`
  ${Box}/* border-radius: 50%; */
`;
//Isso aqui não funciona
// const animation = `
// animation: ${rotate} 3s ease-in-out infinite;
// `;
export const GreenBox = styled.div`
  ${Box}
`;
