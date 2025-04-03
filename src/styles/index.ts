import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: ${variables["gray-100"]};
  }

  html {
    @media(max-width: 768px) {
      font-size: 80%;
    }
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 400px auto;

  @media(max-width: 768px) {
    grid-template-columns: 140px auto;
  }
`