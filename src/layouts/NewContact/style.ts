import styled from "styled-components";
import variables from "../../styles/variables";

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 1rem;
  
  h1{
    margin-bottom: 1rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  label {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 600;
    gap: 0.25rem;
  }

  input, select {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.25rem;
    outline: none;
    border-radius: 8px;
    border: 1px solid ${variables.bgColorAside};
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`
export const SaveButton = styled.button`
  background-color: ${variables["green-500"]};
  color: white;
  border: none;
  padding: 0.5rem 2.5rem;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &:hover{
    background-color: ${variables["green-400"]};
  }
`

export const RemoveButton = styled.button`
  background-color: ${variables["red-500"]};
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &:hover{
    background-color: ${variables["red-400"]};
  }
`