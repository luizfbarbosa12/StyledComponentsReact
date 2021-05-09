import styled from "styled-components";

// geralmente faríamos isso num arquivo separado e importar onde é necessário
const screen = {
  phone: (...args) => {
    const styles = args;
    console.log(styles);

    return `@media (min-width: 576px) {
        ${styles}
    }`;
  },
};

export const Banner = styled.div`
  background: red;
  h1 {
    color: white;
    text-transform: uppercase;
  }

  @media (min-width: 576px) {
    background: blue;
    h1 {
      color: yellow;
    }
  }
`;

export const SecondBanner = styled.div`
  background: blue;
  h1 {
    color: red;
    text-transform: uppercase;
  }

  ${screen.phone`
    background: blue;
    h1 {
        color: yellow;
    }
  `}
`;
