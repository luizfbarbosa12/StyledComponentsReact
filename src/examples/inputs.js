import styled from "styled-components";

export const BasicInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Enter Value",
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;

//Aqui estou acessando os atributos de uma tag HTML através do método .attrs// Depois dele vem () onde eu uso props e retorno os atributos que quero usar. Posso apenas escrever os atributos de cara ou posso também passar via props.something

export const AwesomeInput = styled.input.attrs((props) => ({
  type: props.type || "number",
  placeholder: props.placeholder || "Enter Value",
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;
