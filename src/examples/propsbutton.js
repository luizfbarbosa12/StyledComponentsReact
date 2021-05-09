import styled from "styled-components";

const PropsButton = styled.button`
  background: ${(props) => (props.color ? props.color : "yellow")};
  color: white;
  padding: 1rem;
  font-size: 2rem;
`;

export default PropsButton;

//It is possible to use functions that receive props in styled components
