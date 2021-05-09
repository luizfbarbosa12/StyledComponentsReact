import React from "react";
import styled from "styled-components";
export const Content = ({ className }) => {
  return (
    <section className={className}>
      <h1> Section Titles</h1>
      <p>lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${(props) => `background: ${props.theme.secondaryColor}`};
  ${(props) => `color: ${props.theme.primaryColor}`};
`;
