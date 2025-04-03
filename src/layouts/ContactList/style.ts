import styled from "styled-components";
import variables from "../../styles/variables";
import { Link } from "react-router-dom";

export const ContactListContainer = styled.div`
  color: ${variables["gray-100"]};
  margin-top: 1rem;

  h3{
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    text-align: center;
    border-bottom: 1px solid ${variables["gray-100"]};
  }
  p{
    margin-bottom: 0.5rem;
  }
`
export const StyledLink = styled(Link)`
  color: ${variables["gray-100"]};
  
`