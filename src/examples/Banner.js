import React from "react";
import styled from "styled-components";

export const Banner = ({ title, children, color }) => {
  return (
    //this is an example of a styled component prop use: Color
    <BannerWrapper color={color}>
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  color: ${(props) => props.color};
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;

  h1:hover {
    color: red;
  }
`;
export default Banner;
