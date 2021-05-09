import React from "react";
import styled from "styled-components";
import Title from "./Title";

export const NavBar = ({ children }) => {
  return (
    <NavbarWrapper>
      <Title title="company Name" />
      {children}
    </NavbarWrapper>
  );
};

export default NavBar;

const NavbarWrapper = styled.nav`
  background: ${(props) => props.theme.primaryColor};
  ${(props) => `color: ${props.theme.secondaryColor}`};
  padding: 1rem;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
`;
