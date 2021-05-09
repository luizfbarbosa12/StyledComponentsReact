import styled from "styled-components";
import desert from "../assets/desert.jpg";

const Hero = styled.div`
  min-height: ${(props) => (props.big ? "100vh" : "50vh")};
  max-height: 100vh;
  background-image: url(${(props) => (props.img ? props.img : desert)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Hero;
