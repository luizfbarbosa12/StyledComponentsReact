import React from "react";
import styled from "styled-components";

// para essa parada de estilizar o próprio componente React no styled components funcionar, precisa passar a prop ClassName pra dentro do componente renderizado dentro do return
export const Title = ({ className, title }) => {
  return <h2 className={className}>{title}</h2>;
};

export default styled(Title)`
  ${(props) => `color: ${props.theme.secondaryColor}`}
`;
