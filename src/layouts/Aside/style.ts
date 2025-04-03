import styled from "styled-components";
import variables from "../../styles/variables";

export const AsideContainer = styled.div`
  background-color: ${variables.bgColorAside};
  padding: 1rem;
  height: 100vh;
`

export const OptionsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const Search = styled.div`
  background-color: ${variables["gray-100"]};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 0.5rem;

  input {
    border: none;
    outline: none;
    margin-left: 0.5rem;
    padding: 0.25rem;
    background: transparent;
    width: 100%;
  }

  svg{
    margin-left: 0.5rem;
  }
`

export const Select = styled.select`
  border-radius: 16px;
  border: none;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  outline: none;
  cursor: pointer;
`