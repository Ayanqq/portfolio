import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  position:relative;
  margin-bottom:90px;
  

  &::before {
    content: '';
    width: 55px;
    height:1px;
    background-color: ${theme.colors.accent};
    display: inline-block;
    
    position:absolute;
    bottom:-30px;
    
  }


`