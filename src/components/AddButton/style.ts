import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";

export const Button = styled(Link) `
  background-color: ${variables["green-400"]};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 0.5rem;
  transition: all 0.5s ease;

  &:hover{
    background-color: ${variables["green-500"]};
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`